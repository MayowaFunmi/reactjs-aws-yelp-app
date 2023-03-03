// RequireAuth.js
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

export function RequireAuth({ children }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    console.log('user details = ', Auth.currentAuthenticatedUser());
  }
  return children;
}
