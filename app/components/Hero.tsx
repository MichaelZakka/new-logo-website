import Image from 'next/image';
import logo from '../assets/logo.png';

interface HeroProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function Hero({ handleNavClick }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-logo-wrapper">
          <Image
            src={logo}
            alt="New Logo"
            width={200}
            height={200}
            priority
            className="hero-logo"
          />
        </div>
        <p className="hero-tagline">
          Crafting powerful brand identities that compete on the global stage. 
          We transform visions into iconic visual stories.
        </p>
        <a href="#about" className="hero-cta" onClick={(e) => handleNavClick(e, '#about')}>
          Discover Our Story
        </a>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}

