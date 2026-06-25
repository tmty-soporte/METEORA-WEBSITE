export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-immersive-bg">
        <div className="glow-layer" />
        <div className="mesh-layer" />

        <div className="waves-layer">
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="wave-path path-1"
              d="M-100 400C200 300 400 600 800 500C1200 400 1400 700 1600 600"
              stroke="url(#wave-grad-1)"
              strokeWidth="2"
            />
            <path
              className="wave-path path-2"
              d="M-100 500C300 400 600 700 1000 600C1400 500 1500 800 1700 700"
              stroke="url(#wave-grad-2)"
              strokeWidth="1.5"
            />
            <path
              className="wave-path path-3"
              d="M-100 300C400 200 700 500 1100 400C1500 300 1600 600 1800 500"
              stroke="url(#wave-grad-3)"
              strokeWidth="1"
            />

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

        <div className="particles-layer" />
      </div>

      <div className="container hero-container">
        <div className="hero-content fade-up">
          <div className="hero-tagline">
            <span className="tagline-icon">
              <i data-lucide="sparkles" />
            </span>
            Innovación con propósito | Más de 20 años de experiencia.
          </div>

          <h1>
            <span
              style={{
                display: 'inline-block',
                animation: 'heroTitleFadeUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards',
                opacity: 0,
              }}
            >
              Transformamos datos en
            </span>{' '}
            <br />
            <span
              style={{
                display: 'inline-block',
                animation: 'heroTitleFadeUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              <span>decisiones inteligentes</span>
            </span>
          </h1>

          <p>
            Soluciones tecnológicas que optimizan tu operación, reducen costos y aceleran el
            crecimiento de tu organización.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-lg">
              Contáctanos
            </a>
          </div>

          <div className="logo-ribbon-section">
            <p className="ribbon-title">Alianzas estratégicas en innovación</p>

            <div className="logo-ribbon-container">
              <div className="logo-ribbon-track">
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/vallenlogo1.png" alt="Vallen" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/jmaslogo1.png" alt="JMAS" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/simsalogo1.png" alt="Grupo SIMSA" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/agsallogo1.png" alt="Aguas de Saltillo" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/amic.png" alt="AMIC" />
                </div>

                <div className="ribbon-logo-item">
                  <img src="/assets/logos/vallenlogo1.png" alt="Vallen" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/jmaslogo1.png" alt="JMAS" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/simsalogo1.png" alt="Grupo SIMSA" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/agsallogo1.png" alt="Aguas de Saltillo" />
                </div>
                <div className="ribbon-logo-item">
                  <img src="/assets/logos/amic.png" alt="AMIC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}