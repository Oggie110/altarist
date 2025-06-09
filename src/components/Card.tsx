import styles from '../styles/cards.module.css';
import { useState } from 'react';

interface CardProps {
  frontImage: string;
  backImage: string;
  label: string;
}

export default function Card({ frontImage, backImage, label }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.cardContainer} ${flipped ? styles.isFlipped : ''}`}
      onClick={() => setFlipped(!flipped)}
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
