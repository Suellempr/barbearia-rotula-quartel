import { businessConfig } from '../../data/businessConfig';
import { buildWhatsAppGenericUrl } from '../../utils/whatsapp';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import styles from './Footer.module.css';

export function Footer() {
  const { scrollToSection } = useSmoothScroll();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer} aria-label="Rodapé e contato">
      <div className={styles.top}>
        <button className={styles.logo} onClick={() => scrollToSection('hero')}>
          Rótula <span>Quartel</span>
        </button>
        <p className={styles.tagline}>{businessConfig.slogan}</p>

        <div className={styles.socials}>
          <a
            className={styles.socialLink}
            href={buildWhatsAppGenericUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
          >
            <img src="/icon-telefone.png" alt="" />
          </a>
          <a
            className={styles.socialLink}
            href={businessConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Instagram"
          >
            <img src="/icon-instagram.png" alt="" />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        © {year} {businessConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
