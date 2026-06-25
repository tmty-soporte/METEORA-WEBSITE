'use client';

import { useEffect } from 'react';

import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import AmChartsMap from '@/components/AmChartsMap';
import HeroSection from '@/components/sections/home/HeroSection';
import VideoStripSection from '@/components/sections/home/VideoStripSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import ProductsSection from '@/components/sections/home/ProductsSection';

export default function Home() {
  useEffect(() => {
    // Inicializar iconos
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <Navbar />

      <HeroSection />

      <VideoStripSection />

      <AboutSection />

      <ServicesSection />

      <ProductsSection />

      {/* Ubicación Section (AmCharts) */}
      <section className="ubicacion" id="ubicacion">
        <div className="container ubicacion-layout">
          <div className="ubicacion-header reveal fade-left">
            <span className="ubicacion-eyebrow">Presencia Geográfica</span>
            <h2 className="ubicacion-title">Ubicación</h2>
            <p className="ubicacion-desc">
              Operamos en puntos estratégicos para garantizar una cobertura eficiente y una atención cercana a nuestros clientes.
            </p>
            <div className="ubicacion-list">
              <div className="ubicacion-item reveal fade-up delay-100"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Torreón</span></div>
              <div className="ubicacion-item reveal fade-up delay-200"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Monterrey</span></div>
              <div className="ubicacion-item reveal fade-up delay-300"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Ciudad de México</span></div>
              <div className="ubicacion-item reveal fade-up delay-400"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Houston</span></div>
            </div>
          </div>
          <div className="ubicacion-map reveal scale-up delay-200">
            <AmChartsMap />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-layout">
            {/* Left Side: TextContent */}
            <div className="contact-text reveal fade-left">
              <h2 className="contact-title">Solicita información <span className="title-accent">o una demo</span></h2>
              <p className="contact-description">
                Transforma la operación de tu organización con soluciones tecnológicas diseñadas para generar resultados reales.
                Nuestro equipo está listo para ayudarte a identificar oportunidades, optimizar tus procesos y llevar tu gestión al siguiente nivel.
                Solicita información o agenda una demo personalizada y descubre cómo podemos impulsar tu operación.
              </p>
            </div>

            {/* Right Side: Form Card */}
            <div className="contact-form-card reveal fade-up delay-200">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                  <div className="form-group reveal fade-up delay-100">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input type="text" id="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="form-group reveal fade-up delay-200">
                    <label htmlFor="empresa">Empresa / Organización</label>
                    <input type="text" id="empresa" placeholder="Nombre de tu empresa" required />
                  </div>
                  <div className="form-group reveal fade-up delay-300">
                    <label htmlFor="cargo">Cargo</label>
                    <input type="text" id="cargo" placeholder="Tu cargo actual" required />
                  </div>
                  <div className="form-group reveal fade-up delay-400">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" placeholder="Ej. +52 000 000 0000" required />
                  </div>
                  <div className="form-group full-width reveal fade-up delay-500">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder="correo@empresa.com" required />
                  </div>
                  <div className="form-group full-width reveal fade-up delay-600">
                    <label htmlFor="interes">Tipo de interés</label>
                    <select id="interes" required defaultValue="">
                      <option value="" disabled>Selecciona una plataforma</option>
                      <option value="hydra">Hydra</option>
                      <option value="ergon">Ergon</option>
                      <option value="menthor">Menthor</option>
                      <option value="sige">SIGE</option>
                    </select>
                  </div>
                  <div className="form-group full-width reveal fade-up delay-600">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" placeholder="Describe brevemente tus necesidades..." required></textarea>
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-demo">Solicitar demo</button>
                  <button type="button" className="btn btn-secondary btn-info">Recibir información</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
