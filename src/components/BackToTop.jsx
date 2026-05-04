'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Función para mostrar/ocultar el botón basado en el scroll
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Limpieza del event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Volver a instanciar los íconos de Lucide cuando el botón se hace visible
  useEffect(() => {
    if (isVisible && window.lucide) {
      window.lucide.createIcons();
    }
  }, [isVisible]);

  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="back-to-top"
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      aria-label="Back to Top"
      onClick={scrollToTop}
      // Aseguramos por inlining que React respete el estado visual en caso de que CSS falle
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease'
      }}
    >
      <i data-lucide="arrow-up"></i>
    </button>
  );
}
