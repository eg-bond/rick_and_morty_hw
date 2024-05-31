import s from './navbar.module.css'
import { NavItem } from './NavItem'
import { URLs } from '../../types'

export default function Navbar() {
  return (
    <div className={s.navigationContainer}>
      <ul className={s.navigation}>
        <NavItem url={URLs.Main} text='Главная' />
        <NavItem url={URLs.Episodes} text='Эпизоды' />
        <NavItem url={URLs.Locations} text='Локации' />
        <NavItem url={URLs.Characters} text='Персонажи' />
      </ul>
    </div>
  )
}
