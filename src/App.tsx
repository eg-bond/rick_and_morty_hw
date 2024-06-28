import { Routing } from '@/components/Routing';
import { AuthProvider } from '@/context/AuthProvider';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';

function App() {
  return (
    <MantineProvider>
      <AuthProvider>
        <Header />
        <Routing />
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
