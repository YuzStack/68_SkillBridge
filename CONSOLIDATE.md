# SkillBridge

A full consolidated snapshot of the SkillBridge code base is provided below. This includes root config files, the app entry point, routes, layout components, pages, services, and CSS.

```js
// package.json
{
  "name": "template-repo-2",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/genai": "^2.3.0",
    "@supabase/supabase-js": "^2.105.4",
    "@tailwindcss/vite": "^4.1.18",
    "lucide-react": "^1.16.0",
    "motion": "^12.39.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router": "^7.15.1",
    "tailwindcss": "^4.1.18"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.7.4",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "vite": "^7.2.4"
  }
}

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- <link rel="icon" type="image/svg+xml" href="/vite.svg" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SkillBridge</title>
  </head>
  <body class="bg-canvas-default">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

// src/index.css
@import url('https://fonts.googleapis.com/css2?family=Codystar:wght@300;400&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@import 'tailwindcss';

@theme {
  /* Premium System Typography */
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Light Mode Color System Tokens */
  --color-canvas-default: #fafafc; /* Crisp, light off-white background canvas */
  --color-canvas-panel: #ffffff; /* Pure white for bento grid cards/containers */
  --color-canvas-inset: #f1f1f5; /* Light gray for input/search backgrounds */

  --color-brand-primary: #2563eb; /* Radiant Corporate Blue for primary buttons */
  --color-brand-secondary: #4f46e5; /* Deep Indigo for main headings */
  --color-brand-dark: #0f172a; /* Slate 900 for premium, high-contrast text */
  --color-brand-muted: #475569; /* Slate 600 for subtext and descriptors */

  --color-border-subtle: #e2e8f0; /* Slate 200 for clean lines and card dividers */
  --color-border-focus: #3b82f6; /* Active, focused input borders */

  /* Contextual Feedback Accents */
  --color-feedback-success: #10b981; /* Emerald Green for high matching scores */
  --color-feedback-warning: #f59e0b; /* Amber for technical skill gaps */
  --color-feedback-danger: #ef4444; /* Rose for system errors or alerts */
}

// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './routes';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// src/routes.jsx
import { Navigate } from 'react-router';

import Signup from './features/authentication/pages/Signup';
import Login from './features/authentication/pages/Login';
import ForgotPassword from './features/authentication/pages/ForgotPassword';
import AppLayout from './components/AppLayout';
import Settings from './features/authentication/pages/Settings';
import CvUploadPage from './features/cv-processing/pages/CvUploadPage';
import SkillSelector from './features/skill-assessment/pages/SkillSelector';
import TestingArena from './features/skill-assessment/pages/TestingArena';
import RecommendationsPage from './features/career-recommendation/pages/RecommendationsPage';
import RoadmapView from './features/career-recommendation/pages/RoadmapView';
import HomePage from './features/dashboard/pages/HomePage';

const routes = [
  // PUBLIC ROUTES
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },

  // PRIVATE ROUTES
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/settings', element: <Settings /> },
      { path: '/cv-upload', element: <CvUploadPage /> },
      { path: '/skill-selector', element: <SkillSelector /> },
      { path: '/assessment', element: <TestingArena /> },
      { path: '/recommendations', element: <RecommendationsPage /> },
      { path: '/roadmap', element: <RoadmapView /> },
    ],
  },

  // FALLBACK
  { path: '*', element: <Navigate to='/' replace /> },
];

export default routes;

// src/components/AppLayout.jsx
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

// src/components/Header.jsx
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

// src/components/Sidebar.jsx
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

// src/services/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// src/services/gemini.js
import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// src/features/authentication/pages/Settings.jsx
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

// src/features/authentication/pages/Login.jsx
import { Link, useNavigate } from 'react-router';

export default function Login() {
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
            Welcome back
          </h1>
          <p className='text-brand-muted'>
            Enter your details to access your dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              defaultValue='simbiat.lawal@university.edu'
              className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
              placeholder='Enter your email'
              required
            />
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
              defaultValue='password123'
              className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
              placeholder='••••••••'
              required
            />
          </div>

          <button
            type='submit'
            className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors'
          >
            Sign In
          </button>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='border-border-subtle w-full border-t'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-canvas-panel text-brand-muted px-2'>
                Or continue with
              </span>
            </div>
          </div>

          <button className='bg-canvas-panel border-border-subtle text-brand-dark hover:bg-canvas-default mt-6 flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-medium transition-colors'>
            <svg className='h-5 w-5' viewBox='0 0 24 24'>
              <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#4285F4'
              />

              <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
              />

              <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
              />

              <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
              />
            </svg>
            Google
          </button>
        </div>

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

// src/features/authentication/pages/ForgotPassword.jsx
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

// src/features/authentication/pages/Signup.jsx
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

// src/features/career-recommendation/pages/RecommendationsPage.jsx
import {
  CheckCircle2Icon,
  AlertTriangleIcon,
  ArrowRightIcon,
  Link,
} from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: 'Frontend Developer',
    description:
      'Build user interfaces and web applications using modern JavaScript frameworks.',
    match: 92,
    strengths: ['React Fundamentals', 'Responsive CSS', 'JavaScript ES6+'],
    gaps: ['State Management (Redux)', 'Web Accessibility (a11y)'],
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    description:
      'Design intuitive digital experiences and create interactive prototypes.',
    match: 78,
    strengths: ['Wireframing', 'User Empathy', 'Visual Hierarchy'],
    gaps: ['Figma Advanced Prototyping', 'User Testing Methodologies'],
  },
  {
    id: 3,
    title: 'Technical Product Manager',
    description:
      'Bridge the gap between engineering teams and business objectives.',
    match: 65,
    strengths: ['Communication', 'Basic Technical Literacy'],
    gaps: ['Agile Methodologies', 'Data Analytics', 'Roadmap Planning'],
  },
];

export default function RecommendationsPage() {
  return (
    <div className='mx-auto max-w-7xl space-y-8 p-4 md:p-8'>
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
          Assessment Results for Zimbiat
        </h1>
        <p className='text-brand-muted max-w-3xl'>
          Based on your recent skill evaluation and CV analysis, we've
          identified three potential career paths. Your strongest alignment is
          with Frontend Development.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {recommendations.map(rec => (
          <div
            key={rec.id}
            className='bg-canvas-panel border-border-subtle hover:border-brand-primary/50 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-colors'
          >
            <div className='mb-4 flex items-start justify-between'>
              <h2 className='text-brand-dark pr-4 text-xl leading-tight font-bold'>
                {rec.title}
              </h2>
              <div
                className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${rec.match >= 80 ? 'bg-feedback-success/10 text-feedback-success' : rec.match >= 70 ? 'bg-brand-primary/10 text-brand-primary' : 'bg-feedback-warning/10 text-feedback-warning'}`}
              >
                {rec.match}% Match
              </div>
            </div>

            <p className='text-brand-muted mb-6 flex-1 text-sm'>
              {rec.description}
            </p>

            <div className='mb-8 space-y-5'>
              <div>
                <h3 className='text-brand-dark mb-3 text-xs font-semibold tracking-wider uppercase'>
                  Verified Strengths
                </h3>
                <ul className='space-y-2'>
                  {rec.strengths.map((strength, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-sm'
                    >
                      <CheckCircle2Icon
                        size={16}
                        className='text-feedback-success mt-0.5 shrink-0'
                      />

                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-brand-dark mb-3 text-xs font-semibold tracking-wider uppercase'>
                  Skill Gaps
                </h3>
                <ul className='space-y-2'>
                  {rec.gaps.map((gap, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-sm'
                    >
                      <AlertTriangleIcon
                        size={16}
                        className='text-feedback-warning mt-0.5 shrink-0'
                      />

                      {gap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              to='/roadmap'
              className='bg-canvas-inset border-border-subtle text-brand-dark hover:bg-canvas-default hover:border-brand-primary mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-medium transition-colors'
            >
              View Roadmap
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/features/career-recommendation/pages/RoadmapView.jsx
import { ExternalLinkIcon, CheckIcon } from 'lucide-react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const jobs = [
  'Frontend Developer',
  'UI/UX Designer',
  'Technical Product Manager',
];

const roadmapData = [
  {
    id: 1,
    month: 'Month 1',
    title: 'Master Advanced React Concepts',
    completed: true,
    links: [
      {
        text: 'React Documentation',
        url: '#',
      },
      {
        text: 'Coursera: Advanced React',
        url: '#',
      },
    ],
  },
  {
    id: 2,
    month: 'Month 2',
    title: 'State Management with Redux Toolkit',
    completed: false,
    current: true,
    links: [
      {
        text: 'Redux Essentials Tutorial',
        url: '#',
      },
      {
        text: 'freeCodeCamp: Redux Store',
        url: '#',
      },
    ],
  },
  {
    id: 3,
    month: 'Month 3',
    title: 'Web Accessibility (a11y) Deep Dive',
    completed: false,
    links: [
      {
        text: 'W3C Accessibility Guidelines',
        url: '#',
      },
    ],
  },
  {
    id: 4,
    month: 'Month 4',
    title: 'Testing with Jest & React Testing Library',
    completed: false,
    links: [
      {
        text: 'Testing Library Docs',
        url: '#',
      },
    ],
  },
  {
    id: 5,
    month: 'Month 5',
    title: 'Performance Optimization & Core Web Vitals',
    completed: false,
    links: [
      {
        text: 'Web.dev Performance',
        url: '#',
      },
    ],
  },
  {
    id: 6,
    month: 'Month 6',
    title: 'Capstone Project & Portfolio Polish',
    completed: false,
    links: [
      {
        text: 'ALX Africa Portfolio Guide',
        url: '#',
      },
    ],
  },
];

export default function RoadmapView() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='mx-auto max-w-5xl p-4 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-brand-dark text-2xl font-bold'>Learning Roadmap</h1>
        <p className='text-brand-muted mt-1'>
          Your step-by-step guide to bridging skill gaps and landing your target
          role.
        </p>
      </div>

      {/* Tabs */}
      <div className='border-border-subtle hide-scrollbar mb-8 flex overflow-x-auto border-b'>
        {jobs.map((job, idx) => (
          <button
            key={job}
            onClick={() => setActiveTab(idx)}
            className={`relative px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === idx ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-dark'}`}
          >
            {job}
            {activeTab === idx && (
              <motion.div
                layoutId='activeTab'
                className='bg-brand-primary absolute right-0 bottom-0 left-0 h-0.5'
              />
            )}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-10'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className='relative'
          >
            {/* Vertical Line */}
            <div className='bg-border-subtle absolute top-4 bottom-4 left-4.75 w-0.5' />

            <div className='space-y-8'>
              {roadmapData.map(step => (
                <div key={step.id} className='relative flex gap-6'>
                  {/* Node */}
                  <div className='relative z-10 mt-1 shrink-0'>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step.completed ? 'bg-feedback-success border-feedback-success text-white' : step.current ? 'bg-brand-primary border-brand-primary ring-brand-primary/20 text-white ring-4' : 'bg-canvas-inset border-border-subtle text-transparent'}`}
                    >
                      {step.completed && <CheckIcon size={20} />}
                      {step.current && (
                        <div className='h-2.5 w-2.5 rounded-full bg-white' />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 rounded-xl border p-5 transition-all ${step.current ? 'border-brand-primary bg-brand-primary/5' : 'border-border-subtle bg-canvas-panel'}`}
                  >
                    <div className='mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center'>
                      <div>
                        <span className='text-brand-secondary mb-1 block text-sm font-semibold'>
                          {step.month}
                        </span>
                        <h3 className='text-brand-dark text-lg font-bold'>
                          {step.title}
                        </h3>
                      </div>

                      <label className='group flex cursor-pointer items-center gap-2'>
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${step.completed ? 'bg-brand-primary border-brand-primary text-white' : 'border-border-subtle bg-canvas-inset group-hover:border-brand-primary'}`}
                        >
                          {step.completed && <CheckIcon size={14} />}
                        </div>
                        <span className='text-brand-muted group-hover:text-brand-dark text-sm font-medium'>
                          Mark complete
                        </span>
                      </label>
                    </div>

                    <div className='space-y-2'>
                      {step.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          className='text-brand-primary mr-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline'
                        >
                          {link.text}
                          <ExternalLinkIcon size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// src/features/dashboard/pages/HomePage.jsx
import {
  AlertCircleIcon,
  FileTextIcon,
  TargetIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  Link,
} from 'lucide-react';

const historyData = [
  {
    id: 1,
    date: 'Oct 12, 2023',
    discipline: 'Software Engineering',
    match: 85,
  },
  {
    id: 2,
    date: 'Sep 28, 2023',
    discipline: 'Data Analysis',
    match: 62,
  },
  {
    id: 3,
    date: 'Aug 15, 2023',
    discipline: 'Product Management',
    match: 74,
  },
];

export default function HomePage() {
  return (
    <div className='mx-auto max-w-7xl space-y-6 p-4 md:p-8'>
      {/* Block 1: Welcome Banner */}
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold md:text-3xl'>
          Welcome back, Zimbiat
        </h1>
        <p className='text-brand-muted mb-6'>
          Here is what's happening with your career progression today.
        </p>

        <div className='bg-feedback-warning/10 border-feedback-warning/20 flex items-start gap-3 rounded-lg border p-4'>
          <AlertCircleIcon
            className='text-feedback-warning mt-0.5 shrink-0'
            size={20}
          />

          <div>
            <h3 className='text-feedback-warning text-sm font-semibold'>
              Career Blueprint Locked
            </h3>
            <p className='text-feedback-warning/80 mt-1 text-sm'>
              Complete a new skill evaluation or upload your latest CV to unlock
              your personalized career roadmap.
            </p>
          </div>
        </div>
      </div>

      {/* Block 2: Onboarding Split Panels */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='bg-canvas-panel border-border-subtle flex h-full flex-col rounded-2xl border p-6 shadow-sm md:p-8'>
          <div className='bg-brand-primary/10 text-brand-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <TargetIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-xl font-bold'>
            Interactive Skill Triage
          </h2>
          <p className='text-brand-muted mb-8 flex-1'>
            Manually select your current skills across various disciplines to
            get an instant assessment of your career readiness.
          </p>
          <Link
            to='/skill-selector'
            className='bg-brand-primary hover:bg-brand-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white transition-colors'
          >
            Start Manual Test
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <div className='bg-canvas-panel border-border-subtle flex h-full flex-col rounded-2xl border p-6 shadow-sm md:p-8'>
          <div className='bg-brand-secondary/10 text-brand-secondary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <FileTextIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-xl font-bold'>
            Automated CV Upload
          </h2>
          <p className='text-brand-muted mb-8 flex-1'>
            Upload your resume and let our engine automatically extract your
            experiences to build your profile instantly.
          </p>
          <Link
            to='/cv-upload'
            className='bg-canvas-panel border-border-subtle text-brand-dark hover:border-brand-primary hover:text-brand-primary inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 font-medium transition-colors'
          >
            Upload Document
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </div>

      {/* Block 3: History Log */}
      <div className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'>
        <div className='border-border-subtle flex items-center justify-between border-b p-6'>
          <h2 className='text-brand-dark text-lg font-bold'>
            Evaluation History
          </h2>
          <button className='text-brand-primary text-sm font-medium hover:underline'>
            View all
          </button>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full border-collapse text-left'>
            <thead>
              <tr className='bg-canvas-inset text-brand-muted text-xs tracking-wider uppercase'>
                <th className='px-6 py-4 font-medium'>Date</th>
                <th className='px-6 py-4 font-medium'>Discipline Branch</th>
                <th className='px-6 py-4 font-medium'>Verified Match</th>
                <th className='px-6 py-4 text-right font-medium'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-border-subtle divide-y'>
              {historyData.map(row => (
                <tr
                  key={row.id}
                  className='hover:bg-canvas-inset/50 transition-colors'
                >
                  <td className='text-brand-dark px-6 py-4 text-sm whitespace-nowrap'>
                    {row.date}
                  </td>
                  <td className='text-brand-dark px-6 py-4 text-sm font-medium'>
                    {row.discipline}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap'>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ${row.match >= 70 ? 'bg-feedback-success/10 text-feedback-success' : 'bg-feedback-warning/10 text-feedback-warning'}`}
                    >
                      {row.match}%
                    </span>
                  </td>
                  <td className='px-6 py-4 text-right text-sm whitespace-nowrap'>
                    <Link
                      to='/roadmap'
                      className='text-brand-primary inline-flex items-center gap-1 font-medium hover:underline'
                    >
                      View Roadmap
                      <ChevronRightIcon size={16} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// src/features/cv-processing/pages/CvUploadPage.jsx
import { useEffect, useState } from 'react';
import {
  UploadCloudIcon,
  FileIcon,
  CheckCircle2Icon,
  XIcon,
} from 'lucide-react';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function CvUploadPage() {
  const [uploadState, setUploadState] = useState('idle'); // idle, uploading, parsed
  const [progress, setProgress] = useState(0);

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();
    startUpload();
  };

  const startUpload = () => {
    setUploadState('uploading');
    setProgress(0);
  };

  useEffect(() => {
    if (uploadState === 'uploading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setUploadState('parsed'), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [uploadState]);

  return (
    <div className='mx-auto max-w-5xl space-y-6 p-4 md:p-8'>
      <div>
        <h1 className='text-brand-dark text-2xl font-bold'>
          Automated CV Upload
        </h1>
        <p className='text-brand-muted mt-1'>
          Upload your resume to automatically extract your skills and
          experience.
        </p>
      </div>

      {uploadState === 'idle' && (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={startUpload}
          className='border-border-subtle bg-canvas-panel hover:border-brand-primary hover:bg-canvas-inset/50 group cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-all'
        >
          <div className='bg-canvas-inset text-brand-muted group-hover:text-brand-primary group-hover:bg-brand-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors'>
            <UploadCloudIcon size={32} />
          </div>
          <h3 className='text-brand-dark mb-2 text-lg font-semibold'>
            Drag your CV here or click to browse
          </h3>
          <p className='text-brand-muted text-sm'>
            Supports PDF, DOCX, or TXT (Max 5MB)
          </p>
        </div>
      )}

      {uploadState === 'uploading' && (
        <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-12 text-center shadow-sm'>
          <div className='mx-auto max-w-md'>
            <div className='mb-2 flex items-center justify-between'>
              <span className='text-brand-dark flex items-center gap-2 text-sm font-medium'>
                <FileIcon size={16} className='text-brand-primary' />
                Amara_Okeke_Resume.pdf
              </span>
              <span className='text-brand-primary text-sm font-medium'>
                {progress}%
              </span>
            </div>
            <div className='bg-canvas-inset h-2 w-full overflow-hidden rounded-full'>
              <motion.div
                className='bg-brand-primary h-full rounded-full'
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.1,
                }}
              />
            </div>
            <p className='text-brand-muted mt-4 animate-pulse text-sm'>
              Processing document and extracting skills...
            </p>
          </div>
        </div>
      )}

      {uploadState === 'parsed' && (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm'>
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-brand-dark text-lg font-bold'>
                Extracted Data
              </h2>
              <button
                onClick={() => setUploadState('idle')}
                className='text-brand-muted hover:text-brand-dark flex items-center gap-1 text-sm'
              >
                <XIcon size={16} /> Cancel
              </button>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='text-brand-secondary mb-3 text-sm font-semibold tracking-wider uppercase'>
                  Education
                </h3>
                <input
                  type='text'
                  defaultValue='BSc Computer Science, Lagos State University'
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                />
              </div>

              <div>
                <h3 className='text-brand-secondary mb-3 text-sm font-semibold tracking-wider uppercase'>
                  Experience
                </h3>
                <textarea
                  rows={3}
                  defaultValue='Frontend Developer Intern at TechCorp (2022-2023). Built responsive web applications using React and Tailwind CSS.'
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full resize-none rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                />
              </div>

              <div>
                <h3 className='text-brand-secondary mb-3 text-sm font-semibold tracking-wider uppercase'>
                  Identified Skills
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'React',
                    'JavaScript',
                    'Tailwind CSS',
                    'Git',
                    'Responsive Design',
                  ].map(skill => (
                    <span
                      key={skill}
                      className='bg-canvas-inset border-border-subtle text-brand-dark inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium'
                    >
                      {skill}
                      <button className='text-brand-muted hover:text-feedback-danger ml-1'>
                        <XIcon size={14} />
                      </button>
                    </span>
                  ))}
                  <button className='border-border-subtle text-brand-muted hover:text-brand-dark hover:border-brand-primary inline-flex items-center rounded-full border border-dashed px-3 py-1.5 text-sm font-medium transition-colors'>
                    + Add Skill
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-canvas-panel border-border-subtle flex flex-col rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-brand-dark mb-6 text-lg font-bold'>
              Preview Summary
            </h2>

            <div className='bg-canvas-inset border-border-subtle flex-1 rounded-xl border p-6'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='bg-brand-primary flex h-10 w-10 items-center justify-center rounded-full font-bold text-white'>
                  AO
                </div>
                <div>
                  <h4 className='text-brand-dark font-bold'>Amara Okeke</h4>
                  <p className='text-brand-muted text-xs'>
                    Frontend Developer Profile
                  </p>
                </div>
              </div>

              <div className='space-y-4 text-sm'>
                <div className='flex gap-2'>
                  <CheckCircle2Icon
                    size={18}
                    className='text-feedback-success shrink-0'
                  />

                  <span className='text-brand-dark'>Education verified</span>
                </div>
                <div className='flex gap-2'>
                  <CheckCircle2Icon
                    size={18}
                    className='text-feedback-success shrink-0'
                  />

                  <span className='text-brand-dark'>
                    1 year relevant experience
                  </span>
                </div>
                <div className='flex gap-2'>
                  <CheckCircle2Icon
                    size={18}
                    className='text-feedback-success shrink-0'
                  />

                  <span className='text-brand-dark'>
                    5 core technical skills mapped
                  </span>
                </div>
              </div>
            </div>

            <div className='border-border-subtle mt-6 border-t pt-6'>
              <button
                onClick={() => (window.location.href = '/recommendations')}
                className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-3 font-medium text-white transition-colors'
              >
                Confirm & Save Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// src/features/skill-assessment/pages/SkillSelector.jsx
import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

const categories = [
  {
    title: 'Technology',
    skills: [
      'React',
      'Python',
      'Node.js',
      'AWS',
      'Cybersecurity',
      'Data Analysis',
      'UI/UX Design',
      'Machine Learning',
    ],
  },
  {
    title: 'Engineering',
    skills: [
      'Mechanical Design',
      'AutoCAD',
      'Circuit Analysis',
      'Robotics',
      'Civil Planning',
      'Thermodynamics',
    ],
  },
  {
    title: 'Business',
    skills: [
      'Financial Modeling',
      'Project Management',
      'Marketing Strategy',
      'Sales',
      'Agile',
      'Business Analytics',
    ],
  },
  {
    title: 'Healthcare',
    skills: [
      'Patient Care',
      'Medical Coding',
      'Anatomy',
      'Clinical Research',
      'Public Health',
      'Pharmacology',
    ],
  },
];

export default function SkillSelector() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = skill => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill],
    );
  };

  return (
    <div className='mx-auto max-w-5xl p-4 pb-32 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-brand-dark text-2xl font-bold'>
          Interactive Skill Triage
        </h1>
        <p className='text-brand-muted mt-1'>
          Select the skills you currently possess to tailor your assessment.
        </p>
      </div>

      <div className='space-y-10'>
        {categories.map(category => (
          <div key={category.title}>
            <h2 className='text-brand-secondary mb-4 text-sm font-semibold tracking-wide uppercase'>
              {category.title}
            </h2>
            <div className='flex flex-wrap gap-3'>
              {category.skills.map(skill => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`inline-flex cursor-pointer items-center rounded-full border px-4 py-2 transition-all ${isSelected ? 'bg-brand-primary border-brand-primary text-white shadow-sm' : 'bg-canvas-inset border-border-subtle text-brand-dark hover:border-brand-primary hover:bg-canvas-panel'}`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Bottom CTA */}
      <div className='bg-canvas-panel border-border-subtle fixed right-0 bottom-0 left-0 z-20 border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:left-64 md:p-6'>
        <div className='mx-auto flex max-w-5xl items-center justify-between'>
          <div className='text-brand-muted text-sm'>
            <span className='text-brand-dark font-bold'>
              {selectedSkills.length}
            </span>{' '}
            skills selected
          </div>
          <button
            onClick={() => navigate('/assessment')}
            disabled={selectedSkills.length === 0}
            className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors ${selectedSkills.length > 0 ? 'bg-brand-primary hover:bg-brand-primary/90 text-white' : 'bg-canvas-inset text-brand-muted border-border-subtle cursor-not-allowed border'}`}
          >
            Continue to Assessment
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// src/features/skill-assessment/pages/TestingArena.jsx
import { useEffect, useState } from 'react';
import { ClockIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

const questions = [
  {
    id: 1,
    text: 'When building a responsive layout in CSS, which approach ensures a container scales fluidly while respecting a maximum width?',
    options: [
      'width: 100%; max-width: 1200px; margin: 0 auto;',
      'width: 1200px; margin: auto;',
      'max-width: 100%; padding: 0 20px;',
      'display: flex; justify-content: center;',
    ],
  },
  {
    id: 2,
    text: 'In React, what is the primary purpose of the useEffect hook?',
    options: [
      'To directly modify the DOM elements',
      'To handle side effects in functional components',
      'To create new state variables',
      'To replace the render method',
    ],
  },
  {
    id: 3,
    text: 'Which of the following is NOT a valid HTTP method for RESTful APIs?',
    options: ['PATCH', 'FETCH', 'PUT', 'DELETE'],
  },
];

export default function TestingArena() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelect = optionIndex => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/recommendations');
    }
  };

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;
  const currentQ = questions[currentIndex];
  const hasAnsweredCurrent = selectedAnswers[currentIndex] !== undefined;

  return (
    <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col'>
      {/* Top Bar */}
      <div className='bg-canvas-panel border-border-subtle sticky top-0 z-10 border-b px-4 py-4 md:px-8'>
        <div className='mx-auto flex max-w-4xl items-center justify-between gap-6'>
          <div className='flex-1'>
            <div className='text-brand-muted mb-2 flex justify-between text-xs font-medium'>
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className='bg-canvas-inset h-2 w-full overflow-hidden rounded-full'>
              <div
                className='bg-brand-primary h-full rounded-full transition-all duration-300 ease-out'
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>
          <div className='bg-canvas-inset border-border-subtle flex items-center gap-2 rounded-lg border px-4 py-2'>
            <ClockIcon
              size={18}
              className={
                timeLeft < 60 ? 'text-feedback-danger' : 'text-brand-muted'
              }
            />

            <span
              className={`font-mono font-bold ${timeLeft < 60 ? 'text-feedback-danger' : 'text-brand-dark'}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Question Area */}
      <div className='flex-1 p-4 md:p-8'>
        <div className='bg-canvas-panel border-border-subtle mx-auto mt-4 max-w-3xl rounded-2xl border p-6 shadow-md md:mt-8 md:p-10'>
          <h2 className='text-brand-dark mb-8 text-xl leading-relaxed font-bold md:text-2xl'>
            {currentQ.text}
          </h2>

          <div className='space-y-4'>
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentIndex] === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all md:p-5 ${isSelected ? 'border-brand-secondary bg-brand-secondary/5 border-2' : 'border-border-subtle hover:border-brand-secondary hover:bg-canvas-inset'}`}
                >
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? 'border-brand-secondary' : 'border-border-subtle'}`}
                  >
                    {isSelected && (
                      <div className='bg-brand-secondary h-3 w-3 rounded-full' />
                    )}
                  </div>
                  <span
                    className={`text-base ${isSelected ? 'text-brand-dark font-medium' : 'text-brand-dark'}`}
                  >
                    {option}
                  </span>
                </div>
              );
            })}
          </div>

          <div className='border-border-subtle mt-10 flex items-center justify-between border-t pt-6'>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium transition-colors ${currentIndex === 0 ? 'text-brand-muted cursor-not-allowed opacity-50' : 'text-brand-dark hover:bg-canvas-inset hover:border-border-subtle border border-transparent'}`}
            >
              <ArrowLeftIcon size={18} />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnsweredCurrent}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-medium transition-colors ${hasAnsweredCurrent ? 'bg-brand-primary hover:bg-brand-primary/90 text-white' : 'bg-canvas-inset text-brand-muted border-border-subtle cursor-not-allowed border'}`}
            >
              {currentIndex === questions.length - 1
                ? 'Submit Assessment'
                : 'Next Question'}
              <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Core Source Files

```jsx
// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './routes';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// src/routes.jsx
import { Navigate } from 'react-router';

import Signup from './features/authentication/pages/Signup';
import Login from './features/authentication/pages/Login';
import ForgotPassword from './features/authentication/pages/ForgotPassword';
import AppLayout from './components/AppLayout';
import Settings from './features/authentication/pages/Settings';
import CvUploadPage from './features/cv-processing/pages/CvUploadPage';
import SkillSelector from './features/skill-assessment/pages/SkillSelector';
import TestingArena from './features/skill-assessment/pages/TestingArena';
import RecommendationsPage from './features/career-recommendation/pages/RecommendationsPage';
import RoadmapView from './features/career-recommendation/pages/RoadmapView';
import HomePage from './features/dashboard/pages/HomePage';

const routes = [
  // PUBLIC ROUTES
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },

  // PRIVATE ROUTES
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/settings', element: <Settings /> },
      { path: '/cv-upload', element: <CvUploadPage /> },
      { path: '/skill-selector', element: <SkillSelector /> },
      { path: '/assessment', element: <TestingArena /> },
      { path: '/recommendations', element: <RecommendationsPage /> },
      { path: '/roadmap', element: <RoadmapView /> },
    ],
  },

  // FALLBACK
  { path: '*', element: <Navigate to='/' replace /> },
];

export default routes;

// src/components/AppLayout.jsx
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

// src/components/Header.jsx
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

// src/components/Sidebar.jsx
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
```
