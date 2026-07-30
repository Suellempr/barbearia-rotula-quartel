import { useEffect } from 'react';
import type { GalleryImage } from '../../types';
import styles from './Gallery.module.css';

interface GalleryModalProps {
  image: GalleryImage;
  onClose: () => void;
}

export function GalleryModal({ image, onClose }: GalleryModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={styles.modalBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Fechar imagem">
          ✕
        </button>
        <img className={styles.modalImage} src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}
