import { Search, BarChart3, Lightbulb, Rocket } from 'lucide-react';

const philosophySteps = [
  { icon: Search, title: 'Analysis', number: '01' },
  { icon: BarChart3, title: 'Strategy', number: '02' },
  { icon: Lightbulb, title: 'Vision', number: '03' },
  { icon: Rocket, title: 'Execution', number: '04' },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <div className="philosophy-content">
          <div className="section-header fade-in">
            <h2>Our Working Philosophy</h2>
          </div>
          <p className="philosophy-text fade-in delay-1">
            We study and analyze local and global markets, then develop different scenarios 
            for the customer or product journey, and present future visions for the brand 
            to find the best paths to building a sustainable and comprehensive brand that 
            meets customer aspirations.
          </p>
          <div className="philosophy-steps">
            {philosophySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.number} 
                  className={`step fade-in delay-${index + 1}`}
                >
                  <div className="step-icon">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <span className="step-number">{step.number}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

