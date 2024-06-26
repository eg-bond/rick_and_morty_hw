import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';
import type { AppRoutes } from '../../types';

export function NavItem({ route, text }: { route: AppRoutes; text: string }) {
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
