import type { Service } from '../../types';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './Services.module.css';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: (serviceId: string) => void;
}

export function ServiceCard({ service, isSelected, onSelect }: ServiceCardProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  const formattedPrice = service.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div ref={ref} className={`${styles.card} corner-frame`} data-visible={isVisible}>
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={service.image}
          alt={`Serviço: ${service.name}`}
          loading="lazy"
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{service.name}</h3>
        <p className={styles.description}>{service.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>
            <span className={styles.priceCurrency}>R$</span>
            {formattedPrice}
          </span>
          <button
            className={styles.selectButton}
            data-selected={isSelected}
            onClick={() => onSelect(service.id)}
            aria-pressed={isSelected}
          >
            {isSelected ? 'Selecionado' : 'Selecionar'}
          </button>
        </div>
      </div>
    </div>
  );
}
