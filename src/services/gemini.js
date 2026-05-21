import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    'Missing VITE_GEMINI_API_KEY environment configuration variable.',
  );
}

const genAI = new GoogleGenAI({ apiKey });

// Helper to enforce clean JSON formatting out of the API
const JSON_CLEAN_REGEX = /^```json\s+|\s+```$/g;

/**
 * Generates an automated, dynamic multi-choice quiz based on targeted skills
 */
export async function generateAssessmentQuestions(selectedSkills) {
  const prompt = `
    You are an expert technical interviewer. Generate an assessment exam to test proficiency.
    SKILLS TO TEST: ${selectedSkills.join(', ')}

    Generate exactly 2 high-quality Multiple Choice Questions (MCQs) per skill listed.
    Each question must have 4 distinct, plausible options, an explicit zero-indexed correct answer, and an educational explanation.

    Return ONLY a raw JSON array matching this exact schema layout without markdown formatting tags:
    [
      {
        "id": 1,
        "skill": "Skill Name",
        "question": "Clear technical scenario question?",
        "options": ["Option 0", "Option 1", "Option 2", "Option 3"],
        "correct_option_index": 0,
        "explanation": "Brief explanation addressing why the option is correct."
      }
    ]
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash', // Using the stable production-ready flash model
      contents: prompt,
    });

    const cleanText = response.text.replace(JSON_CLEAN_REGEX, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Gemini Generation Error:', error);
    throw new Error('Failed to compile assessment parameters.');
  }
}
