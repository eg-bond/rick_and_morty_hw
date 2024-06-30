import { NavLink } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import { NavLink as MantineNavlink } from '@mantine/core';

interface NavItemProps {
  route: AppRoutes;
  text: string;
}

export function NavItem({ route, text }: NavItemProps) {
  return (
    <li>
      <MantineNavlink
        variant='filled'
        fw={'bold'}
        description={text}
        to={`${route}`}
        component={NavLink}
      />
    </li>
  );
}
