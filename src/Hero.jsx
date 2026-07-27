import "./Hero.css";

export default function Hero({ scrollToSection }) {
  return (
    <section className="hero" id="home">

      <div className="hero-background">
        <div className="particles"></div>
        <div className="network-lines"></div>
      </div>

      <div className="hero-content">

        <div className="hero-left">
          <h1>
            Faith <span>Musyoka</span>
          </h1>

          <h2>Full Stack Engineer</h2>

          <p>
            Designing intelligent solutions with Python, JavaScript,
            React, and Machine Learning to bring innovative ideas to life.
          </p>

          <div className="buttons">
            <button className="primary" onClick={() => scrollToSection('projects')}>View My Work</button>
            <button className="secondary" onClick={() => scrollToSection('contact-me')}>Contact Me</button>
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/brain.jpg" alt="Brain" className="hero-image" />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
