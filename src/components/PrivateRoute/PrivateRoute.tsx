import { ReactNode } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.user === null) {
    return <Navigate to='/login' state={{ from: location.pathname }} replace />;
  }

  return children;
};
