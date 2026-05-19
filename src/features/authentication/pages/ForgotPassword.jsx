import { CheckCircle2Icon, ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        {isSubmitted && (
          <div className='bg-feedback-success/10 border-feedback-success/30 mb-6 flex items-start gap-3 rounded-lg border p-4'>
            <CheckCircle2Icon
              className='text-feedback-success mt-0.5'
              size={20}
            />

            <div>
              <h3 className='text-feedback-success text-sm font-semibold'>
                Email sent successfully
              </h3>
              <p className='text-feedback-success/80 mt-1 text-sm'>
                Check your inbox for instructions to reset your password.
              </p>
            </div>
          </div>
        )}

        <div className='mb-8 text-center'>
          <div className='bg-canvas-inset border-border-subtle text-brand-dark mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border'>
            <svg
              className='h-6 w-6'
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
          <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
            Reset password
          </h1>
          <p className='text-brand-muted'>
            We'll send you an email with a link to reset it.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
                Email
              </label>
              <input
                type='email'
                className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                placeholder='Enter your email'
                required
              />
            </div>

            <button
              type='submit'
              className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors'
            >
              Send reset link
            </button>
          </form>
        ) : (
          <button
            onClick={() => setIsSubmitted(false)}
            className='bg-canvas-inset text-brand-dark border-border-subtle hover:bg-border-subtle w-full rounded-lg border px-4 py-2.5 font-medium transition-colors'
          >
            Resend email
          </button>
        )}

        <div className='mt-8 text-center'>
          <Link
            to='/login'
            className='text-brand-muted hover:text-brand-dark inline-flex items-center gap-2 text-sm transition-colors'
          >
            <ArrowLeftIcon size={16} />
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
