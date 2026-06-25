import { homeServices } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="servicios" id="servicios">
      <div className="servicios-bg-texture">
        <svg
          style={{ width: 0, height: 0, position: 'absolute' }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="serv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5465FF" />
              <stop offset="100%" stopColor="#41D3BD" />
            </linearGradient>
          </defs>
        </svg>

        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
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
          {homeServices.map((service) => (
            <div
              key={service.title}
              className={`service-card ${service.featured ? 'featured' : ''} reveal scale-up`}
            >
              <div className="service-accent" />

              <div className="service-icon-box">
                <i data-lucide={service.icon} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}