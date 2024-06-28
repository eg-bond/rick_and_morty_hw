import { NavItem } from './NavItem';
import { AppRoutes } from '@/types/routesTypes';
import logo from '@/assets/images/logo.webp';
import { Link } from 'react-router-dom';
import { Flex } from '@mantine/core';

export default function Navbar() {
  return (
    <>
      <Flex
        gap='xl'
        justify='flex-start'
        align='center'
        direction='row'
        component={'ul'}
        style={{ listStyle: 'none', paddingLeft: 0 }}>
        <NavItem route={AppRoutes.Episodes} text='Эпизоды' />
        <NavItem route={AppRoutes.Locations} text='Локации' />
        <NavItem route={AppRoutes.Characters} text='Персонажи' />
      </Flex>
      <Link to={AppRoutes.Main}>
        <img src={logo} alt='logo' />
      </Link>
    </>
  );
}
