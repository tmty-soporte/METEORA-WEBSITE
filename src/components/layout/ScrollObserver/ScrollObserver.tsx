'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timeoutId = window.setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
      });
    }, 100);
    
    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
