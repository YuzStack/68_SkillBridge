import { useQuery, useMutation } from '@tanstack/react-query';
import { generateAssessmentQuestions } from '../../../services/gemini';
import { supabase } from '../../../services/supabase';

/**
 * React Query hook to fetch and cache Gemini AI generated multi-choice questions
 */
export function useAssessmentQuestions(skills) {
  return useQuery({
    queryKey: ['assessmentQuestions', skills],
    queryFn: () => generateAssessmentQuestions(skills),
    enabled: !!skills && skills.length > 0, // Only execute if skills array has data
    staleTime: Infinity, // Keep the generated test stable for the duration of the exam session
    retry: 1,
  });
}

/**
 * Mutation hook to log exam data into public.assessments inside Supabase
 */
export function useSubmitAssessment() {
  return useMutation({
    mutationFn: async ({
      userId,
      discipline,
      selectedSkills,
      verifiedScore,
      rawPayload,
    }) => {
      const { data, error } = await supabase
        .from('assessments')
        .insert([
          {
            user_id: userId,
            tested_discipline: discipline,
            selected_skills: selectedSkills,
            verified_match_score: verifiedScore,
            raw_performance_payload: rawPayload,
          },
        ])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
  });
}
