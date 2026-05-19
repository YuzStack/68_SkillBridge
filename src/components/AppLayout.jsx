import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import { Sidebar } from './Sidebar';
import Header from './Header';

export default function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className='bg-canvas-default text-brand-dark flex min-h-screen font-sans'>
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isMobile={isMobile}
      />

      <div className='flex min-w-0 flex-1 flex-col'>
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className='flex-1 overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
