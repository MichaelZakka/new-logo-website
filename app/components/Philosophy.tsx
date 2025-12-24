const philosophySteps = [
  { icon: '🔍', title: 'Analysis', number: '01' },
  { icon: '📊', title: 'Strategy', number: '02' },
  { icon: '💡', title: 'Vision', number: '03' },
  { icon: '🚀', title: 'Execution', number: '04' },
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
            {philosophySteps.map((step, index) => (
              <div 
                key={step.number} 
                className={`step fade-in delay-${index + 1}`}
              >
                <div className="step-icon">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <span className="step-number">{step.number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

