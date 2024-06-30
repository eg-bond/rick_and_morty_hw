import { NavItem } from './NavItem';
import { AppRoutes } from '@/types/routesTypes';
import logo from '@/assets/images/logo.webp';
import { Link } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { AuthStatus } from '../AuthStatus';

export const NAVBAR_FB = '300px';
const NAVBAR_CLR = '#eddf81';

export default function Navbar() {
  return (
    <>
      <Flex
        style={{ backgroundColor: NAVBAR_CLR, padding: '0.2rem 1rem' }}
        h={'12vh'}
        justify='space-between'
        columnGap={'1rem'}
        align='center'
        direction='row'
        wrap='nowrap'>
        {/* left side */}
        <Flex
          gap='xl'
          justify='flex-start'
          align='center'
          direction='row'
          component={'ul'}
          style={{ listStyle: 'none', paddingLeft: 0, flexBasis: NAVBAR_FB }}>
          <NavItem route={AppRoutes.Episodes} text='Эпизоды' />
          <NavItem route={AppRoutes.Locations} text='Локации' />
          <NavItem route={AppRoutes.Characters} text='Персонажи' />
        </Flex>
        {/* center */}
        <Link style={{ flexBasis: NAVBAR_FB }} to={AppRoutes.Main}>
          <img src={logo} alt='logo' />
        </Link>
        {/* right side */}
        <AuthStatus />
      </Flex>
    </>
  );
}
