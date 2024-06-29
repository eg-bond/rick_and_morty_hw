import { Routing } from '@/components/Routing';
import { AuthProvider } from '@/context/AuthProvider';
import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import { Header } from './components/Header';

function App() {
  return (
    <MantineProvider>
      <AuthProvider>
        <Container fluid>
          <Header />
          <Routing />
        </Container>
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
