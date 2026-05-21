import { supabase } from './supabase';

/**
 * Registers a new student using Supabase Auth
 */
export async function signUpUser({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Authenticates an existing student session
 */
export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Grabs the active user session and attaches their custom profile table row
 */
export async function getCurrentUser() {
  // 1. Check if there is an active session from Supabase
  const { data: sessionData } = await supabase.auth.getSession();
  if (!sessionData.session) return null;

  const { data: authUser, error: authError } = await supabase.auth.getUser();
  if (authError) throw new Error(authError.message);

  // 2. Fetch the corresponding synchronized profile row from PostgreSQL
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authUser.user.id)
    .single();

  if (profileError) {
    console.error('Profile fetch error:', profileError.message);
    return null;
  }

  // Return a combined object containing both credentials and custom profile metadata
  return {
    ...authUser.user,
    profile,
  };
}

/**
 * Signs out the current user session completely
 */
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
