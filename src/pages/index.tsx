import Head from 'next/head';
import CardDeck from '../components/CardDeck';
import styles from '../styles/cards.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Altarist - Sacred Breathwork</title>
        <meta name="description" content="Transform breathwork into an immersive daily practice with sacred ritual cards." />
        <meta property="og:title" content="Altarist – Sacred Breath Rituals" />
        <meta property="og:description" content="Draw your first ritual card and begin the journey inward." />
        <meta property="og:image" content="/images/preview.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
      </Head>

      <main className={styles.container}>
        <header className={styles.headerContent}>
          <h1>Altarist</h1>
          <p>Transform breathwork into an immersive daily practice with sacred ritual cards</p>
        </header>

        <CardDeck />

        <footer className={styles.footerContent}>
          <button className={styles.ctaButton}>Enter the Altar</button>
          <p className={styles.ctaSubtext}>Draw your first ritual card and discover the power of sacred breath</p>
        </footer>
      </main>
    </>
  );
}
