export default function AboutSection() {
  return (
    <section className="nosotros" id="about">
      <div className="nosotros-texture">
        <svg className="data-flow-svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            className="flow-line line-a"
            d="M-100,200 Q300,50 720,200 T1540,200"
            fill="none"
            stroke="rgba(84,101,255,0.06)"
            strokeWidth="1.5"
          />
          <path
            className="flow-line line-b"
            d="M-100,500 Q400,750 720,500 T1540,500"
            fill="none"
            stroke="rgba(65,211,189,0.06)"
            strokeWidth="1.5"
          />
          <path
            className="flow-line line-c"
            d="M-100,800 Q250,700 500,800 T1000,800"
            fill="none"
            stroke="rgba(84,101,255,0.04)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container">
        <div className="nosotros-layout">
          <div className="nosotros-story reveal fade-left">
            <span className="eyebrow">Nosotros</span>

            <h2>
              En Meteora no seguimos tendencias, <span>las creamos.</span>
            </h2>

            <div className="description-block">
              <p>
                Somos una empresa mexicana de tecnología con más de 20 años de experiencia. Nos
                especializamos en transformar datos en decisiones inteligentes a través de
                soluciones de software innovadoras, escalables y diseñadas específicamente para
                resolver los problemas reales de tu negocio.
              </p>

              <p>
                Trabajamos con organizaciones públicas y privadas para optimizar sus operaciones,
                reducir costos y mejorar la toma de decisiones mediante tecnología de alto valor
                agregado.
              </p>
            </div>

            <div className="nosotros-extra-points">
              <h3>¿Por qué nuestros clientes nos eligen y se quedan?</h3>

              <div className="nosotros-points-grid">
                <div className="point-item">
                  <i data-lucide="check-circle-2" />
                  <span>Socio estratégico, no proveedor</span>
                </div>

                <div className="point-item">
                  <i data-lucide="check-circle-2" />
                  <span>Soluciones a medida</span>
                </div>

                <div className="point-item">
                  <i data-lucide="check-circle-2" />
                  <span>Tecnologías comprobadas</span>
                </div>

                <div className="point-item">
                  <i data-lucide="check-circle-2" />
                  <span>Presencia en 4 continentes</span>
                </div>

                <div className="point-item">
                  <i data-lucide="check-circle-2" />
                  <span>Capacitación incluida</span>
                </div>
              </div>
            </div>
          </div>

          <div className="nosotros-philosophy">
            <span className="philosophy-eyebrow reveal fade-up">Filosofía</span>

            <div className="philosophy-cards">
              <div className="p-card reveal fade-right delay-100">
                <div className="p-card-header">
                  <i data-lucide="target" />
                  <h3>Misión</h3>
                </div>

                <p>
                  Impulsar la transformación digital mediante soluciones tecnológicas que optimicen
                  operaciones y generen resultados reales.
                </p>
              </div>

              <div className="p-card reveal fade-right delay-300">
                <div className="p-card-header">
                  <i data-lucide="eye" />
                  <h3>Visión</h3>
                </div>

                <p>
                  Ser líderes en innovación tecnológica, reconocidos por elevar la eficiencia
                  operativa en sectores estratégicos.
                </p>
              </div>
            </div>

            <div className="philosophy-valores">
              <h3 className="reveal fade-up">Valores</h3>

              <div className="valores-mini-grid">
                <div className="v-mini-item reveal fade-up delay-100">
                  <i data-lucide="shield-check" />
                  <span>Honestidad</span>
                </div>

                <div className="v-mini-item reveal fade-up delay-200">
                  <i data-lucide="lightbulb" />
                  <span>Innovación</span>
                </div>

                <div className="v-mini-item reveal fade-up delay-300">
                  <i data-lucide="award" />
                  <span>Calidad</span>
                </div>

                <div className="v-mini-item reveal fade-up delay-400">
                  <i data-lucide="heart" />
                  <span>Compromiso</span>
                </div>

                <div className="v-mini-item reveal fade-up delay-500">
                  <i data-lucide="headphones" />
                  <span>Servicio</span>
                </div>

                <div className="v-mini-item reveal fade-up delay-600">
                  <i data-lucide="trending-up" />
                  <span>Responsabilidad</span>
                </div>
              </div>
            </div>

            <div className="philosophy-footer">
              <a
                href="/docs/aviso%20de%20privacidad.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-minimal"
              >
                Aviso de privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}