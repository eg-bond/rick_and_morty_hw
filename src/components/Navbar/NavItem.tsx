import { NavLink } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import s from './navbar.module.css';

interface NavItemProps {
  route: AppRoutes;
  text: string;
}

export function NavItem({ route, text }: NavItemProps) {
  return (
    <li>
      <NavLink
        style={{ textDecoration: 'none' }}
        className={({ isActive }) => (isActive ? s.red : undefined)}
        to={`${route}`}>
        {text}
      </NavLink>
    </li>
  );
}
