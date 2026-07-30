import { advantages } from '../../data/advantages';
import styles from './Advantages.module.css';

export function Advantages() {
  return (
    <section id="advantages" className={`section ${styles.advantages}`} aria-label="Diferenciais">
      <div className="section-inner">
        <div className={styles.header}>
          <span className="eyebrow">Diferenciais</span>
          <h2 className="section-title">Por que escolher a Rótula Quartel</h2>
        </div>

        <div className={styles.grid}>
          {advantages.map((advantage) => (
            <div key={advantage.id} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                {advantage.icon}
              </span>
              <h3 className={styles.title}>{advantage.title}</h3>
              <p className={styles.description}>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
