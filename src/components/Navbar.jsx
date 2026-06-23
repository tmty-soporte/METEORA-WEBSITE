'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isHidden ? 'navbar-hidden' : ''}`} id="navbar">
      <div className="container">
        <Link href="/" className="nav-brand">
          <img src="/assets/logos/LOGO-BG BLANCO 1 (3).png" alt="Meteora" className="navbar-logo" />
        </Link>

        <div className="nav-links" id="nav-links">
          <Link href="#about">Nosotros</Link>
          <Link href="#servicios">Servicios</Link>
          <Link href="#productos">Productos</Link>
          <Link href="#contact">Contacto</Link>
          <Link href="#contact" className="btn btn-primary nav-btn-cta">Solicitar demo</Link>
        </div>

        <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle Menu">
          <i data-lucide="menu"></i>
        </button>
      </div>
    </nav>
  );
}
