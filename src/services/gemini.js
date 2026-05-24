import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    'Missing VITE_GEMINI_API_KEY environment configuration variable.',
  );
}

export const genAI = new GoogleGenAI({ apiKey });

const JSON_CLEAN_REGEX = /^```json\s+|\s+```$/g;

/**
 * Generates an automated, dynamic multi-choice quiz with adaptive volume
 */
export async function generateAssessmentQuestions(selectedSkills) {
  // Calculate dynamic constraints based on the size of the chosen array
  const skillCount = selectedSkills.length;
  const questionsPerSkill = skillCount <= 2 ? 5 : 3;

  const prompt = `
    You are an expert technical interviewer. Generate an assessment exam to test professional proficiency.
    SKILLS TO TEST: ${selectedSkills.join(', ')}

    CRITICAL INSTRUCTION: Because the student selected exactly ${skillCount} skill(s), you MUST generate exactly ${questionsPerSkill} high-quality Multiple Choice Questions (MCQs) for EACH individual skill listed. 
    Total questions in your output array must be exactly ${skillCount * questionsPerSkill}.

    Each question must have 4 distinct, plausible options, an explicit zero-indexed correct answer, and a clear educational explanation.

    Return ONLY a raw JSON array matching this exact schema layout without markdown formatting tags or code block fences:
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
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const cleanText = response.text.replace(JSON_CLEAN_REGEX, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Gemini Generation Error:', error);
    throw new Error('Failed to compile adaptive assessment parameters.');
  }
}
