'use client';
import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before it comes into view
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Unobserve to trigger only once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Timeout allows initial layout to complete so observer grabs all elements correctly
    const initObserver = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    };

    setTimeout(initObserver, 100);

    return () => observer.disconnect();
  }, []);

  return null;
}
