import { useCallback } from 'react';

/**
 * Fornece uma função para rolar suavemente até uma seção pelo id,
 * compensando a altura da navbar fixa.
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navbarHeight = 84;
    const top = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return { scrollToSection };
}
