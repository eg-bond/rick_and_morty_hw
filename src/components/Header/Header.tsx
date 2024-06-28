import { Flex } from '@mantine/core';
import { AuthStatus } from '../AuthStatus';
import { Navbar } from '../Navbar';

export function Header() {
  return (
    <Flex
      gap='lg'
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
