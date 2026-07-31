import { businessConfig } from "../../data/businessConfig";
import styles from "./Location.module.css";

export function Location() {
  const { address, contact, hours } = businessConfig;

  return (
    <section
      id="location"
      className={`section ${styles.location}`}
      aria-label="Localização"
    >
      <div className="section-inner">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <span className="eyebrow">Localização</span>
            <h2 className="section-title">Venha nos visitar</h2>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <img src="/icon-endereco.png" alt="" />
              </span>
              <div>
                <p className={styles.infoTitle}>Endereço</p>
                <p className={styles.infoText}>
                  {address.street} — {address.neighborhood}
                  <br />
                  {address.city} · {address.zip}
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <img src="/icon-relogio.png" alt="" />
              </span>
              <div>
                <p className={styles.infoTitle}>Funcionamento</p>
                <p className={styles.infoText}>
                  {hours.weekdays}
                  <br />
                  {hours.saturday}
                  <br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <img src="/icon-telefone.png" alt="" />
              </span>
              <div>
                <p className={styles.infoTitle}>Telefone</p>
                <p className={styles.infoText}>{contact.phone}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <img src="/icon-instagram.png" alt="" />
              </span>
              <div>
                <p className={styles.infoTitle}>Instagram</p>
                <p className={styles.infoText}>{contact.instagram}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                <img src="/icon-email.png" alt="" />
              </span>
              <div>
                <p className={styles.infoTitle}>E-mail</p>
                <p className={styles.infoText}>{contact.email}</p>
              </div>
            </div>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              src={address.mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de localização — ${businessConfig.name}`}
              aria-label={`Mapa de localização — ${businessConfig.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
