import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CameraIcon, Trash2Icon } from 'lucide-react';
import toast from 'react-hot-toast';

import { useUser } from '../hooks/useUser';
import { useUpdateSettings } from '../hooks/useSettings';
import Spinner from '../../../components/Spinner';

export default function Settings() {
  const { user, profile, isLoading } = useUser();
  const {
    updateProfile,
    isUpdatingProfile,
    updatePassword,
    isUpdatingPassword,
    deleteAccount,
    isDeleting,
  } = useUpdateSettings();

  const fileInputRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Initialize independent Hook Form controllers
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    setValue,
  } = useForm();
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    getValues,
    reset: resetPasswordForm,
    formState: { errors: passwordErrors },
  } = useForm();

  // Load baseline profile defaults into inputs when user schema arrives
  useEffect(() => {
    if (profile) {
      setValue('fullName', profile.full_name);
      setValue('university', profile.university || 'Kwara State University');
      // eslint-disable-next-line
      if (profile.avatar_url) setAvatarPreview(profile.avatar_url);
    }
  }, [profile, setValue]);

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  const handleImageChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        toast.error('Avatar file boundaries must stay below 1MB.');
        return;
      }
      setSelectedFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const onProfileSave = data => {
    updateProfile({
      userId: user.id,
      fullName: data.fullName,
      university: data.university,
      imageFile: selectedFile,
    });
  };

  const onPasswordSave = data => {
    updatePassword(data.newPassword, {
      onSuccess: () => resetPasswordForm(),
    });
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        'CRITICAL WARNING: Are you absolutely sure you want to delete your SkillBridge account? This will permanently wipe your profile, scores, history, and roadmaps. This action cannot be undone.',
      )
    ) {
      deleteAccount();
    }
  };

  const initials = profile?.full_name
    ? profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'ST';

  return (
    <div className='bg-canvas-default mx-auto min-h-[calc(100vh-4rem)] max-w-4xl space-y-8 p-4 font-sans md:p-8'>
      <div>
        <h1 className='text-brand-dark text-2xl font-bold'>Profile Settings</h1>
        <p className='text-brand-muted mt-1 text-sm'>
          Manage your account details and preferences.
        </p>
      </div>

      <input
        type='file'
        ref={fileInputRef}
        onChange={handleImageChange}
        accept='image/*'
        className='hidden'
      />

      {/* BLOCK 1: PERSONAL DETAILS */}
      <form
        onSubmit={handleProfileSubmit(onProfileSave)}
        className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'
      >
        <div className='space-y-6 p-6 md:p-8'>
          <h2 className='text-brand-dark border-border-subtle border-b pb-3 text-base font-bold'>
            Personal Information
          </h2>

          <div className='flex flex-col items-start gap-8 md:flex-row'>
            <div className='mx-auto shrink-0 text-center md:mx-0'>
              <div
                onClick={() => fileInputRef.current?.click()}
                className='bg-brand-secondary border-canvas-panel group relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 text-3xl font-bold text-white shadow-sm'
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt='Profile Avatar'
                    className='h-full w-full object-cover'
                  />
                ) : (
                  initials
                )}
                <div className='bg-brand-dark/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
                  <CameraIcon size={20} />
                </div>
              </div>
              <p className='text-brand-muted text-xxs mt-3 font-semibold tracking-wider uppercase'>
                Max Size 1MB
              </p>
            </div>

            <div className='w-full flex-1 space-y-5'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div>
                  <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    {...registerProfile('fullName', { required: true })}
                    className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                  />
                </div>
                <div>
                  <label className='text-brand-dark mb-1.5 block text-xs font-semibold opacity-60'>
                    Email Address (Locked)
                  </label>
                  <input
                    type='email'
                    defaultValue={profile?.email}
                    disabled
                    className='bg-canvas-inset/60 border-border-subtle text-brand-dark/50 w-full cursor-not-allowed rounded-lg border px-4 py-2.5 text-sm focus:outline-none'
                  />
                </div>
              </div>

              <div>
                <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                  University / Institution
                </label>
                <input
                  type='text'
                  {...registerProfile('university', { required: true })}
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-canvas-inset border-border-subtle flex justify-end gap-3 border-t p-4 md:px-8'>
          <button
            type='submit'
            disabled={isUpdatingProfile}
            className='bg-brand-primary hover:bg-brand-primary/90 cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            {isUpdatingProfile ? 'Saving Details...' : 'Save Personal Details'}
          </button>
        </div>
      </form>

      {/* BLOCK 2: PASSWORD SECURITY */}
      <form
        onSubmit={handlePasswordSubmit(onPasswordSave)}
        className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'
      >
        <div className='space-y-5 p-6 md:p-8'>
          <h2 className='text-brand-dark border-border-subtle border-b pb-3 text-base font-bold'>
            Security Credentials
          </h2>

          <div className='grid max-w-2xl grid-cols-1 gap-5 md:grid-cols-2'>
            <div>
              <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                New Password
              </label>
              <input
                type='password'
                placeholder='Minimum 8 characters'
                {...registerPassword('newPassword', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must match minimum 8 chars',
                  },
                })}
                className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
              />
              {passwordErrors.newPassword && (
                <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                  {passwordErrors.newPassword.message}
                </p>
              )}
            </div>
            <div>
              <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                Confirm New Password
              </label>
              <input
                type='password'
                placeholder='Repeat password'
                {...registerPassword('confirmPassword', {
                  required: 'Please confirm password',
                  validate: val =>
                    val === getValues('newPassword') ||
                    'The inputs do not match',
                })}
                className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
              />
              {passwordErrors.confirmPassword && (
                <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                  {passwordErrors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='bg-canvas-inset border-border-subtle flex justify-end gap-3 border-t p-4 md:px-8'>
          <button
            type='submit'
            disabled={isUpdatingPassword}
            className='bg-brand-primary hover:bg-brand-primary/90 cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            {isUpdatingPassword ? 'Updating Security...' : 'Update Password'}
          </button>
        </div>
      </form>

      {/* BLOCK 3: DANGER AREA ACCOUNT DELETION */}
      <div className='bg-canvas-panel border-feedback-danger/30 overflow-hidden rounded-2xl border shadow-sm'>
        <div className='space-y-3 p-6 md:p-8'>
          <h2 className='text-feedback-danger border-border-subtle border-b pb-3 text-base font-bold'>
            Danger Zone
          </h2>
          <p className='text-brand-muted max-w-2xl text-xs leading-relaxed'>
            Once you delete your account, there is no going back. All your
            logged metadata information, active learning tracks, and quiz
            history will be scrubbed instantly from the primary system nodes.
          </p>
        </div>
        <div className='bg-feedback-danger/5 flex justify-start p-4 md:px-8'>
          <button
            type='button'
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className='bg-feedback-danger hover:bg-feedback-danger/90 inline-flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            <Trash2Icon size={14} />{' '}
            {isDeleting
              ? 'Wiping Account...'
              : 'Permanently Delete SkillBridge Account'}
          </button>
        </div>
      </div>
    </div>
  );
}
