import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './About.module.css';

export function About() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="about" className={`section ${styles.about}`} aria-label="História">
      <div className="section-inner">
        <div
          ref={ref}
          className={styles.row}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s var(--ease-elegant), transform 0.8s var(--ease-elegant)',
          }}
        >
          <div className={styles.imageCol}>
            <div className={`${styles.imageFrame} corner-frame`}>
              <img
                className={styles.image}
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=900&auto=format&fit=crop"
                alt="Fachada histórica da Barbearia Rótula Quartel"
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.textCol}>
            <span className="eyebrow">Nossa História</span>
            <h2 className="section-title">Um ofício que atravessa gerações</h2>
            <p className={styles.paragraph}>
              A Rótula Quartel nasceu do respeito pela barbearia clássica — aquela em que a
              navalha, a toalha quente e a conversa de bairro fazem parte do ritual. Fundada por
              um mestre barbeiro apaixonado pela tradição, a casa preserva técnicas centenárias
              aliadas a um ambiente sofisticado e acolhedor.
            </p>
            <p className={styles.paragraph}>
              Cada corte carrega o cuidado de quem entende que barbearia não é apenas sobre
              estética, mas sobre pertencimento. Ao longo dos anos, construímos uma reputação
              baseada em excelência, pontualidade e um atendimento que trata cada cliente como
              convidado de honra.
            </p>
            <span className={styles.signatureLine}>— Tradição desde 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
