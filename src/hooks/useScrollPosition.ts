import { useEffect, useState } from 'react';

/**
 * Retorna true quando a página foi rolada além do threshold informado.
 * Usado para dar estilo à navbar ao rolar e exibir o botão "voltar ao topo".
 */
export function useScrollPastThreshold(threshold: number): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsPast(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPast;
}
