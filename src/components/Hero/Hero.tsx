import { businessConfig } from '../../data/businessConfig';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import styles from './Hero.module.css';
import brasao from '../../assets/images/logo-brasao-barbearia.png';

export function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="hero" className={styles.hero} aria-label="Abertura">
      <div className={styles.background}>
        <img
          src={brasao}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
      
        <h1 className={styles.name}>
          Barbearia <em>Rótula Quartel</em>
        </h1>

        <p className={styles.slogan}>
          {businessConfig.slogan}
        </p>

        <button
          className={styles.cta}
          onClick={() => scrollToSection('schedule')}
        >
          Agendar Agora
        </button>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>Role</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}