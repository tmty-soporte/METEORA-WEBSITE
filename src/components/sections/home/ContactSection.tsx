'use client';

import type { FormEvent } from 'react';

const interestOptions = [
  {
    label: 'Hydra',
    value: 'hydra',
  },
  {
    label: 'Ergon',
    value: 'ergon',
  },
  {
    label: 'Menthor',
    value: 'menthor',
  },
  {
    label: 'SIGE',
    value: 'sige',
  },
];

export default function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Pendiente para siguiente etapa:
    // 1. Leer FormData
    // 2. Validar datos
    // 3. Enviar a /api/contact
    // 4. Mostrar estado de éxito/error
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-text reveal fade-left">
            <h2 className="contact-title">
              Solicita información <span className="title-accent">o una demo</span>
            </h2>

            <p className="contact-description">
              Transforma la operación de tu organización con soluciones tecnológicas diseñadas para
              generar resultados reales. Nuestro equipo está listo para ayudarte a identificar
              oportunidades, optimizar tus procesos y llevar tu gestión al siguiente nivel. Solicita
              información o agenda una demo personalizada y descubre cómo podemos impulsar tu
              operación.
            </p>
          </div>

          <div className="contact-form-card reveal fade-up delay-200">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group reveal fade-up delay-100">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                </div>

                <div className="form-group reveal fade-up delay-200">
                  <label htmlFor="empresa">Empresa / Organización</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>

                <div className="form-group reveal fade-up delay-300">
                  <label htmlFor="cargo">Cargo</label>
                  <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    placeholder="Tu cargo actual"
                    required
                  />
                </div>

                <div className="form-group reveal fade-up delay-400">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="Ej. +52 000 000 0000"
                    required
                  />
                </div>

                <div className="form-group full-width reveal fade-up delay-500">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="correo@empresa.com"
                    required
                  />
                </div>

                <div className="form-group full-width reveal fade-up delay-600">
                  <label htmlFor="interes">Tipo de interés</label>
                  <select id="interes" name="interes" required defaultValue="">
                    <option value="" disabled>
                      Selecciona una plataforma
                    </option>

                    {interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width reveal fade-up delay-600">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Describe brevemente tus necesidades..."
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-demo">
                  Solicitar demo
                </button>

                <button type="button" className="btn btn-secondary btn-info">
                  Recibir información
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}