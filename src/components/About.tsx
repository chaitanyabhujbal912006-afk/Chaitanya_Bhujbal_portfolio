import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Third-year CSE student at DESPU building backend systems, AI
          applications, and healthcare tech — while wearing a second hat as{" "}
          <strong>Design Head</strong> of the{" "}
          <strong>AWS Student Builder Club</strong>. 13+ public repos spanning
          backend, cloud, and applied AI.
        </p>

        {/* Identity pills */}
        <div className="about-identity">
          <span className="identity-pill identity-pill--tech">⚙️ Backend Dev</span>
          <span className="identity-pill identity-pill--cloud">☁️ Cloud & DevOps</span>
          <span className="identity-pill identity-pill--design">🎨 Design Head · AWS Club</span>
          <span className="identity-pill identity-pill--art">🏆 India Book of Records</span>
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <span className="stat-value">13+</span>
            <span className="stat-label">Public Repos</span>
          </div>
          <div className="about-stat">
            <span className="stat-value">8.1</span>
            <span className="stat-label">CGPA / 10</span>
          </div>
          <div className="about-stat">
            <span className="stat-value">3rd</span>
            <span className="stat-label">Year · 2028</span>
          </div>
        </div>

        <div className="about-learning">
          <span className="learning-label">Currently learning</span>
          <div className="learning-tags">
            <span>Kubernetes</span>
            <span>AWS Certification</span>
            <span>Microservices</span>
            <span>Advanced System Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
