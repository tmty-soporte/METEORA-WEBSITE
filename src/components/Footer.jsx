import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-legal">
            <a href="/docs/aviso%20de%20privacidad.pdf" target="_blank" rel="noreferrer">Aviso de privacidad</a>
            <span className="footer-sep">|</span>
            <Link href="#">Términos y condiciones</Link>
            <span className="footer-sep">|</span>
            <Link href="#">Cookies</Link>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61585215745216&locale=es_LA" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src="/assets/logos/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/@MeteoraIA" target="_blank" rel="noreferrer" aria-label="YouTube">
              <img src="/assets/logos/youtube.png" alt="YouTube" />
            </a>
            <a href="https://www.instagram.com/meteoraai/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/assets/logos/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@meteorasolutions" target="_blank" rel="noreferrer" aria-label="TikTok">
              <img src="/assets/logos/tiktoklogo1.png" alt="TikTok" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2026 Meteora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
