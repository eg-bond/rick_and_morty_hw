import { Flex } from '@mantine/core';
import { AuthStatus } from '../AuthStatus';
import { Navbar } from '../Navbar';

export function Header() {
  return (
    <Flex
      style={{ backgroundColor: '#eddf81', padding: '0 1rem' }}
      h={'10vh'}
      justify='space-between'
      // columnGap={'10vw'}
      align='center'
      direction='row'
      wrap='wrap'>
      <Navbar />
      <AuthStatus />
    </Flex>
  );
}
