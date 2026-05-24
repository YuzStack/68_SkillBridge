import { useQuery } from '@tanstack/react-query';

import {
  getLatestUserAssessment,
  generateAiCareerRecommendations,
} from '../../../services/apiRecommendations';

/**
 * Declarative custom hook coordinating the data pipeline cleanly
 */
export function useCareerRecommendations(userId) {
  // Query 1: Grab the latest evaluation metrics from the database
  const { data: assessment, isLoading: isLoadingAssessment } = useQuery({
    queryKey: ['latestAssessment', userId],
    queryFn: () => getLatestUserAssessment(userId),
    enabled: !!userId,
  });

  // Query 2: Feed that data to Gemini once Query 1 finishes successfully
  const {
    data: recommendations,
    isLoading: isLoadingAi,
    error,
  } = useQuery({
    queryKey: ['aiRecommendations', assessment?.id],
    queryFn: () => generateAiCareerRecommendations(assessment),
    enabled: !!assessment, // Dependent query logic structure
    staleTime: 1000 * 60 * 30, // Cache results for 30 minutes
  });

  return {
    isLoading: isLoadingAssessment || isLoadingAi,
    recommendations,
    assessment,
    error,
  };
}
