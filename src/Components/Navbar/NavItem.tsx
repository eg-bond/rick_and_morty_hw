import { NavLink } from 'react-router-dom'
import s from './navbar.module.css'
import type { RoutesURLsT } from '../../types'

export function NavItem({ url, text }: { url: RoutesURLsT; text: string }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? s.red : undefined)}
        to={`${url}`}>
        {text}
      </NavLink>
    </li>
  )
}
