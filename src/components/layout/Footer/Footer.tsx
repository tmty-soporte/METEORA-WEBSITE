import Link from 'next/link';

type FooterLegalLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSocialLink = {
  label: string;
  href: string;
  iconSrc: string;
};

const legalLinks: FooterLegalLink[] = [
  {
    label: 'Aviso de privacidad',
    href: '/docs/aviso%20de%20privacidad.pdf',
    external: true,
  },
  {
    label: 'Términos y condiciones',
    href: '#',
    external: false
  },
  {
    label: 'Cookies',
    href: '#',
    external: false,
  }
];

const socialLinks: FooterSocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61585215745216&locale=es_LA',
    iconSrc: '/assets/logos/facebook.png',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@MeteoraIA',
    iconSrc: '/assets/logos/youtube.png',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/meteoraai/',
    iconSrc: '/assets/logos/instagram.png',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@meteorasolutions',
    iconSrc: '/assets/logos/tiktoklogo1.png',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-legal">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="footer-legal-item">
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href}>{link.label}</Link>
                )}

                {index < legalLinks.length - 1 && <span className="footer-sep">|</span>}
              </span>
            ))}
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <img src={link.iconSrc} alt={link.label} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2026 Meteora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
