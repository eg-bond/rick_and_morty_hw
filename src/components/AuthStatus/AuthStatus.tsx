import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { Button, Flex } from '@mantine/core';
import { capitelizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth?.signOut(() => navigate('/'));
  };

  if (auth?.user === null) {
    return (
      <div style={{ width: '100px' }}>
        <Button color='green' onClick={() => navigate('/login')}>
          Войти
        </Button>
      </div>
    );
  }

  return (
    <Flex
      style={{ width: '100px' }}
      direction={'column'}
      justify='center'
      align={'center'}>
      <p style={{ marginTop: 0 }}>
        <span style={{ fontWeight: 'bold' }}>
          {capitelizeFirstLetter(auth?.user)}
        </span>
      </p>
      <Button color='red' onClick={handleSignOut}>
        Выйти
      </Button>
    </Flex>
  );
};
