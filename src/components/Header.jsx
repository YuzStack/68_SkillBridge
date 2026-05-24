import { MenuIcon, LogOutIcon } from 'lucide-react';
import { useUser, useLogout } from '../features/authentication/hooks/useUser';

export default function Header({ onMenuClick }) {
  const { profile, isLoading: isLoadingProfile } = useUser();
  const { logout, isLoggingOut } = useLogout();

  // Extract initialization letters safely from the profile row
  const initials = profile?.full_name
    ? profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'ST';

  return (
    <header className='bg-canvas-panel border-border-subtle sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 font-sans md:px-8'>
      <div className='flex items-center gap-4'>
        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={onMenuClick}
          className='text-brand-muted hover:text-brand-dark hover:bg-canvas-inset -ml-2 cursor-pointer rounded-lg p-2 md:hidden'
        >
          <MenuIcon size={24} />
        </button>
      </div>

      <div className='flex items-center gap-3 pl-4 md:pl-6'>
        {/* Student Label Metadata Card Block */}
        <div className='hidden text-right select-none md:block'>
          <p className='text-brand-dark max-w-xs truncate text-sm font-semibold'>
            {profile
              ? profile.full_name
              : isLoadingProfile
                ? 'Loading Student...'
                : 'Logging out...'}
          </p>
          <p className='text-brand-muted text-xs'>Student Session</p>
        </div>

        {/* Dynamic Image or Initials Text Badge Container */}
        <div className='bg-brand-secondary border-canvas-panel relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 text-sm font-semibold text-white shadow-sm select-none'>
          {profile?.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt='User Profile'
              className='h-full w-full object-cover'
            />
          ) : (
            initials
          )}
        </div>

        {/* Global Sign Out Button Layer */}
        <button
          onClick={() => logout()}
          disabled={isLoggingOut}
          className='text-brand-muted hover:text-feedback-danger hover:bg-canvas-inset ml-2 cursor-pointer rounded-lg p-2 transition-colors disabled:opacity-30'
          title='Sign Out'
        >
          <LogOutIcon size={18} />
        </button>
      </div>
    </header>
  );
}
