import styles from '../styles/cards.module.css';

interface CardProps {
  frontImage: string;
  backImage: string;
  label: string;
  flipped: boolean;
  onFlip: () => void;
}

export default function Card({ frontImage, backImage, label, flipped, onFlip }: CardProps) {
  const cardClassName = `${styles.cardContainer} ${flipped ? styles.isFlipped : ''}`;

  return (
    <div
      className={cardClassName}
      onClick={onFlip}
      aria-label={`Card: ${label} (click to flip)`}
    >
      <div className={styles.cardFlipper}>
        <div
          className={`${styles.cardFace} ${styles.cardFront}`}
          style={{ backgroundImage: `url(${frontImage})` }}
        />
        <div
          className={`${styles.cardFace} ${styles.cardBack}`}
          style={{ backgroundImage: `url(${backImage})` }}
        />
      </div>
    </div>
  );
}
