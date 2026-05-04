'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ErgonPage() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .product-hero { padding: 180px 0 100px; background: radial-gradient(circle at top right, rgba(84, 101, 255, 0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(65, 211, 189, 0.1), transparent 50%), #0B0F2A; color: white; position: relative; overflow: hidden; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: center; position: relative; z-index: 10; }
        .hero-left { max-width: 680px; display: flex; flex-direction: column; align-items: flex-start; }
        .hero-header-block { width: 100%; display: flex; flex-direction: column; align-items: flex-start; text-align: left; margin-bottom: 0.75rem; }
        .hero-right { display: flex; flex-direction: column; gap: 2.5rem; align-items: stretch; }
        .hero-visual-box { position: relative; border-radius: 32px; overflow: hidden; box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); }
        .hero-visual-box img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .sector-buttons-group { display: flex; flex-direction: column; gap: 1rem; }
        .btn-sector { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.75rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; color: white; text-decoration: none; font-weight: 600; font-size: 1rem; transition: all 0.3s ease; }
        .btn-sector:hover { background: rgba(84, 101, 255, 0.15); border-color: var(--color-primary); transform: translateX(8px); }
        .btn-sector i { width: 18px; height: 18px; opacity: 0.5; transition: all 0.3s ease; }
        .btn-sector:hover i { opacity: 1; transform: translateX(4px); color: var(--color-accent); }
        .product-badge { display: inline-block; padding: 0.5rem 1.25rem; background: rgba(84, 101, 255, 0.15); border: 1px solid rgba(84, 101, 255, 0.3); border-radius: 99px; color: var(--color-accent); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem; }
        .product-hero h1 { font-size: 5rem; font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -3px; line-height: 1; }
        .product-hero .highlight { background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-logo-img { max-width: 280px; width: 100%; height: auto; margin-bottom: 0.25rem; filter: drop-shadow(0 8px 25px rgba(84, 101, 255, 0.25)); transition: all 0.5s ease; }
        .hero-logo-img:hover { filter: drop-shadow(0 20px 50px rgba(84, 101, 255, 0.6)); transform: scale(1.02); }
        .product-description-container { max-width: 660px; margin-bottom: 2.25rem; }
        .product-description-container p { font-size: 1.1rem; line-height: 1.75; color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem; }
        .product-description-container .intro-main { font-size: 1.5rem; font-weight: 700; color: white; line-height: 1.4; margin-bottom: 1.25rem; letter-spacing: -0.5px; }
        .product-description-container .text-highlight { color: white; font-weight: 700; }
        .product-description-container .intro-quote { font-size: 1.15rem; font-weight: 600; color: white; margin: 1.5rem 0; line-height: 1.6; padding: 1.25rem 0; border-top: 1px solid rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .product-description-container .intro-quote span { display: block; color: var(--color-accent); margin-top: 0.25rem; font-weight: 800; }
        .benefits-section { padding: 100px 0; background: #F8FAFC; }
        .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; align-items: stretch; }
        @media (max-width: 1200px) { .benefits-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .benefits-grid { grid-template-columns: 1fr; } }
        .benefit-card { background: white; padding: 3rem 2.5rem; border-radius: 32px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03); border: 1px solid #F1F5F9; transition: all 0.4s ease; }
        .benefit-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1); }
        .benefit-icon { width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 2rem; box-shadow: 0 10px 20px rgba(84, 101, 255, 0.2); }
        .benefit-card h3 { font-size: 1.5rem; font-weight: 800; color: var(--color-secondary); margin-bottom: 1rem; }
        .product-visual { padding: 100px 0; background: white; text-align: center; }
        .visual-container { max-width: 1100px; margin: 0 auto; border-radius: 40px; overflow: hidden; box-shadow: 0 50px 100px rgba(0, 0, 0, 0.15); border: 1px solid rgba(0, 0, 0, 0.05); }
        .visual-container img { width: 100%; display: block; }
        .stats-section { padding: 120px 0; background: white; position: relative; overflow: hidden; }
        .stats-section::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, rgba(84, 101, 255, 0.03), transparent 30%), radial-gradient(circle at 100% 100%, rgba(65, 211, 189, 0.03), transparent 30%); pointer-events: none; }
        .stats-header { text-align: center; margin-bottom: 5rem; position: relative; z-index: 5; }
        .stats-header h2 { font-size: 2.75rem; font-weight: 800; color: var(--color-secondary); letter-spacing: -1.5px; margin-bottom: 1.5rem; }
        .stats-header-line { width: 80px; height: 4px; background: linear-gradient(to right, var(--color-primary), var(--color-accent)); margin: 0 auto; border-radius: 99px; }
        .stats-videos-container { max-width: 1200px; margin: 6rem auto 0; position: relative; z-index: 5; }
        .stats-videos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        .video-box { border-radius: 32px; overflow: hidden; box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15); border: 1px solid rgba(255, 255, 255, 0.1); background: #000; aspect-ratio: 16/9; }
        .stats-video { width: 100%; height: 100%; object-fit: cover; display: block; }
        .stats-grid { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; position: relative; z-index: 5; }
        .stat-card { background: white; padding: 3.5rem 2.5rem; border-radius: 32px; border: 1px solid #F1F5F9; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); flex: 0 1 calc(33.333% - 1.35rem); min-width: 320px; display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .stat-card:hover { transform: translateY(-12px); box-shadow: 0 30px 60px rgba(84, 101, 255, 0.1); border-color: rgba(84, 101, 255, 0.2); }
        .stat-icon-box { width: 56px; height: 56px; background: rgba(84, 101, 255, 0.08); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: var(--color-primary); margin-bottom: 2rem; }
        .stat-number { font-size: 3.75rem; font-weight: 800; background: linear-gradient(135deg, var(--color-primary), #4834d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.75rem; line-height: 1.2; padding: 0.1rem 0; display: block; }
        .stat-title { font-size: 1.25rem; font-weight: 700; color: var(--color-secondary); margin-bottom: 1rem; line-height: 1.35; }
        .stat-desc { font-size: 1rem; color: #64748B; line-height: 1.6; }
        .product-cta { padding: 140px 0; background: linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%); position: relative; border-top: 1px solid #EEF2FF; }
        .cta-flex { display: flex; flex-direction: column; align-items: flex-start; text-align: left; gap: 1.5rem; }
        .product-cta h2 { font-size: 38px; font-weight: 800; color: var(--color-secondary); max-width: none; line-height: 1.2; letter-spacing: -1px; margin-bottom: 1rem; white-space: nowrap; }
        .product-cta p { font-size: 16px; line-height: 1.6; color: #64748B; max-width: 650px; }
        .product-cta .btn { margin-top: 2rem; }
        @media (max-width: 992px) {
            .hero-grid { grid-template-columns: 1fr; gap: 3.5rem; text-align: center; }
            .hero-left { margin: 0 auto; }
            .hero-logo-img { margin-left: auto; margin-right: auto; }
            .product-description-container { margin-left: auto; margin-right: auto; }
            .product-description-container .intro-quote { border-left: none; border-top: 2px solid var(--color-accent); padding-left: 0; padding-top: 1.5rem; }
            .btn-sector:hover { transform: none; }
            .cta-flex { text-align: left; align-items: flex-start; gap: 1.5rem; }
            .product-cta h2 { font-size: 28px; white-space: normal; }
            .product-cta p { font-size: 14px; }
            .stats-videos-grid { grid-template-columns: 1fr; gap: 2.5rem; }
            .stats-videos-container { margin-top: 4rem; padding: 0 1rem; }
        }
      ` }} />

      <Navbar />

      <section className="product-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left fade-up">
              <div className="hero-header-block">
                <span className="product-badge">Plataforma Tecnológica</span>
                <div className="product-hero-logo">
                  <img src="/assets/logos/ergonblanco.png" alt="ERGON Platform" className="hero-logo-img" />
                </div>
              </div>

              <div className="product-description-container">
                <p className="intro-main"><span className="text-highlight">ERGON</span> es la plataforma que transforma la manera en la que operan las organizaciones en campo.</p>
                <p>Deja atrás la falta de control, los reportes manuales y la incertidumbre, y comienza a <span className="text-highlight">gestionar todo en tiempo real</span> desde un solo lugar.</p>
                <p>Con ERGON sabes exactamente qué está pasando, dónde y cuándo.</p>
                <p>Supervisa a tus equipos, valida cada actividad con <span className="text-highlight">evidencia</span> y toma decisiones con información confiable al instante.</p>
                <p>Optimiza rutas, mejora tiempos de respuesta, elimina errores operativos y aumenta la <span className="text-highlight">productividad</span> de tu personal sin complicaciones.</p>
                <div className="intro-quote">
                  Ya no se trata solo de trabajar más…
                  <span>se trata de trabajar mejor, con control y resultados medibles.</span>
                </div>
                <p>ERGON se adapta a tu operación, ya sea en gobierno, agua, infraestructura o empresas privadas, ayudándote a <span className="text-highlight">hacer más con menos.</span></p>
              </div>

              <div className="hero-buttons">
                <Link href="/#contact" className="btn btn-primary btn-lg">Solicitar demo gratis</Link>
              </div>
            </div>

            <div className="hero-right fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="hero-visual-box">
                <img src="/assets/images/ergonfoto3.png" alt="Campo de Operaciones ERGON" />
              </div>

              <div className="sector-buttons-group">
                <Link href="/ergon/infraestructura" className="btn-sector">
                  <span>Ergon Infraestructura</span>
                  <i data-lucide="arrow-right"></i>
                </Link>
                <Link href="/ergon/agua-medio-ambiente" className="btn-sector">
                  <span>Ergon Agua y Medio Ambiente</span>
                  <i data-lucide="arrow-right"></i>
                </Link>
                <Link href="/ergon/seguridad-publica" className="btn-sector">
                  <span>Ergon Seguridad Pública</span>
                  <i data-lucide="arrow-right"></i>
                </Link>
                <Link href="/ergon/empresas-privadas" className="btn-sector">
                  <span>Ergon Empresas Privadas</span>
                  <i data-lucide="arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><i data-lucide="activity"></i></div>
              <h3>Monitoreo en tiempo real</h3>
              <p>Visualiza el estado de cada servicio y la ubicación de tus cuadrillas al instante.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon"><i data-lucide="camera"></i></div>
              <h3>Evidencia fotográfica</h3>
              <p>Captura evidencia visual del antes y después de cada trabajo realizado en campo.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="benefit-icon"><i data-lucide="users"></i></div>
              <h3>Control de brigadas</h3>
              <p>Asigna tareas y gestiona equipos de trabajo con máxima eficiencia y trazabilidad.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="benefit-icon"><i data-lucide="file-text"></i></div>
              <h3>Reportes automáticos</h3>
              <p>Genera informes de servicio y estadísticas de desempeño con un solo clic.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-header fade-up">
            <h2>RESULTADOS EN CIFRAS</h2>
            <div className="stats-header-line"></div>
          </div>

          <div className="stats-grid">
            <div className="stat-card fade-up">
              <div className="stat-icon-box"><i data-lucide="map-pin"></i></div>
              <div className="stat-number">100%</div>
              <h3 className="stat-title">Visibilidad de tu operación en tiempo real</h3>
              <p className="stat-desc">Sabe exactamente dónde está tu equipo y qué está haciendo en todo momento para una gestión impecable.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="stat-icon-box"><i data-lucide="clock"></i></div>
              <div className="stat-number">-60%</div>
              <h3 className="stat-title">Reducción en tiempos de supervisión</h3>
              <p className="stat-desc">Elimina recorridos innecesarios y centraliza todo el control táctico desde la plataforma unificada.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="stat-icon-box"><i data-lucide="camera"></i></div>
              <div className="stat-number">+90%</div>
              <h3 className="stat-title">Actividades validadas con evidencia digital</h3>
              <p className="stat-desc">Fotos, ubicación y registros en tiempo real que respaldan cada acción con total transparencia.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="stat-icon-box"><i data-lucide="dollar-sign"></i></div>
              <div className="stat-number">-30%</div>
              <h3 className="stat-title">Disminución de costos operativos</h3>
              <p className="stat-desc">Menos errores, menos retrabajo y un mejor uso de los recursos críticos de tu organización.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '400ms' }}>
              <div className="stat-icon-box"><i data-lucide="trending-up"></i></div>
              <div className="stat-number">+50%</div>
              <h3 className="stat-title">Mejora en la toma de decisiones</h3>
              <p className="stat-desc">Datos claros, reportes automáticos y control total para actuar al instante con información real.</p>
            </div>
          </div>
          <div className="stats-videos-container fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="stats-videos-grid">
              <div className="video-box">
                <video className="stats-video" controls playsInline>
                  <source src="/assets/videos/Ergon video promocional.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              <div className="video-box">
                <video className="stats-video" controls playsInline>
                  <source src="/assets/videos/Ergon video promocional 2.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="container">
          <div className="cta-flex fade-up">
            <h2>Lleva el control total de tus operaciones en campo</h2>
            <p>Optimiza tu operación, mejora la visibilidad en campo y toma decisiones con datos en tiempo real.</p>
            <Link href="/#contact" className="btn btn-primary btn-lg">Solicitar demo ahora</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
