import {
  LayoutDashboardIcon,
  UploadCloudIcon,
  CheckSquareIcon,
  BriefcaseIcon,
  MapIcon,
  SettingsIcon,
  XIcon,
} from 'lucide-react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router';

const navItems = [
  {
    path: '/',
    label: 'Dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    path: '/cv-upload',
    label: 'CV Upload',
    icon: UploadCloudIcon,
  },
  {
    path: '/skill-selector',
    label: 'Skill Assessment',
    icon: CheckSquareIcon,
  },
  {
    path: '/recommendations',
    label: 'Recommendations',
    icon: BriefcaseIcon,
  },
  {
    path: '/roadmap',
    label: 'Roadmap',
    icon: MapIcon,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: SettingsIcon,
  },
];

export function Sidebar({ isOpen, onClose, isMobile }) {
  const sidebarContent = (
    <div className='bg-canvas-panel border-border-subtle h-full w-64 border-r p-6'>
      <div className='mb-8 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='bg-brand-primary flex h-8 w-8 items-center justify-center rounded text-xl font-bold text-white'>
            S
          </div>
          <span className='text-brand-dark text-xl font-bold'>SkillBridge</span>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className='text-brand-muted hover:text-brand-dark p-1'
          >
            <XIcon size={20} />
          </button>
        )}
      </div>

      <nav className='space-y-2'>
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={isMobile ? onClose : undefined}
              className={({ isActive }) =>
                `relative flex items-center gap-3 overflow-hidden rounded-lg px-4 py-3 transition-colors ${isActive ? 'text-brand-primary bg-canvas-inset font-medium' : 'text-brand-muted hover:text-brand-dark hover:bg-canvas-inset'}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className='bg-brand-primary absolute top-0 bottom-0 left-0 w-0.75' />
                  )}
                  <Icon size={20} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={onClose}
              className='bg-brand-dark/20 fixed inset-0 z-40 backdrop-blur-sm'
            />

            <motion.div
              initial={{
                x: '-100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '-100%',
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.4,
              }}
              className='fixed inset-y-0 left-0 z-50 shadow-2xl'
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }
  return (
    <div className='sticky top-0 hidden h-screen md:block'>
      {sidebarContent}
    </div>
  );
}
