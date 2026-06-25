'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { mainNavigation } from '@/data/navigation';

export default function Navbar() {
  const lastScrollRef = useRef(0);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollRef.current
      
      setIsScrolled(currentScrollY > 50);
      
      if (isMenuOpen) {
        setIsHidden(false);
        lastScrollRef.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      id="navbar"
      className={[
        'navbar',
        isScrolled ? 'navbar-scrolled' : '',
        isHidden ? 'navbar-hidden' : '',
        isMenuOpen ? 'nav-menu-open' : ''
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="container">
        <Link href="/" className="nav-brand" aria-label='Ir al inicio' onClick={closeMenu}>
          <img
            src="/assets/logos/LOGO-BG BLANCO 1 (3).png"
            alt="Meteora"
            className="navbar-logo"
          />
        </Link>

        <div id="nav-links" className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {mainNavigation.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={item.isCta ? 'btn btn-primary nav-btn-cta' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="nav-links"
          onClick={toggleMenu}
        >
          <i data-lucide="menu"></i>
        </button>
      </div>
    </nav>
  );
}
