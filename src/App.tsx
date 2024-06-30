import { Routing } from '@/components/Routing';
import { AuthProvider } from '@/context/AuthProvider';
import { Container, MantineProvider } from '@mantine/core';
import { Navbar } from './components/Navbar';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <AuthProvider>
        <Navbar />
        <Container fluid mih={'88vh'} pt={'1rem'} bg='#67d9fd'>
          <Routing />
        </Container>
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
