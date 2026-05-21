import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  signUpUser,
} from '../../../services/apiAuth';

/**
 * Hook to retrieve and track the current logged-in user state
 */
export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: false, // Don't continuously retry auth checks if unauthenticated
  });

  return {
    isLoading,
    user,
    profile: user?.profile || null,
    isAuthenticated: user?.role === 'authenticated',
    error,
  };
}

/**
 * Hook to run the sign-up operation via mutations
 */
export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signUpUser,
    onSuccess: data => {
      // Set the user query data cache directly to log them in instantly
      queryClient.setQueryData(['user'], data.user);
    },
  });

  return { signup, isSigningUp };
}

/**
 * Hook to run the login operation via mutations
 */
export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: loginUser,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { login, isLoggingIn };
}

/**
 * Hook to terminate the session context wrapper
 */
export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.clear(); // Clear all cached query states on sign out
      navigate('/login', { replace: true });
    },
  });

  return { logout, isLoggingOut };
}
