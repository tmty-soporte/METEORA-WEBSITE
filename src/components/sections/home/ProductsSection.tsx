import Link from 'next/link';

import { homeProducts } from '@/data/products';

export default function ProductsSection() {
  return (
    <section className="productos" id="productos">
      <div className="container">
        <div className="productos-header reveal fade-up">
          <span className="productos-eyebrow">NUESTRAS PLATAFORMAS TECNOLÓGICAS</span>
          <h2 className="section-title">Soluciones que transforman tu operación</h2>
        </div>

        <div className="productos-grid">
          {homeProducts.map((product) => (
            <div
              key={product.name}
              className={`product-card reveal fade-up ${product.delayClass ?? ''}`.trim()}
            >
              <div className="product-card-left">
                <div className="product-brand-header">
                  <img
                    src={product.logoSrc}
                    alt={product.logoAlt}
                    className="product-brand-icon"
                  />
                </div>

                <p className="product-card-desc">{product.description}</p>

                <div className="product-features-list">
                  {product.features.map((feature) => (
                    <div key={feature} className="feature-item">
                      <i data-lucide="check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={product.href} className="btn-product-ver">
                  Ver más
                  <div className="arrow-circle">
                    <i data-lucide="arrow-right" />
                  </div>
                </Link>
              </div>

              <div className={`product-card-right ${product.imageRevealClass ?? ''}`.trim()}>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="product-real-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}