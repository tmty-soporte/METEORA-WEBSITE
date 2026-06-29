import AmChartsMap from '@/components/charts/AmChartsMap/AmChartsMap';
import { homeLocations } from '@/data/locations';

export default function LocationSection() {
  return (
    <section className="ubicacion" id="ubicacion">
      <div className="container ubicacion-layout">
        <div className="ubicacion-header reveal fade-left">
          <span className="ubicacion-eyebrow">Presencia Geográfica</span>

          <h2 className="ubicacion-title">Ubicación</h2>

          <p className="ubicacion-desc">
            Operamos en puntos estratégicos para garantizar una cobertura eficiente y una atención
            cercana a nuestros clientes.
          </p>

          <div className="ubicacion-list">
            {homeLocations.map((location) => (
              <div
                key={location.city}
                className={`ubicacion-item reveal fade-up ${location.delayClass}`}
              >
                <i data-lucide="map-pin" className="ubicacion-icon" />
                <span className="ubicacion-city">{location.city}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ubicacion-map reveal scale-up delay-200">
          <AmChartsMap />
        </div>
      </div>
    </section>
  );
}