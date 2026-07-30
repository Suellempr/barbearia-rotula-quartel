import styles from './Loader.module.css';

interface LoaderProps {
  isHidden: boolean;
}

export function Loader({ isHidden }: LoaderProps) {
  return (
    <div className={styles.loader} data-hidden={isHidden} aria-hidden={isHidden} role="status">
      <div className={styles.mark}>
        <div className={styles.ring} />
        <span className={styles.label}>Rótula Quartel</span>
        <span className="sr-only">Carregando</span>
      </div>
    </div>
  );
}
