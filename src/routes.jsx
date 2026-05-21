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
import ProtectedRoute from './components/ProtectedRoute';

const routes = [
  // PUBLIC ROUTES
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },

  // PRIVATE ROUTES
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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
