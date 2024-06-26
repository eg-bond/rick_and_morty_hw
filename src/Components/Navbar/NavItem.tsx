import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';
import type { AppRoutes } from '@/types';
interface NavItemProps {
  route: AppRoutes;
  text: string;
}

export function NavItem({ route, text }: NavItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? s.red : undefined)}
        to={`${route}`}>
        {text}
      </NavLink>
    </li>
  );
}
