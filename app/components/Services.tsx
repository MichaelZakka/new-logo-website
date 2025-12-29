import { Sparkles, Layers, Target } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand Innovation and Design',
    description: 'We help you create a unique brand identity that reflects the essence of your business, with a professional logo design that expresses your vision and attracts your audience\'s attention.',
  },
  {
    icon: Layers,
    title: 'Visual Identity Systems',
    description: 'Complete visual identity packages including color palettes, typography, iconography, and comprehensive brand guidelines for consistent application.',
  },
  {
    icon: Target,
    title: 'Brand Strategy',
    description: 'Strategic brand positioning and market analysis to ensure your brand stands out in competitive markets and connects with your target audience.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Our Services</h2>
          <p>Comprehensive branding solutions tailored to elevate your business</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className={`service-card fade-in delay-${index + 1}`}>
                <div className="service-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

