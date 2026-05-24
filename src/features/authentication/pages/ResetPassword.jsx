import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useUpdateSettings } from '../hooks/useSettings';
import toast from 'react-hot-toast';

export default function ResetPassword() {
  const navigate = useNavigate();
  const { updatePassword, isUpdatingPassword } = useUpdateSettings();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    updatePassword(data.newPassword, {
      onSuccess: () => {
        toast.success('Password updated successfully! Please log in.');
        navigate('/login', { replace: true });
      },
    });
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4 font-sans'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        <div className='mb-8 text-center'>
          <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
            Create new password
          </h1>
          <p className='text-brand-muted text-sm'>
            Type your new secure account credentials below.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
              New Password
            </label>
            <input
              type='password'
              placeholder='Minimum 8 characters'
              {...register('newPassword', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none`}
            />
            {errors.newPassword && (
              <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
              Confirm New Password
            </label>
            <input
              type='password'
              placeholder='Repeat new password'
              {...register('confirmPassword', {
                required: 'Please confirm your new password',
                validate: val =>
                  val === getValues('newPassword') ||
                  'The passwords do not match',
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none`}
            />
            {errors.confirmPassword && (
              <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isUpdatingPassword}
            className='bg-brand-primary hover:bg-brand-primary/90 w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            {isUpdatingPassword ? 'Saving Password...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
