import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { useSignup } from '../hooks/useUser';

export default function Signup() {
  const { signup, isSigningUp } = useSignup();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    signup(
      { email: data.email, password: data.password, fullName: data.fullName },
      {
        onSuccess: () => {
          toast.success('Account registered successfully! Welcome.');
          navigate('/');
        },
        onError: err => {
          toast.error(err.message || 'Registration failed.');
        },
      },
    );
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        <div className='mb-8 text-center'>
          <div className='bg-brand-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-bold text-white'>
            S
          </div>
          <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
            Create an account
          </h1>
          <p className='text-brand-muted'>
            Start your career journey with SkillBridge.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Full Name
            </label>
            <input
              type='text'
              {...register('fullName', { required: 'Full name is required' })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.fullName ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='E.g., Simbiat Lawal'
            />
            {errors.fullName && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.email ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='E.g., simbiat@university.edu'
            />
            {errors.email && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Password
            </label>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.password ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='Create a strong password'
            />
            {errors.password && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Confirm Password
            </label>
            <input
              type='password'
              {...register('passwordConfirm', {
                required: 'Please confirm password',
                validate: value =>
                  value === getValues().password || 'Passwords need to match',
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.password ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='Repeat password'
            />
            {errors.passwordConfirm && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSigningUp}
            className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isSigningUp ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className='text-brand-muted mt-8 text-center text-sm'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='text-brand-primary font-medium hover:underline'
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
