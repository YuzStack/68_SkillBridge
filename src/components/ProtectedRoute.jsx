import { Navigate } from 'react-router';

import { useUser } from '../features/authentication/hooks/useUser';
import Spinner from './Spinner';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-screen items-center justify-center font-sans'>
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (isAuthenticated) return children;
}
