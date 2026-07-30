import { services } from '../../data/services';
import { useSelectedService } from '../../hooks/useSelectedService';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';

export function Services() {
  const { selectedServiceId, setSelectedServiceId } = useSelectedService();
  const { scrollToSection } = useSmoothScroll();

  function handleSelect(serviceId: string) {
    setSelectedServiceId(serviceId);
    scrollToSection('schedule');
  }

  return (
    <section id="services" className={`section ${styles.services}`} aria-label="Serviços">
      <div className="section-inner">
        <div className={styles.header}>
          <span className="eyebrow">Nossos Serviços</span>
          <h2 className="section-title">Cortados com precisão, feitos com tradição</h2>
          <p className="section-lede">
            Cada serviço é conduzido com atenção aos detalhes, produtos selecionados e o ritmo de
            quem entende que barbearia é ofício.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServiceId === service.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
