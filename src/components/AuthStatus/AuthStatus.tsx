import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { Box, Button, Flex, Text } from '@mantine/core';
import { NavbarStyles } from '@/types/stylesTypes';

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth?.signOut(() => navigate('/'));
  };

  function EnterBtn() {
    return (
      <Button color='green' onClick={() => navigate('/login')}>
        Войти
      </Button>
    );
  }

  function ExitBtn() {
    return (
      <Button color='red' onClick={handleSignOut}>
        Выйти
      </Button>
    );
  }

  return (
    <Flex
      style={{ flexBasis: NavbarStyles.FB }}
      rowGap='sm'
      direction={'column'}
      justify='center'
      align='flex-end'>
      {/* if user is logged in */}
      {auth?.user && (
        <>
          <Box w={125}>
            <Text
              tt='capitalize'
              size='lg'
              fw='bold'
              ta='end'
              truncate='end'
              variant='gradient'
              gradient={{ from: 'grape', to: 'red', deg: 90 }}>
              {auth?.user}
            </Text>
          </Box>
          <ExitBtn />
        </>
      )}
      {/* if user is not logged in */}
      {!auth?.user && <EnterBtn />}
    </Flex>
  );
};
