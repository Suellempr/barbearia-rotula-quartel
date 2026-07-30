import { useEffect, useState } from 'react';

/**
 * Observa uma lista de seções pelo id e retorna o id da seção atualmente mais visível
 * na viewport — usado para destacar o link ativo na navbar (efeito "scroll spy").
 */
export function useActiveSection(sectionIds: string[], navbarOffset = 96): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    function handleScroll() {
      const scrollPosition = window.scrollY + navbarOffset + 1;

      let current = elements[0].id;
      for (const element of elements) {
        if (element.offsetTop <= scrollPosition) {
          current = element.id;
        }
      }

      // Perto do fim da página, garante que a última seção seja destacada.
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (isNearBottom) {
        current = elements[elements.length - 1].id;
      }

      setActiveId(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, navbarOffset]);

  return activeId;
}
