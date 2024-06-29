import { Routing } from '@/components/Routing';
import { AuthProvider } from '@/context/AuthProvider';
import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import { Header } from './components/Header';

function App() {
  return (
    <MantineProvider>
      <AuthProvider>
        <Header />
        <Container fluid mih={'90vh'} pt={'1rem'} bg='#67d9fd'>
          <Routing />
        </Container>
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
