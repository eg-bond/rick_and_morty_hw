import { AuthStatus } from './Components/AuthStatus';
import { Navbar } from './Components/Navbar';
import { Routing } from './Components/Routing';
import { AuthProvider } from './context/AuthProvider';

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
