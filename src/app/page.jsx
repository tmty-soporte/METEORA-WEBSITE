'use client';

import { useEffect } from 'react';

import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import AmChartsMap from '@/components/AmChartsMap';
import HeroSection from '@/components/sections/home/HeroSection';
import VideoStripSection from '@/components/sections/home/VideoStripSection';
import AboutSection from '@/components/sections/home/AboutSection';

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

      {/* Servicios Section */}
      <section className="servicios" id="servicios">
        <div className="servicios-bg-texture">
          <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="serv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5465FF" />
                <stop offset="100%" stopColor="#41D3BD" />
              </linearGradient>
            </defs>
          </svg>
          <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path className="serv-line" d="M0,100 Q400,50 800,150 T1440,100" />
            <path className="serv-line" d="M0,400 Q720,300 1440,400" />
            <path className="serv-line" d="M0,700 Q400,750 800,650 T1440,700" />
          </svg>
        </div>
        <div className="container">
          <div className="servicios-header reveal fade-up">
            <span className="servicios-eyebrow">Soluciones que escalan tu operación</span>
            <h2 className="section-title">Servicios</h2>
          </div>
          <div className="servicios-grid">
            <div className="service-card featured reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="layout"></i></div>
              <div className="service-content">
                <h3>Aplicaciones a la medida</h3>
                <p>Soluciones personalizadas a la medida y de alta calidad flexibles a tus necesidades.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="workflow"></i></div>
              <div className="service-content">
                <h3>BPM</h3>
                <p>A medida que se acelera el ritmo de cambio, las empresas necesitan mejorar su capacidad para
                  aprovechar oportunidades. Nosotros podemos ayudarte asesorándote para identificar las
                  mejores practicas para tu negocio.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="users"></i></div>
              <div className="service-content">
                <h3>Outsourcing</h3>
                <p>Nuestros profesionales colaboran contigo poniendo a tu servicio su experiencia para con ello,
                  lograr mantenerte a la vanguardia en TI.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="layers"></i></div>
              <div className="service-content">
                <h3>SOA</h3>
                <p>Un SOA es una metodología que orquesta una colección de servicios que funcionan
                  independientes, pero que interactúan entre ellos donde todos juntos forman una 'Solución'.
                </p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="cloud"></i></div>
              <div className="service-content">
                <h3>Soluciones en la Nube</h3>
                <p>La gestión de software y datos en la nube es una excelente alternativa para usar la
                  tecnología de última generación a un costo competitivo.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="globe"></i></div>
              <div className="service-content">
                <h3>Portales Corporativos</h3>
                <p>Un portal corporativo es más que un sitio web, es la solución que facilita la comunicación
                  entre tus diferentes áreas de negocio y clientes.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="server"></i></div>
              <div className="service-content">
                <h3>Servidores de Aplicaciones</h3>
                <p>Es el órgano principal de los sistemas, es el equivalente al corazón humano.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="code-2"></i></div>
              <div className="service-content">
                <h3>Expertos en Back-end</h3>
                <p>Ofrecemos servicios que solucionarán tus necesidades de almacenamiento, administración,
                  disponibilidad, migración y seguridad de información.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="factory"></i></div>
              <div className="service-content">
                <h3>Fábrica de Software</h3>
                <p>El uso de este modelo trae beneficios para nuestros clientes porque representa ahorros en la
                  inversión total de sus proyectos.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="cpu"></i></div>
              <div className="service-content">
                <h3>Arquitectura TI</h3>
                <p>Soluciones que permitirán optimizar la infraestructura TI.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="landmark"></i></div>
              <div className="service-content">
                <h3>Gobierno Electrónico</h3>
                <p>Cada día se vuelve más necesario que exista una cercanía entre la población y sus
                  autoridades.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="bar-chart-3"></i></div>
              <div className="service-content">
                <h3>Inteligencia de Negocios BI</h3>
                <p>Información completa, oportuna y en tiempo real.</p>
              </div>
            </div>
            <div className="service-card reveal scale-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="map-pin"></i></div>
              <div className="service-content">
                <h3>Nearshore</h3>
                <p>Extendiendo el alcance de nuestros clientes.</p>
              </div>
            </div>
            {/* Otros servicios pueden agregarse aquí */}
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="productos" id="productos">
        <div className="container">
          <div className="productos-header reveal fade-up">
            <span className="productos-eyebrow">NUESTRAS PLATAFORMAS TECNOLÓGICAS</span>
            <h2 className="section-title">Soluciones que transforman tu operación</h2>
          </div>
          <div className="productos-grid">
            <div className="product-card reveal fade-up">
              <div className="product-card-left">
                <div className="product-brand-header">
                  <img src="/assets/logos/ergonblanco.png" alt="ERGON" className="product-brand-icon" />
                </div>
                <p className="product-card-desc">Gestión de servicios en campo con evidencia y trazabilidad total.</p>
                <div className="product-features-list">
                  <div className="feature-item"><i data-lucide="check"></i><span>Evidencia fotográfica y georreferenciada</span></div>
                  <div className="feature-item"><i data-lucide="check"></i><span>Reportes automáticos en tiempo real</span></div>
                </div>
                <a href="/ergon" className="btn-product-ver">Ver más <div className="arrow-circle"><i data-lucide="arrow-right"></i></div></a>
              </div>
              <div className="product-card-right">
                <img src="/assets/images/ergonfoto2.png" alt="ERGON" className="product-real-image" />
              </div>
            </div>

            <div className="product-card reveal fade-up delay-100">
              <div className="product-card-left">
                <div className="product-brand-header">
                  <img src="/assets/logos/hydrablanco.png" alt="HYDRA" className="product-brand-icon" />
                </div>
                <p className="product-card-desc">Gestión integral de organismos operadores de agua.</p>
                <div className="product-features-list">
                  <div className="feature-item"><i data-lucide="check"></i><span>Control operativo y administrativo</span></div>
                  <div className="feature-item"><i data-lucide="check"></i><span>Automatización de procesos</span></div>
                </div>
                <a href="/hydra" className="btn-product-ver">Ver más <div className="arrow-circle"><i data-lucide="arrow-right"></i></div></a>
              </div>
              <div className="product-card-right reveal fade-right delay-300">
                <img src="/assets/images/hydrafoto2.png" alt="HYDRA" className="product-real-image" />
              </div>
            </div>

            <div className="product-card reveal fade-up delay-200">
              <div className="product-card-left">
                <div className="product-brand-header">
                  <img src="/assets/logos/menthorblanco.png" alt="MENTHOR" className="product-brand-icon" />
                </div>
                <p className="product-card-desc">
                  Desarrollo de talento y gestión del aprendizaje con herramientas inteligentes.
                </p>
                <div className="product-features-list">
                  <div className="feature-item">
                    <i data-lucide="check"></i>
                    <span>Gestión de mentorías y capacitación estructurada</span>
                  </div>
                  <div className="feature-item">
                    <i data-lucide="check"></i>
                    <span>Seguimiento de habilidades y progreso profesional</span>
                  </div>
                  <div className="feature-item">
                    <i data-lucide="check"></i>
                    <span>Desarrollo de talento con procesos medibles</span>
                  </div>
                </div>
                <a href="/menthor" className="btn-product-ver">Ver más <div className="arrow-circle"><i data-lucide="arrow-right"></i></div></a>
              </div>
              <div className="product-card-right reveal fade-left delay-400">
                <img
                  src="/assets/images/menthorfoto2.png" alt="MENTHOR Talent Development" className="product-real-image"
                />
              </div>
            </div>

            <div className="product-card reveal fade-up delay-300">
              <div className="product-card-left">
                <div className="product-brand-header">
                  <img src="/assets/logos/sigeblanco.png" alt="SIGE" className="product-brand-icon" />
                </div>
                <p className="product-card-desc">Gestión eficiente de la operación energética con control y
                  automatización.</p>
                <div className="product-features-list">
                  <div className="feature-item"><i data-lucide="check"></i><span>Control de volumetría y análisis
                    energético en tiempo real</span></div>
                  <div className="feature-item"><i data-lucide="check"></i><span>Automatización de procesos
                    operativos y técnicos</span></div>
                  <div className="feature-item"><i data-lucide="check"></i><span>Gestión comercial, facturación y
                    seguimiento de consumo</span></div>
                </div>
                <a href="/sige" className="btn-product-ver">
                  Ver más <div className="arrow-circle"><i data-lucide="arrow-right"></i></div>
                </a>
              </div>
              <div className="product-card-right reveal fade-right delay-500">
                <img src="/assets/images/sigefoto2.png" alt="SIGE Industrial Operations" className="product-real-image" />
              </div>
            </div>

          </div>
        </div>
      </section>

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
