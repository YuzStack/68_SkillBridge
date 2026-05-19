import { CameraIcon } from 'lucide-react';

export default function Settings() {
  return (
    <div className='mx-auto max-w-4xl space-y-8 p-4 md:p-8'>
      <div>
        <h1 className='text-brand-dark text-2xl font-bold'>Profile Settings</h1>
        <p className='text-brand-muted mt-1'>
          Manage your account details and preferences.
        </p>
      </div>

      <div className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'>
        <div className='border-border-subtle border-b p-6 md:p-8'>
          <h2 className='text-brand-dark mb-6 text-lg font-semibold'>
            Personal Information
          </h2>

          <div className='flex flex-col items-start gap-8 md:flex-row'>
            <div className='shrink-0'>
              <div className='bg-brand-secondary border-canvas-panel group relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border-4 text-3xl font-bold text-white shadow-sm'>
                ZL
                <div className='bg-brand-dark/40 absolute inset-0 flex items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100'>
                  <CameraIcon size={24} />
                </div>
              </div>
              <p className='text-brand-muted mt-3 text-center text-xs'>
                JPG, GIF or PNG. Max 1MB.
              </p>
            </div>

            <div className='w-full flex-1 space-y-5'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div>
                  <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    defaultValue='Zimbiat Lwal'
                    className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                  />
                </div>
                <div>
                  <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    defaultValue='simbiat.lawal@university.edu'
                    className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                  />
                </div>
              </div>

              <div>
                <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
                  University / Institution
                </label>
                <input
                  type='text'
                  defaultValue='University of Ilorin'
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='p-6 md:p-8'>
          <h2 className='text-brand-dark mb-6 text-lg font-semibold'>
            Security
          </h2>

          <div className='max-w-md space-y-5'>
            <div>
              <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
                Current Password
              </label>
              <input
                type='password'
                placeholder='••••••••'
                className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
              />
            </div>
            <div>
              <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
                New Password
              </label>
              <input
                type='password'
                placeholder='Enter new password'
                className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
              />
            </div>
          </div>
        </div>

        <div className='bg-canvas-inset border-border-subtle flex justify-end gap-3 border-t p-6 md:p-8'>
          <button className='text-brand-dark border-border-subtle bg-canvas-panel hover:bg-canvas-default rounded-lg border px-5 py-2.5 font-medium transition-colors'>
            Cancel
          </button>
          <button className='bg-brand-primary hover:bg-brand-primary/90 rounded-lg px-5 py-2.5 font-medium text-white transition-colors'>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
