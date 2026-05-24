import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAssessmentRecord } from '../../../services/apiRecommendations';
import { supabase } from '../../../services/supabase';
import toast from 'react-hot-toast';

/**
 * Custom hook to aggregate historic logs for the main workspace landing page
 */
export function useDashboardData(userId) {
  return useQuery({
    queryKey: ['dashboardHistory', userId],
    queryFn: async () => {
      if (!userId) return { history: [], roadmaps: [] };

      // 1. Fetch all evaluation records ordered by newest first
      const { data: history, error: historyError } = await supabase
        .from('assessments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (historyError) throw new Error(historyError.message);

      // 2. Fetch all persistent roadmaps saved to the profile
      const { data: roadmaps, error: roadmapError } = await supabase
        .from('roadmaps')
        .select('*')
        .eq('user_id', userId);

      if (roadmapError) throw new Error(roadmapError.message);

      return { history, roadmaps };
    },
    enabled: Boolean(userId),
    staleTime: 1000 * 60 * 2, // 2-minute refresh buffer
  });
}

/**
 * React Query mutation to handle clearing history rows with instant cache updates
 */
export function useDeleteAssessment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAssessmentRecord,
    onSuccess: () => {
      toast.success('Evaluation record permanently removed.');
      // Invalidate the cache matrix to trigger an automatic background update across the UI
      queryClient.invalidateQueries({ queryKey: ['dashboardHistory'] });
      // Also clear active roadmap cache headers since child records cascaded away
      queryClient.invalidateQueries({ queryKey: ['activeRoadmap'] });
    },
    onError: err => {
      toast.error('Failed to clear row: ' + err.message);
    },
  });
}
