'use client';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AmChartsMap from '../components/AmChartsMap';

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

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-immersive-bg">
          <div className="glow-layer"></div>
          <div className="mesh-layer"></div>
          <div className="waves-layer">
            <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="wave-path path-1" d="M-100 400C200 300 400 600 800 500C1200 400 1400 700 1600 600" stroke="url(#wave-grad-1)" strokeWidth="2" />
              <path className="wave-path path-2" d="M-100 500C300 400 600 700 1000 600C1400 500 1500 800 1700 700" stroke="url(#wave-grad-1.5)" strokeWidth="1.5" />
              <path className="wave-path path-3" d="M-100 300C400 200 700 500 1100 400C1500 300 1600 600 1800 500" stroke="url(#wave-grad-3)" strokeWidth="1" />
              <defs>
                <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5465FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#5465FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#41D3BD" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#41D3BD" stopOpacity="0" />
                  <stop offset="50%" stopColor="#41D3BD" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5465FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5465FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#41D3BD" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="particles-layer"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content fade-up">
            <div className="hero-tagline">
              <span className="tagline-icon"><i data-lucide="sparkles"></i></span>
              Innovación con propósito | Más de 20 años de experiencia.
            </div>
            <h1>Transformamos datos en <br /><span>decisiones inteligentes</span></h1>
            <p>Soluciones tecnológicas que optimizan tu operación, reducen costos y aceleran el crecimiento de tu organización.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-lg">Contáctanos</a>
            </div>

            <div className="logo-ribbon-section">
              <p className="ribbon-title">Alianzas estratégicas en innovación</p>
              <div className="logo-ribbon-container">
                <div className="logo-ribbon-track">
                  <div className="ribbon-logo-item"><img src="/assets/logos/vallenlogo1.png" alt="Vallen" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/jmaslogo1.png" alt="JMAS" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/simsalogo1.png" alt="Grupo SIMSA" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/agsallogo1.png" alt="Aguas de Saltillo" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/amic.png" alt="AMIC" /></div>

                  <div className="ribbon-logo-item"><img src="/assets/logos/vallenlogo1.png" alt="Vallen" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/jmaslogo1.png" alt="JMAS" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/simsalogo1.png" alt="Grupo SIMSA" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/agsallogo1.png" alt="Aguas de Saltillo" /></div>
                  <div className="ribbon-logo-item"><img src="/assets/logos/amic.png" alt="AMIC" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Strip Banner */}
      <section className="video-strip-container">
        <div className="video-strip-overlay"></div>
        <video className="video-strip-content" autoPlay muted loop playsInline>
          <source src="/assets/videos/fondo.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      </section>

      {/* Nosotros Section */}
      <section className="nosotros" id="about">
        <div className="nosotros-texture">
          <svg className="data-flow-svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path className="flow-line line-a" d="M-100,200 Q300,50 720,200 T1540,200" fill="none" stroke="rgba(84,101,255,0.06)" strokeWidth="1.5" />
            <path className="flow-line line-b" d="M-100,500 Q400,750 720,500 T1540,500" fill="none" stroke="rgba(65,211,189,0.06)" strokeWidth="1.5" />
            <path className="flow-line line-c" d="M-100,800 Q250,700 500,800 T1000,800" fill="none" stroke="rgba(84,101,255,0.04)" strokeWidth="1" />
          </svg>
        </div>

        <div className="container">
          <div className="nosotros-layout">
            <div className="nosotros-story fade-up">
              <span className="eyebrow">Nosotros</span>
              <h2>En Meteora no seguimos tendencias, <span>las creamos.</span></h2>
              <div className="description-block">
                <p>Somos una empresa mexicana de tecnología con más de 20 años de experiencia. Nos especializamos en transformar datos en decisiones inteligentes a través de soluciones de software innovadoras, escalables y diseñadas específicamente para resolver los problemas reales de tu negocio.</p>
                <p>Trabajamos con organizaciones públicas y privadas para optimizar sus operaciones, reducir costos y mejorar la toma de decisiones mediante tecnología de alto valor agregado.</p>
              </div>

              <div className="nosotros-extra-points">
                <h3>¿Por qué nuestros clientes nos eligen y se quedan?</h3>
                <div className="nosotros-points-grid">
                  <div className="point-item"><i data-lucide="check-circle-2"></i><span>Socio estratégico, no proveedor</span></div>
                  <div className="point-item"><i data-lucide="check-circle-2"></i><span>Soluciones a medida</span></div>
                  <div className="point-item"><i data-lucide="check-circle-2"></i><span>Tecnologías comprobadas</span></div>
                  <div className="point-item"><i data-lucide="check-circle-2"></i><span>Presencia en 4 continentes</span></div>
                  <div className="point-item"><i data-lucide="check-circle-2"></i><span>Capacitación incluida</span></div>
                </div>
              </div>
            </div>

            <div className="nosotros-philosophy fade-up" style={{ transitionDelay: '200ms' }}>
              <span className="philosophy-eyebrow">Filosofía</span>
              <div className="philosophy-cards">
                <div className="p-card">
                  <div className="p-card-header">
                    <i data-lucide="target"></i>
                    <h3>Misión</h3>
                  </div>
                  <p>Impulsar la transformación digital mediante soluciones tecnológicas que optimicen operaciones y generen resultados reales.</p>
                </div>
                <div className="p-card">
                  <div className="p-card-header">
                    <i data-lucide="eye"></i>
                    <h3>Visión</h3>
                  </div>
                  <p>Ser líderes en innovación tecnológica, reconocidos por elevar la eficiencia operativa en sectores estratégicos.</p>
                </div>
              </div>

              <div className="philosophy-valores">
                <h3>Valores</h3>
                <div className="valores-mini-grid">
                  <div className="v-mini-item"><i data-lucide="shield-check"></i><span>Honestidad</span></div>
                  <div className="v-mini-item"><i data-lucide="lightbulb"></i><span>Innovación</span></div>
                  <div className="v-mini-item"><i data-lucide="award"></i><span>Calidad</span></div>
                  <div className="v-mini-item"><i data-lucide="heart"></i><span>Compromiso</span></div>
                  <div className="v-mini-item"><i data-lucide="headphones"></i><span>Servicio</span></div>
                  <div className="v-mini-item"><i data-lucide="trending-up"></i><span>Responsabilidad</span></div>
                </div>
              </div>
              <div className="philosophy-footer">
                <a href="/docs/aviso%20de%20privacidad.pdf" target="_blank" rel="noreferrer" className="btn-minimal">Aviso de privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="servicios-header fade-up">
            <span className="servicios-eyebrow">Soluciones que escalan tu operación</span>
            <h2 className="section-title">Servicios</h2>
          </div>
          <div className="servicios-grid">
            <div className="service-card featured fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="layout"></i></div>
              <div className="service-content">
                <h3>Aplicaciones a la medida</h3>
                <p>Soluciones personalizadas a la medida y de alta calidad flexibles a tus necesidades.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="workflow"></i></div>
              <div className="service-content">
                <h3>BPM</h3>
                <p>A medida que se acelera el ritmo de cambio, las empresas necesitan mejorar su capacidad para
                  aprovechar oportunidades. Nosotros podemos ayudarte asesorándote para identificar las
                  mejores practicas para tu negocio.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="users"></i></div>
              <div className="service-content">
                <h3>Outsourcing</h3>
                <p>Nuestros profesionales colaboran contigo poniendo a tu servicio su experiencia para con ello,
                  lograr mantenerte a la vanguardia en TI.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="layers"></i></div>
              <div className="service-content">
                <h3>SOA</h3>
                <p>Un SOA es una metodología que orquesta una colección de servicios que funcionan
                  independientes, pero que interactúan entre ellos donde todos juntos forman una 'Solución'.
                </p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="cloud"></i></div>
              <div className="service-content">
                <h3>Soluciones en la Nube</h3>
                <p>La gestión de software y datos en la nube es una excelente alternativa para usar la
                  tecnología de última generación a un costo competitivo.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="globe"></i></div>
              <div className="service-content">
                <h3>Portales Corporativos</h3>
                <p>Un portal corporativo es más que un sitio web, es la solución que facilita la comunicación
                  entre tus diferentes áreas de negocio y clientes.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="server"></i></div>
              <div className="service-content">
                <h3>Servidores de Aplicaciones</h3>
                <p>Es el órgano principal de los sistemas, es el equivalente al corazón humano.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="code-2"></i></div>
              <div className="service-content">
                <h3>Expertos en Back-end</h3>
                <p>Ofrecemos servicios que solucionarán tus necesidades de almacenamiento, administración,
                  disponibilidad, migración y seguridad de información.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="factory"></i></div>
              <div className="service-content">
                <h3>Fábrica de Software</h3>
                <p>El uso de este modelo trae beneficios para nuestros clientes porque representa ahorros en la
                  inversión total de sus proyectos.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="cpu"></i></div>
              <div className="service-content">
                <h3>Arquitectura TI</h3>
                <p>Soluciones que permitirán optimizar la infraestructura TI.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="landmark"></i></div>
              <div className="service-content">
                <h3>Gobierno Electrónico</h3>
                <p>Cada día se vuelve más necesario que exista una cercanía entre la población y sus
                  autoridades.</p>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-accent"></div>
              <div className="service-icon-box"><i data-lucide="bar-chart-3"></i></div>
              <div className="service-content">
                <h3>Inteligencia de Negocios BI</h3>
                <p>Información completa, oportuna y en tiempo real.</p>
              </div>
            </div>
            <div className="service-card fade-up">
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
          <div className="productos-header fade-up">
            <span className="productos-eyebrow">NUESTRAS PLATAFORMAS TECNOLÓGICAS</span>
            <h2 className="section-title">Soluciones que transforman tu operación</h2>
          </div>
          <div className="productos-grid">
            <div className="product-card fade-up">
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

            <div className="product-card fade-up" style={{ transitionDelay: '100ms' }}>
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
              <div className="product-card-right">
                <img src="/assets/images/hydrafoto2.png" alt="HYDRA" className="product-real-image" />
              </div>
            </div>

            <div className="product-card fade-up" style={{ transitionDelay: '200ms' }}>
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
              <div className="product-card-right">
                <img
                  src="/assets/images/menthorfoto2.png" alt="MENTHOR Talent Development" className="product-real-image"
                />
              </div>
            </div>

            <div className="product-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="product-card-left">
                <div className="product-brand-header">
                  <img src="assets/logos/sigeblanco.png" alt="SIGE" className="product-brand-icon" />
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
              <div className="product-card-right">
                <img src="assets/images/sigefoto2.png" alt="SIGE Industrial Operations" className="product-real-image" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ubicación Section (AmCharts) */}
      <section className="ubicacion" id="ubicacion">
        <div className="container ubicacion-layout">
          <div className="ubicacion-header fade-up">
            <span className="ubicacion-eyebrow">Presencia Geográfica</span>
            <h2 className="ubicacion-title">Ubicación</h2>
            <p className="ubicacion-desc">
              Operamos en puntos estratégicos para garantizar una cobertura eficiente y una atención cercana a nuestros clientes.
            </p>
            <div className="ubicacion-list fade-up">
              <div className="ubicacion-item"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Torreón</span></div>
              <div className="ubicacion-item"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Monterrey</span></div>
              <div className="ubicacion-item"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Ciudad de México</span></div>
              <div className="ubicacion-item"><i data-lucide="map-pin" className="ubicacion-icon"></i><span className="ubicacion-city">Houston</span></div>
            </div>
          </div>
          <div className="ubicacion-map fade-up">
            <AmChartsMap />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container fade-up">
          <div className="contact-layout">
            {/* Left Side: TextContent */}
            <div className="contact-text">
              <h2 className="contact-title">Solicita información <span className="title-accent">o una demo</span></h2>
              <p className="contact-description">
                Transforma la operación de tu organización con soluciones tecnológicas diseñadas para generar resultados reales.
                Nuestro equipo está listo para ayudarte a identificar oportunidades, optimizar tus procesos y llevar tu gestión al siguiente nivel.
                Solicita información o agenda una demo personalizada y descubre cómo podemos impulsar tu operación.
              </p>
            </div>

            {/* Right Side: Form Card */}
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input type="text" id="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="empresa">Empresa / Organización</label>
                    <input type="text" id="empresa" placeholder="Nombre de tu empresa" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cargo">Cargo</label>
                    <input type="text" id="cargo" placeholder="Tu cargo actual" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" placeholder="Ej. +52 000 000 0000" required />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder="correo@empresa.com" required />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="interes">Tipo de interés</label>
                    <select id="interes" required defaultValue="">
                      <option value="" disabled>Selecciona una plataforma</option>
                      <option value="hydra">Hydra</option>
                      <option value="ergon">Ergon</option>
                      <option value="menthor">Menthor</option>
                      <option value="sige">SIGE</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
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
