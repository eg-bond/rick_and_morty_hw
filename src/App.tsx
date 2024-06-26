import { AuthStatus } from '@/components/AuthStatus';
import { Navbar } from '@/components/Navbar';
import { Routing } from '@/components/Routing';
import { AuthProvider } from '@/context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AuthStatus />
      <Navbar />
      <Routing />
    </AuthProvider>
  );
}

export default App;
