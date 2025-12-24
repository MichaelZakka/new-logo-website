interface FooterProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Who Are We', href: '#about' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer({ handleNavClick }: FooterProps) {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Contact Information */}
          <div className="footer-column fade-in">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+966 12 345 6789</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <span className="contact-value">info@newlogo.sa</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
              <a href="#" className="social-link" aria-label="Instagram">◐</a>
              <a href="#" className="social-link" aria-label="Behance">Bē</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column fade-in delay-1">
            <h3>Quick Links</h3>
            <nav className="quick-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="quick-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#" className="quick-link">Privacy Policy</a>
              <a href="#" className="quick-link">Terms of Service</a>
            </nav>
          </div>

          {/* Location */}
          <div className="footer-column fade-in delay-2">
            <h3>Our Location</h3>
            <div className="location-address">
              <div className="location-icon">📍</div>
              <div className="location-text">
                King Fahd Road<br />
                Riyadh 12345<br />
                Kingdom of Saudi Arabia
              </div>
            </div>
            <div className="map-placeholder">
              🗺 View on Map
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <a href="#home">NewLogo</a>. All rights reserved. 
            Designed with passion in Saudi Arabia.
          </p>
        </div>
      </div>
    </footer>
  );
}

