import { AuthStatus } from '@/components/AuthStatus';
import { Navbar } from '@/components/Navbar';
import { Routing } from '@/components/Routing';
import { AuthProvider } from '@/context/AuthProvider';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <AuthProvider>
        <AuthStatus />
        <Navbar />
        <Routing />
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
