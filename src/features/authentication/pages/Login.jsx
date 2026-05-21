import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { useLogin } from '../hooks/useUser';

export default function Login() {
  const { login, isLoggingIn } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    login(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          toast.success('Logged in successfully!');
          navigate('/');
        },
        onError: err => {
          toast.error(err.message || 'Authentication credentials rejected.');
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
            Welcome back
          </h1>
          <p className='text-brand-muted'>
            Enter your details to access your dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.email ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='Enter your email'
              defaultValue='nasrudeenyuusuf@gmail.com' // For Dev Purpose
            />
            {errors.email && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className='mb-1.5 flex items-center justify-between'>
              <label className='text-brand-dark block text-sm font-medium'>
                Password
              </label>
              <Link
                to='/forgot-password'
                className='text-brand-primary text-sm hover:underline'
              >
                Forgot password?
              </Link>
            </div>
            <input
              type='password'
              {...register('password', { required: 'Password is required' })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.password ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='••••••••'
              defaultValue='@Yuzlov3' // For Dev Purpose
            />
            {errors.password && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isLoggingIn}
            className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isLoggingIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className='text-brand-muted mt-8 text-center text-sm'>
          Don't have an account?{' '}
          <Link
            to='/signup'
            className='text-brand-primary font-medium hover:underline'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
