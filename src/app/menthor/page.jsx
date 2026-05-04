'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function MenthorPage() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .product-hero { padding: 180px 0 100px; background: radial-gradient(circle at top right, rgba(84, 101, 255, 0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(65, 211, 189, 0.1), transparent 50%), #0B0F2A; color: white; position: relative; overflow: hidden; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: center; position: relative; z-index: 10; }
        .hero-left { max-width: 680px; display: flex; flex-direction: column; align-items: flex-start; }
        .hero-header-block { width: 100%; display: flex; flex-direction: column; align-items: flex-start; text-align: left; margin-bottom: 0.75rem; }
        .hero-visual-box { position: relative; border-radius: 32px; overflow: hidden; box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); }
        .hero-visual-box img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .product-badge { display: inline-block; padding: 0.5rem 1.25rem; background: rgba(84, 101, 255, 0.15); border: 1px solid rgba(84, 101, 255, 0.3); border-radius: 99px; color: var(--color-accent); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem; }
        .hero-logo-img { max-width: 280px; width: 100%; height: auto; margin-bottom: 0.25rem; filter: drop-shadow(0 8px 25px rgba(84, 101, 255, 0.25)); transition: all 0.5s ease; }
        .hero-logo-img:hover { filter: drop-shadow(0 20px 50px rgba(84, 101, 255, 0.6)); transform: scale(1.02); }
        .product-description-container { max-width: 660px; margin-bottom: 2.25rem; }
        .product-description-container p { font-size: 1.1rem; line-height: 1.75; color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem; }
        .product-description-container .intro-main { font-size: 1.5rem; font-weight: 700; color: white; line-height: 1.4; margin-bottom: 1.25rem; letter-spacing: -0.5px; }
        .product-description-container .text-highlight { color: white; font-weight: 700; }
        .benefits-section { padding: 100px 0; background: #F8FAFC; }
        .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; align-items: stretch; }
        @media (max-width: 1200px) { .benefits-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .benefits-grid { grid-template-columns: 1fr; } }
        .benefit-card { background: white; padding: 3rem 2.5rem; border-radius: 32px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03); border: 1px solid #F1F5F9; transition: all 0.4s ease; }
        .benefit-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1); }
        .benefit-icon { width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 2rem; box-shadow: 0 10px 20px rgba(84, 101, 255, 0.2); }
        .benefit-card h3 { font-size: 1.5rem; font-weight: 800; color: var(--color-secondary); margin-bottom: 1rem; }
        .stats-section { padding: 120px 0; background: white; position: relative; overflow: hidden; }
        .stats-section::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, rgba(84, 101, 255, 0.03), transparent 30%), radial-gradient(circle at 100% 100%, rgba(65, 211, 189, 0.03), transparent 30%); pointer-events: none; }
        .stats-header { text-align: center; margin-bottom: 5rem; position: relative; z-index: 5; }
        .stats-header h2 { font-size: 2.75rem; font-weight: 800; color: var(--color-secondary); letter-spacing: -1.5px; margin-bottom: 1.5rem; }
        .stats-header-line { width: 80px; height: 4px; background: linear-gradient(to right, var(--color-primary), var(--color-accent)); margin: 0 auto; border-radius: 99px; }
        .stats-grid { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; position: relative; z-index: 5; }
        .stat-card { background: white; padding: 3.5rem 2.5rem; border-radius: 32px; border: 1px solid #F1F5F9; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); flex: 0 1 calc(33.333% - 1.35rem); min-width: 320px; display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .stat-card:hover { transform: translateY(-12px); box-shadow: 0 30px 60px rgba(84, 101, 255, 0.1); border-color: rgba(84, 101, 255, 0.2); }
        .stat-icon-box { width: 56px; height: 56px; background: rgba(84, 101, 255, 0.08); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: var(--color-primary); margin-bottom: 2rem; }
        .stat-number { font-size: 2.75rem; font-weight: 800; background: linear-gradient(135deg, var(--color-primary), #4834d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.75rem; line-height: 1.2; padding: 0.1rem 0; display: block; }
        .stat-title { font-size: 1.25rem; font-weight: 700; color: var(--color-secondary); margin-bottom: 1rem; line-height: 1.35; }
        .stat-desc { font-size: 1rem; color: #64748B; line-height: 1.6; }
        @media (max-width: 992px) {
            .hero-grid { grid-template-columns: 1fr; gap: 3.5rem; text-align: center; }
            .hero-left { margin: 0 auto; }
            .hero-logo-img { margin-left: auto; margin-right: auto; }
            .product-description-container { margin-left: auto; margin-right: auto; }
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
                  <img src="/assets/logos/menthorblanco.png" alt="MENTHOR Platform" className="hero-logo-img" />
                </div>
              </div>

              <div className="product-description-container">
                <p className="intro-main">Menthor es una plataforma digital diseñada para optimizar el desarrollo de talento dentro de organizaciones, centralizando procesos de <span className="text-highlight">mentoría, capacitación y seguimiento profesional</span> en un solo entorno.</p>
                <p>A través de herramientas inteligentes, permite estructurar el aprendizaje, dar visibilidad al progreso de los usuarios y <span className="text-highlight">tomar decisiones basadas en datos</span>, eliminando la desorganización y mejorando la eficiencia en la gestión del conocimiento.</p>
                <p>Menthor impulsa una <span className="text-highlight">cultura de crecimiento continuo</span>, facilitando la evolución de personas y equipos, y convirtiendo el talento en resultados medibles para las organizaciones.</p>
              </div>

              <div className="hero-buttons">
                <Link href="/#contact" className="btn btn-primary btn-lg">Solicitar demo</Link>
              </div>
            </div>

            <div className="hero-right fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="hero-visual-box">
                <img src="/assets/images/menthor-bg.png" alt="Desarrollo de Talento MENTHOR" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><i data-lucide="users-2"></i></div>
              <h3>Mentoría centralizada</h3>
              <p>Gestiona procesos de mentoría dentro de una sola plataforma, con mayor orden y claridad.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon"><i data-lucide="book-open"></i></div>
              <h3>Capacitación estructurada</h3>
              <p>Organiza contenidos, rutas de aprendizaje y procesos de formación profesional de forma más eficiente.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="benefit-icon"><i data-lucide="line-chart"></i></div>
              <h3>Seguimiento del progreso</h3>
              <p>Da visibilidad al avance de los usuarios en tiempo real y facilita el acompañamiento continuo.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="benefit-icon"><i data-lucide="database"></i></div>
              <h3>Gestión basada en datos</h3>
              <p>Obtén información clara para mejorar decisiones sobre talento, desarrollo y desempeño profesional.</p>
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
              <div className="stat-icon-box"><i data-lucide="users"></i></div>
              <div className="stat-number">+1,000</div>
              <h3 className="stat-title">Perfiles gestionados</h3>
              <p className="stat-desc">Administra el talento de tu organización en una sola plataforma integrada.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="stat-icon-box"><i data-lucide="trending-up"></i></div>
              <div className="stat-number">+ Productividad</div>
              <h3 className="stat-title">Impacto en desarrollo</h3>
              <p className="stat-desc">Incremento tangible en la productividad y el desarrollo profesional del equipo.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="stat-icon-box"><i data-lucide="clock"></i></div>
              <div className="stat-number">Tiempo real</div>
              <h3 className="stat-title">Visibilidad inmediata</h3>
              <p className="stat-desc">Seguimiento puntual del progreso y evolución de los usuarios al instante.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="stat-icon-box"><i data-lucide="settings"></i></div>
              <div className="stat-number">Automatización</div>
              <h3 className="stat-title">Procesos optimizados</h3>
              <p className="stat-desc">Gestión automatizada de procesos de mentoría y rutas de capacitación.</p>
            </div>
            <div className="stat-card fade-up" style={{ transitionDelay: '400ms' }}>
              <div className="stat-icon-box"><i data-lucide="globe"></i></div>
              <div className="stat-number">24/7</div>
              <h3 className="stat-title">Acceso ubicuo</h3>
              <p className="stat-desc">Acceso garantizado desde cualquier dispositivo en todo momento.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
