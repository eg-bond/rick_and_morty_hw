import s from './navbar.module.css'
import { NavItem } from './NavItem'
import { AppRoutes } from '../../types'

export default function Navbar() {
  return (
    <div className={s.navigationContainer}>
      <ul className={s.navigation}>
        <NavItem route={AppRoutes.Main} text='Главная' />
        <NavItem route={AppRoutes.Episodes} text='Эпизоды' />
        <NavItem route={AppRoutes.Locations} text='Локации' />
        <NavItem route={AppRoutes.Characters} text='Персонажи' />
      </ul>
    </div>
  )
}
