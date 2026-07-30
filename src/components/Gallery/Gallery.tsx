import { useState } from 'react';
import { galleryImages } from '../../data/gallery';
import { GalleryModal } from './GalleryModal';
import styles from './Gallery.module.css';

export function Gallery() {
  const [activeImageId, setActiveImageId] = useState<string | null>(null);
  const activeImage = galleryImages.find((image) => image.id === activeImageId) ?? null;

  return (
    <section id="gallery" className={`section ${styles.gallery}`} aria-label="Galeria">
      <div className="section-inner">
        <div className={styles.header}>
          <span className="eyebrow">Galeria</span>
          <h2 className="section-title">O ambiente e o ofício</h2>
          <p className="section-lede">
            Um retrato do espaço, das ferramentas e dos detalhes que fazem da Rótula Quartel uma
            barbearia de outro tempo.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <button
              key={image.id}
              className={styles.item}
              onClick={() => setActiveImageId(image.id)}
              aria-label={`Ampliar imagem: ${image.alt}`}
            >
              <img className={styles.image} src={image.src} alt={image.alt} loading="lazy" />
              <span className={styles.itemOverlay} aria-hidden="true">
                ＋
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <GalleryModal image={activeImage} onClose={() => setActiveImageId(null)} />
      )}
    </section>
  );
}
