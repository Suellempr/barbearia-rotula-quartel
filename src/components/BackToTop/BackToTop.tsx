import { useScrollPastThreshold } from '../../hooks/useScrollPosition';
import styles from './BackToTop.module.css';

export function BackToTop() {
  const isVisible = useScrollPastThreshold(480);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      className={styles.button}
      data-visible={isVisible}
      onClick={handleClick}
      aria-label="Voltar ao topo"
      tabIndex={isVisible ? 0 : -1}
    >
      ↑
    </button>
  );
}
