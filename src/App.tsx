import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';
import { SelectedServiceProvider } from './hooks/useSelectedService';
import { Home } from './pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SelectedServiceProvider>
      <Loader isHidden={!isLoading} />
      <Home />
    </SelectedServiceProvider>
  );
}
