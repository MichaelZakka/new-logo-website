import Image from 'next/image';
import logo from '../assets/logo.png';

interface HeaderProps {
  isScrolled: boolean;
  isAtTop: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
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

export default function Header({
  isScrolled,
  isAtTop,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavClick,
}: HeaderProps) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isAtTop ? 'at-top' : ''}`}>
      <div className="container">
        <a href="#home" className="logo-link" onClick={(e) => handleNavClick(e, '#home')}>
          <Image
            src={logo}
            alt="New Logo"
            width={150}
            height={60}
            priority
            className="header-logo"
          />
        </a>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

