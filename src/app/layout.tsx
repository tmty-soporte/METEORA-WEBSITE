import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode} from 'react';

import BackToTop from '../components/BackToTop';
import ScrollObserver from '../components/ScrollObserver';

import './styles/index.css';
import './styles/hero-animations.css';
import './styles/scroll-animations.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Meteora | Modern Technology Solutions',
  description: 'Meteora - Advanced Technology Solutions for Modern Businesses',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={figtree.className}>
        <Script src="https://cdn.amcharts.com/lib/5/index.js" strategy="beforeInteractive" />
        <Script src="https://cdn.amcharts.com/lib/5/map.js" strategy="beforeInteractive" />
        <Script
          src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.amcharts.com/lib/5/themes/Animated.js"
          strategy="beforeInteractive"
        />
        <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />

        {children}

        <ScrollObserver />
        <BackToTop />
      </body>
    </html>
  );
}
