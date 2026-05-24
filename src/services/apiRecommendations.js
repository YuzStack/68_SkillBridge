import { supabase } from './supabase';
import { genAI } from './gemini';

const JSON_CLEAN_REGEX = /^```json\s+|\s+```$/g;

/**
 * 1. Pulls the student's absolute latest assessment row from Supabase
 */
export async function getLatestUserAssessment(userId) {
  const { data, error } = await supabase
    .from('assessments')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) throw new Error(error.message);
  return data[0] || null;
}

/**
 * 2. Feeds that assessment row to Gemini to generate the career options payload
 */
export async function generateAiCareerRecommendations(assessmentData) {
  if (!assessmentData) return [];

  const prompt = `
    You are an expert Nigerian career counselor and tech talent placement officer.
    Analyze this student's objective technical evaluation performance metrics to recommend matching careers:

    EVALUATION METRICS:
    - Target Domain Field Focus: ${assessmentData.tested_discipline}
    - Verified Input Competencies: ${assessmentData.selected_skills.join(', ')}
    - Objective Exam Score: ${assessmentData.verified_match_score}%

    Based on this data, identify exactly three real-world career paths suitable for the student. Focus on fields relevant to modern Nigerian industries (e.g., Fintech, localized engineering, or global remote consulting tracks).

    Identify 'Verified Strengths' based only on skills that match their baseline focus, and identify explicit 'Skill Gaps' the student needs to work on to become job-ready.

    Return ONLY a raw JSON array matching this exact schema layout without markdown code blocks:
    [
      {
        "id": 1,
        "title": "Frontend Engineer",
        "description": "Build modern interfaces and dynamic web apps...",
        "match_percentage": 88,
        "strengths": ["React Fundamentals", "Tailwind CSS Layouts"],
        "gaps": ["Advanced State Management (Redux)", "Unit Testing Frameworks"]
      }
    ]
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const cleanText = response.text.replace(JSON_CLEAN_REGEX, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Gemini Recommendation Fetch Failure:', error);
    throw new Error('Failed to parse career recommendation insights.');
  }
}
