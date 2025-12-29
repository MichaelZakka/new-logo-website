export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>Who Are We</h2>
            <p>
              A <span className="highlight">leading Saudi company</span> specializing in brand design, 
              we aim to create visually powerful identities and logos for Saudi companies and products, 
              rivaling the strength of <span className="highlight">global logos worldwide</span>.
            </p>
            <p>
              Our mission is to elevate Saudi brands to international standards, 
              ensuring every identity we create tells a compelling story that resonates 
              with audiences across cultures and markets.
            </p>
          </div>
          <div className="about-visual fade-in-right delay-2">
            <div className="about-image-container">
              <div className="about-logo" style={{ color: '#393E46' }}>
                New<span>Logo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

