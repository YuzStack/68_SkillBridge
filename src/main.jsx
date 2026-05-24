import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast'; // Import Toast engine
import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query

import './index.css';
import routes from './routes';

// Create a persistent, global Query Client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache query data for 5 minutes before refetching
      retry: 1, // Retry failed network/API requests once before alerting
    },
  },
});

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* Global toast notifications config */}
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            background: '#FFFFFF',
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.03)',
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>,
);

// window.__TANSTACK_QUERY_CLIENT__ = queryClient; // For Dev Purpose
