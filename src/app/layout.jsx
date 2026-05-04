import Script from 'next/script';
import BackToTop from '../components/BackToTop';
import './styles/index.css';

export const metadata = {
  title: 'Meteora | Modern Technology Solutions',
  description: 'Meteora - Advanced Technology Solutions for Modern Businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

      </head>
      <body>
        {/* Scripts globales críticos colocados dentro del body para evitar error de hidratación */}
        <Script src="https://cdn.amcharts.com/lib/5/index.js" strategy="beforeInteractive" />
        <Script src="https://cdn.amcharts.com/lib/5/map.js" strategy="beforeInteractive" />
        <Script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js" strategy="beforeInteractive" />
        <Script src="https://cdn.amcharts.com/lib/5/themes/Animated.js" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
        
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
