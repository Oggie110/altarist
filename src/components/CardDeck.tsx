import Card from './Card';
import styles from '../styles/cards.module.css';

export default function CardDeck() {
  return (
    <section className={styles.cardDeck}> 
      <Card
        frontImage="/images/card_TheVeil_front.png"
        backImage="/images/card_TheVeil_back.png"
        label="The Veil"
      />
      <Card
        frontImage="/images/card_TheEmber_front.png"
        backImage="/images/card_TheEmber_back.png"
        label="The Ember"
      />
      <Card
        frontImage="/images/card_TheEcho_front.png"
        backImage="/images/card_TheEcho_back.png"
        label="The Echo"
      />
    </section>
  );
}
