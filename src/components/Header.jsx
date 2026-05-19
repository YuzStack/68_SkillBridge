import { MenuIcon, BellIcon, SearchIcon } from 'lucide-react';

export default function Header({ onMenuClick }) {
  return (
    <header className='bg-canvas-panel border-border-subtle sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 md:px-8'>
      <div className='flex items-center gap-4'>
        <button
          onClick={onMenuClick}
          className='text-brand-muted hover:text-brand-dark hover:bg-canvas-inset -ml-2 rounded-lg p-2 md:hidden'
        >
          <MenuIcon size={24} />
        </button>

        <div className='bg-canvas-inset focus-within:border-border-focus focus-within:bg-canvas-panel hidden w-64 items-center rounded-lg border border-transparent px-3 py-2 transition-colors md:flex'>
          <SearchIcon size={18} className='text-brand-muted mr-2' />
          <input
            type='text'
            placeholder='Search skills, jobs...'
            className='text-brand-dark placeholder:text-brand-muted w-full border-none bg-transparent text-sm outline-none'
          />
        </div>
      </div>

      <div className='flex items-center gap-3 pl-4 md:pl-6'>
        <div className='hidden text-right md:block'>
          <p className='text-brand-dark text-sm font-semibold'>Zimbiat Lawal</p>
          <p className='text-brand-muted text-xs'>Student Session</p>
        </div>
        <div className='bg-brand-secondary border-canvas-panel flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 text-sm font-semibold text-white shadow-sm'>
          ZL
        </div>
      </div>
    </header>
  );
}
