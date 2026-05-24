import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import {
  updateProfileDetails,
  uploadAvatarImage,
  updateUserPassword,
  deleteUserAccountComplete,
  sendPasswordResetEmail,
} from '../../../services/apiAuth';

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: async ({ userId, fullName, university, imageFile }) => {
      let avatarUrl = null;
      if (imageFile) {
        avatarUrl = await uploadAvatarImage(imageFile, userId);
      }
      return updateProfileDetails({ userId, fullName, university, avatarUrl });
    },
    onSuccess: () => {
      toast.success('Personal profile details updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: err => toast.error(err.message),
  });

  const { mutate: updatePassword, isPending: isUpdatingPassword } = useMutation(
    {
      mutationFn: updateUserPassword,
      onSuccess: () => toast.success('Security password altered successfully!'),
      onError: err => toast.error(err.message),
    },
  );

  const { mutate: deleteAccount, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserAccountComplete,
    onSuccess: () => {
      toast.success('Account profile wiped out.');
      window.location.href = '/login';
    },
    onError: err => toast.error(err.message),
  });

  return {
    updateProfile,
    isUpdatingProfile,
    updatePassword,
    isUpdatingPassword,
    deleteAccount,
    isDeleting,
  };
}

/**
 * React Query mutation managing the recovery dispatch lifecycle state
 */
export function useForgotPassword() {
  return useMutation({
    mutationFn: sendPasswordResetEmail,
  });
}
