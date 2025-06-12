import '../styles/globals.css';
import '../styles/cards.module.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add portal root if it doesn't exist
    if (!document.getElementById('portal-root')) {
      const portalDiv = document.createElement('div');
      portalDiv.id = 'portal-root';
      document.body.appendChild(portalDiv);
    }
  }, []);
  return <Component {...pageProps} />;
}
