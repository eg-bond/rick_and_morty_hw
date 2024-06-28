import { AuthStatus } from '@/component/AuthStatus';
import { Navbar } from '@/component/Navbar';
import { Routing } from '@/component/Routing';
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
