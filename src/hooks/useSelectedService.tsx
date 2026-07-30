import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

interface SelectedServiceContextValue {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
}

const SelectedServiceContext = createContext<SelectedServiceContextValue | undefined>(undefined);

export function SelectedServiceProvider({ children }: { children: ReactNode }) {
  const [selectedServiceId, setSelectedServiceId] = useState('');

  const value = useMemo(
    () => ({ selectedServiceId, setSelectedServiceId }),
    [selectedServiceId],
  );

  return (
    <SelectedServiceContext.Provider value={value}>{children}</SelectedServiceContext.Provider>
  );
}

export function useSelectedService(): SelectedServiceContextValue {
  const context = useContext(SelectedServiceContext);
  if (!context) {
    throw new Error('useSelectedService must be used within a SelectedServiceProvider');
  }
  return context;
}
