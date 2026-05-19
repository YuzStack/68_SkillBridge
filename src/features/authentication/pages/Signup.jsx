import { Link, useNavigate } from 'react-router';

export default function Signup() {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/');
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

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Full Name
            </label>
            <input
              type='text'
              className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
              placeholder='Zimbiat Lawal'
              required
            />
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
              placeholder='simbiat@university.edu'
              required
            />
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Password
            </label>
            <input
              type='password'
              className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
              placeholder='Create a strong password'
              required
            />
          </div>

          <button
            type='submit'
            className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors'
          >
            Create Account
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
