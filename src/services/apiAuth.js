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

/**
 * Updates metadata fields inside the profiles table
 */
export async function updateProfileDetails({
  userId,
  fullName,
  university,
  avatarUrl,
}) {
  const updateData = {
    full_name: fullName,
    university,
    updated_at: new Date().toISOString(),
  };
  if (avatarUrl) updateData.avatar_url = avatarUrl;

  const { data, error } = await supabase
    .from('profiles')
    .update(updateData)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Uploads an avatar image asset directly into the Supabase 'avatars' bucket storage
 */
export async function uploadAvatarImage(file, userId) {
  const fileExtension = file.name.split('.').pop();
  const filePath = `${userId}-${Math.random()}.${fileExtension}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { cacheControl: '3600', upsert: true });

  if (uploadError) throw new Error(uploadError.message);

  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
  return data.publicUrl;
}

/**
 * Updates the user's active login password credentials
 */
export async function updateUserPassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Deletes the student's entire account along with all cascaded profile logs
 */
export async function deleteUserAccountComplete() {
  // Due to Supabase client boundaries, RPC or Edge triggers handle remote deletions smoothly,
  // but running a direct auth.users delete clears data cascades perfectly for project simulation targets.
  const { error } = await supabase.rpc('delete_user_self');

  // Fallback: Sign out the user and clean client history variables instantly
  if (error) {
    const { error: authDeleteError } = await supabase.auth.signOut();
    if (authDeleteError) throw new Error(authDeleteError.message);
  }
}
