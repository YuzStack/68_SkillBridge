import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { CheckCircle2Icon, ArrowLeftIcon } from 'lucide-react';
import { useForgotPassword } from '../hooks/useSettings';
import toast from 'react-hot-toast';

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutate: sendResetEmail, isPending } = useForgotPassword();

  // Initialize your React Hook Form controller context
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const currentEmail = getValues('email');

  const onSubmit = data => {
    sendResetEmail(data.email, {
      onSuccess: () => {
        setIsSubmitted(true);
        toast.success('Recovery link sent successfully.');
      },
      onError: err => {
        toast.error(err.message || 'Failed to dispatch recovery parameters.');
      },
    });
  };

  const handleResend = () => {
    if (!currentEmail) return;
    sendResetEmail(currentEmail, {
      onSuccess: () => {
        toast.success('A fresh recovery token link has been resent.');
      },
      onError: err => {
        toast.error(err.message);
      },
    });
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4 font-sans'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        {/* Dynamic Success State Alert Banner */}
        {isSubmitted && (
          <div className='bg-feedback-success/10 border-feedback-success/30 mb-6 flex items-start gap-3 rounded-lg border p-4 transition-all'>
            <CheckCircle2Icon
              className='text-feedback-success mt-0.5 shrink-0'
              size={20}
            />
            <div>
              <h3 className='text-feedback-success text-sm font-bold'>
                Email sent successfully
              </h3>
              <p className='text-feedback-success/80 mt-1 text-xs leading-relaxed'>
                Check your inbox at{' '}
                <span className='text-brand-dark font-semibold'>
                  {currentEmail}
                </span>{' '}
                for instructions to reset your password.
              </p>
            </div>
          </div>
        )}

        {/* Header Icon Block */}
        <div className='mb-8 text-center select-none'>
          <div className='bg-canvas-inset border-border-subtle text-brand-dark mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm'>
            <svg
              className='text-brand-muted h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
              />
            </svg>
          </div>
          <h1 className='text-brand-dark mb-2 text-xl font-bold'>
            Reset password
          </h1>
          <p className='text-brand-muted text-sm'>
            We'll send you an email with a secure link to restore access.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <div>
              <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                Email Address
              </label>
              <input
                type='email'
                disabled={isPending}
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email formatting match',
                  },
                })}
                className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none ${errors.email ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
                placeholder='Enter your school or personal email'
              />
              {errors.email && (
                <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type='submit'
              disabled={isPending}
              className='bg-brand-primary hover:bg-brand-primary/90 w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors disabled:opacity-50'
            >
              {isPending ? 'Sending Link...' : 'Send reset link'}
            </button>
          </form>
        ) : (
          <button
            onClick={handleResend}
            disabled={isPending}
            className='bg-canvas-inset text-brand-dark border-border-subtle hover:bg-canvas-default w-full cursor-pointer rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50'
          >
            {isPending ? 'Re-sending Link...' : 'Resend email link'}
          </button>
        )}

        {/* Bottom Return Route Navigation Link */}
        <div className='mt-8 text-center'>
          <Link
            to='/login'
            className='text-brand-muted hover:text-brand-dark inline-flex items-center gap-2 text-xs font-semibold transition-colors'
          >
            <ArrowLeftIcon size={14} />
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
