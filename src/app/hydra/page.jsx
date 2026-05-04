'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function HydraPage() {
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
        .hero-visual-box { position: relative; aspect-ratio: 16 / 9; border-radius: 32px; overflow: hidden; box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); }
        .hero-visual-box img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .product-badge { display: inline-block; padding: 0.5rem 1.25rem; background: rgba(84, 101, 255, 0.15); border: 1px solid rgba(84, 101, 255, 0.3); border-radius: 99px; color: var(--color-accent); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem; }
        .hero-logo-img { max-width: 250px; width: 100%; height: auto; margin-bottom: 0.25rem; filter: drop-shadow(0 8px 25px rgba(84, 101, 255, 0.25)); transition: all 0.5s ease; }
        .hero-logo-img:hover { filter: drop-shadow(0 20px 50px rgba(84, 101, 255, 0.6)); transform: scale(1.02); }
        .product-description-container { max-width: 660px; margin-bottom: 2.25rem; }
        .product-description-container p { font-size: 1.1rem; line-height: 1.75; color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem; }
        .product-description-container .intro-main { font-size: 1.5rem; font-weight: 700; color: white; line-height: 1.4; margin-bottom: 1.25rem; letter-spacing: -0.5px; }
        .product-description-container .text-highlight { color: white; font-weight: 700; }
        .product-description-container .intro-quote { font-size: 1.15rem; font-weight: 600; color: white; margin: 1.5rem 0; line-height: 1.6; padding: 1.25rem 0; border-top: 1px solid rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .product-description-container .intro-quote span { display: block; color: var(--color-accent); margin-top: 0.25rem; font-weight: 800; }
        .stats-section { padding: 120px 0; background: white; position: relative; overflow: hidden; }
        .stats-section::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, rgba(84, 101, 255, 0.03), transparent 30%), radial-gradient(circle at 100% 100%, rgba(65, 211, 189, 0.03), transparent 30%); pointer-events: none; }
        .stats-header { text-align: center; margin-bottom: 5rem; position: relative; z-index: 5; }
        .stats-header h2 { font-size: 2.75rem; font-weight: 800; color: var(--color-secondary); letter-spacing: -1.5px; margin-bottom: 1.5rem; }
        .stats-header-line { width: 80px; height: 4px; background: linear-gradient(to right, var(--color-primary), var(--color-accent)); margin: 0 auto; border-radius: 99px; }
        .stats-grid { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; position: relative; z-index: 5; }
        .stat-card { background: white; padding: 3.5rem 2.5rem; border-radius: 32px; border: 1px solid #F1F5F9; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); flex: 0 1 calc(33.333% - 1.35rem); min-width: 320px; display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .stat-card:hover { transform: translateY(-12px); box-shadow: 0 30px 60px rgba(84, 101, 255, 0.1); border-color: rgba(84, 101, 255, 0.2); }
        .stat-icon-box { width: 56px; height: 56px; background: rgba(84, 101, 255, 0.08); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: var(--color-primary); margin-bottom: 2rem; }
        .stat-number { font-size: 3.25rem; font-weight: 800; background: linear-gradient(135deg, var(--color-primary), #4834d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.75rem; line-height: 1.2; padding: 0.1rem 0; display: block; }
        .stat-title { font-size: 1.25rem; font-weight: 700; color: var(--color-secondary); margin-bottom: 1rem; line-height: 1.35; }
        .stat-desc { font-size: 1rem; color: #64748B; line-height: 1.6; }
        .benefits-section { padding: 100px 0; background: #F8FAFC; }
        .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; align-items: stretch; }
        @media (max-width: 1200px) { .benefits-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .benefits-grid { grid-template-columns: 1fr; } }
        .benefit-card { background: white; padding: 3rem 2.5rem; border-radius: 32px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03); border: 1px solid #F1F5F9; transition: all 0.4s ease; }
        .benefit-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1); }
        .benefit-icon { width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 2rem; box-shadow: 0 10px 20px rgba(84, 101, 255, 0.2); }
        .benefit-card h3 { font-size: 1.5rem; font-weight: 800; color: var(--color-secondary); margin-bottom: 1rem; }
        @media (max-width: 992px) {
            .hero-grid { grid-template-columns: 1fr; gap: 3.5rem; text-align: center; }
            .hero-left { margin: 0 auto; }
            .hero-logo-img { margin-left: auto; margin-right: auto; }
            .product-description-container { margin-left: auto; margin-right: auto; }
        }
        .stats-videos-container { max-width: 1200px; margin: 6rem auto 0; position: relative; z-index: 5; display: flex; justify-content: center; }
        .stats-videos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        .video-box { border-radius: 32px; overflow: hidden; box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15); border: 1px solid rgba(255, 255, 255, 0.1); background: #000; aspect-ratio: 16/9; }
        .stats-video { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 768px) {
            .stats-videos-container { margin-top: 4rem; padding: 0 1rem; }
            .stats-videos-grid { grid-template-columns: 1fr; }
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
                  <img src="/assets/logos/hydrablanco.png" alt="HYDRA Platform" className="hero-logo-img" />
                </div>
              </div>

              <div className="product-description-container">
                <p className="intro-main">HYDRA es nuestra plataforma tecnológica diseñada para modernizar la gestión de organismos operadores de agua, integrando en un solo sistema el <span className="text-highlight">control operativo, la gestión comercial y la atención al usuario.</span></p>
                <p>Permite automatizar procesos, eliminar tareas manuales y tener <span className="text-highlight">visibilidad en tiempo real</span> de toda la operación, facilitando decisiones más rápidas y estratégicas.</p>
                <div className="intro-quote">
                  Conecta desde el trabajo en campo hasta la facturación y el cobro,
                  <span>incluyendo lectura inteligente, facturación masiva y pagos digitales.</span>
                </div>
                <p>Además, mejora la experiencia del usuario al permitir consultas, acceso a recibos y <span className="text-highlight">pagos en línea 24/7</span>, de forma rápida y segura.</p>
              </div>

              <div className="hero-buttons">
                <Link href="/#contact" className="btn btn-primary btn-lg">Solicitar demo</Link>
              </div>
            </div>

            <div className="hero-right fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="hero-visual-box">
                <img src="/assets/images/hydra-bg.png" alt="Gestión de Agua HYDRA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><i data-lucide="droplets"></i></div>
              <h3>Lecturas en tiempo real</h3>
              <p>Captura y consulta lecturas con mayor precisión y visibilidad operativa.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon"><i data-lucide="file-text"></i></div>
              <h3>Facturación automatizada</h3>
              <p>Genera recibos y procesos de cobro de forma más rápida y sin errores.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="benefit-icon"><i data-lucide="users"></i></div>
              <h3>Control comercial</h3>
              <p>Administra usuarios, consumos, adeudos y procesos comerciales desde un solo lugar.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="benefit-icon"><i data-lucide="bar-chart-3"></i></div>
              <h3>Reportes inteligentes</h3>
              <p>Accede a indicadores, estadísticas y reportes automáticos para tomar decisiones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-header fade-up">
            <h2>NÚMEROS EN CIFRAS</h2>
            <div className="stats-header-line"></div>
          </div>

          <div className="stats-grid">
            <div className="stat-card fade-up">
              <div className="stat-icon-box"><i data-lucide="file-text"></i></div>
              <div className="stat-number">Hasta 60,000</div>
              <h3 className="stat-title">Cuentas facturadas en minutos</h3>
              <p className="stat-desc">Agiliza los procesos de cobro masivo con total precisión y eficiencia digital.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="stat-icon-box"><i data-lucide="map-pin"></i></div>
              <div className="stat-number">100%</div>
              <h3 className="stat-title">Trazabilidad con GPS en campo</h3>
              <p className="stat-desc">Control total de la ubicación y actividades de tus cuadrillas en tiempo real.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="stat-icon-box"><i data-lucide="clock"></i></div>
              <div className="stat-number">-70%</div>
              <h3 className="stat-title">Reducción de tiempos operativos</h3>
              <p className="stat-desc">Optimización drástica de flujos de trabajo y procesos de supervisión técnica.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="stat-icon-box"><i data-lucide="trending-up"></i></div>
              <div className="stat-number">+ Recaudación</div>
              <h3 className="stat-title">Incremento en control financiero</h3>
              <p className="stat-desc">Mejora la salud financiera del organismo con herramientas de cobro inteligentes.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '400ms' }}>
              <div className="stat-icon-box"><i data-lucide="activity"></i></div>
              <div className="stat-number">24/7</div>
              <h3 className="stat-title">Operación sin interrupciones</h3>
              <p className="stat-desc">Plataforma siempre disponible para garantizar la continuidad del servicio a usuarios.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '0 0 140px', background: 'white' }}>
        <div className="container">
          <div className="stats-videos-container fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="stats-videos-grid">
              <div className="video-box">
                <video className="stats-video" controls playsInline>
                  <source src="/assets/videos/Hydra Municipios.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              <div className="video-box">
                <video className="stats-video" controls playsInline>
                  <source src="/assets/videos/Hydra Gemini.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
