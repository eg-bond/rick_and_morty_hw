import { Routing } from '@/components/Routing';
import { AuthProvider } from '@/context/AuthProvider';
import { Container, MantineProvider } from '@mantine/core';
import { Navbar } from './components/Navbar';
import { ContentStyles, UIElemsHeights } from './types/stylesTypes';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <AuthProvider>
        <Navbar />
        <Container
          fluid
          mih={UIElemsHeights.Content}
          pt={ContentStyles.PT}
          bg={ContentStyles.BG_CLR}>
          <Routing />
        </Container>
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
