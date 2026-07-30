import { useState } from 'react';
import { businessConfig } from '../../data/businessConfig';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollPastThreshold } from '../../hooks/useScrollPosition';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { navLinks } from './navLinks';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.id);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPastThreshold(40);
  const activeSectionId = useActiveSection(sectionIds);
  const { scrollToSection } = useSmoothScroll();

  function handleNavigate(sectionId: string) {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  }

  return (
    <>
      <header className={styles.navbar} data-scrolled={isScrolled}>
        <button
          className={styles.logo}
          onClick={() => handleNavigate('hero')}
          aria-label={`${businessConfig.name} — voltar ao início`}
        >
          <span className={styles.logoMark}>
            Rótula <span>Quartel</span>
          </span>
        </button>

        <nav className={styles.desktopLinks} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={styles.navLink}
              data-active={activeSectionId === link.id}
              aria-current={activeSectionId === link.id ? 'true' : undefined}
              onClick={() => handleNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className={styles.hamburger}
          data-open={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={styles.overlay}
        data-open={isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={styles.mobileDrawer}
        data-open={isMenuOpen}
        aria-label="Navegação mobile"
        aria-hidden={!isMenuOpen}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={styles.mobileLink}
            data-active={activeSectionId === link.id}
            aria-current={activeSectionId === link.id ? 'true' : undefined}
            onClick={() => handleNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </>
  );
}
