import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
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
