import { buildWhatsAppGenericUrl } from '../../utils/whatsapp';
import styles from './WhatsAppButton.module.css';

export function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href={buildWhatsAppGenericUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a barbearia pelo WhatsApp"
    >
      ☏
    </a>
  );
}
