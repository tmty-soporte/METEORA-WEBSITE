'use client';

import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 300;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const shouldShowButton = window.scrollY > SCROLL_THRESHOLD;
      setIsVisible(shouldShowButton);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      type="button"
      id="back-to-top"
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      aria-label="Volver arriba"
      onClick={handleClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}