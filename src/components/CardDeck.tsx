import Card from './Card';
import styles from '../styles/cards.module.css';
import { useState } from 'react';

export default function CardDeck() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const cards = [
    {
      frontImage: "/images/the_descent_front.png",
      backImage: "/images/the_descent_back.png",
      label: "The Descent",
    },
    {
      frontImage: "/images/the_veil_front.png",
      backImage: "/images/the_veil_back.png",
      label: "The Veil",
    },
    {
      frontImage: "/images/the_sigh_front.png",
      backImage: "/images/the_sigh_back.png",
      label: "The Sigh",
    },
  ];

  const handleFlip = (label: string) => {
    if (flippedCard === null) {
      setFlippedCard(label); // flip the clicked card
    } else if (flippedCard === label) {
      setFlippedCard(null); // unflip the card
    } // else do nothing
  };

  return (
    <section className={styles.cardDeck}>
      {cards.map((card) => (
        <Card
          key={card.label}
          frontImage={card.frontImage}
          backImage={card.backImage}
          label={card.label}
          flipped={flippedCard === card.label}
          onFlip={() => handleFlip(card.label)}
        />
      ))}
    </section>
  );
}
