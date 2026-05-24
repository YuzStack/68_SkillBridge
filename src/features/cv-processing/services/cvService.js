import { genAI } from '../../../services/gemini';

// Official un-bundled stable minified worker build path matching version 4.x
const PDF_WORKER_SRC =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs';

/**
 * 1. Extracts plain raw text contents out of a local binary PDF file blob
 */
export async function parsePdfText(file) {
  // Import the primary module script dynamically from CDN
  const pdfjs =
    await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  let fullText = '';

  // Iterate through every page inside the document layout grid
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageItems = textContent.items.map(item => item.str).join(' ');
    fullText += pageItems + '\n';
  }

  return fullText;
}

/**
 * 2. Transmits unstructured text to Gemini to parse out real data matching our layout
 */
export async function extractCvMetricsWithAi(rawCvText) {
  const prompt = `
    You are an expert AI human resources assistant and ATS resume data parsing engine.
    Analyze the following raw text extracted from an applicant's CV document:

    ---
    ${rawCvText}
    ---

    Extract the primary educational qualification history, overall professional experiences, and a flat array list mapping out all technical/domain skills.

    Return ONLY a raw JSON object matching this exact schema layout without markdown code fence blocks:
    {
      "education": "Most prominent degree title and associated institution name",
      "experience": "Concise paragraph or list summarizing historical professional roles or internship involvements",
      "skills": ["SkillA", "SkillB", "SkillC", "SkillD"]
    }
  `;

  const response = await genAI.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: prompt,
  });

  const cleanText = response.text.replace(/^```json\s+|\s+```$/g, '').trim();
  return JSON.parse(cleanText);
}
