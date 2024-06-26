import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { AppRoutes } from '@/types';

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth?.signOut(() => navigate('/'));
  };

  if (auth?.user === null) {
    return (
      <>
        <p>You are not logged in.</p>
        <NavLink to={AppRoutes.Login}>Войти</NavLink>
      </>
    );
  }

  return (
    <p>
      Welcome user {auth?.user}
      <button onClick={handleSignOut}>Выйти</button>
    </p>
  );
};
