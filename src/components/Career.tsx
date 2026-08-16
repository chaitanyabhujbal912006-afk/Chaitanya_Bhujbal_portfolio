import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science & Engineering</h4>
                <h5>DES Pune University (DESPU), Pune, Maharashtra</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <div className="career-info-content">
              <p>
                CGPA: <strong>8.1 / 10</strong> · Third Year (Expected Graduation: 2027).
                Focused on backend development, cloud infrastructure, Kubernetes, and system design.
              </p>
            </div>
          </div>

          {/* AWS Club */}
          <div className="career-info-box career-info-box--highlight">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design Head — Core Team</h4>
                <h5>AWS Student Builder Club · DESPU Chapter</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <div className="career-info-content">
              <p>
                Serving as <strong>Design Head on the Core Team</strong> of the AWS Student Builder Club at DESPU.
                Leads all visual design work — event branding, social media creatives, promotional material,
                and community identity.
              </p>
              <div className="career-tags-row">
                <span className="career-tag">Figma</span>
                <span className="career-tag">Brand Identity</span>
                <span className="career-tag">Event Design</span>
                <span className="career-tag">Social Media</span>
                <span className="career-tag">AWS Community</span>
              </div>
            </div>
          </div>

          {/* OmniKavach */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>OmniKavach — ICU AI System</h4>
                <h5>IGNISIA 26 · National-Level AI Hackathon, MIT-WPU</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <div className="career-info-content">
              <p>
                Built an autonomous multi-agent clinical assistant for ICU data
                in 24 hours. Parallel patient data processing, early warning
                detection for sepsis and multi-organ failure using MIMIC-III
                clinical protocols, Evidence-Based RAG, and a live React dashboard.
              </p>
            </div>
          </div>

          {/* Sentinel */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sentinel — Kernel Guard</h4>
                <h5>TechVortex 3.0 · Top 50 Finalist (150+ teams)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div className="career-info-content">
              <p>
                Behaviour-based real-time ransomware protection using eBPF for
                kernel-level monitoring, Groq LLaMA for AI pattern recognition,
                and automated SIGKILL response with Node.js. Top 50 of 150+ teams.
              </p>
            </div>
          </div>

          {/* Open Source */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GitHub "Pull Shark" Achievement</h4>
                <h5>Open Source · External Repositories</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <div className="career-info-content">
              <p>
                Earned the GitHub <strong>Pull Shark</strong> achievement for merged pull
                requests across external repositories. Maintains 13 public repositories
                spanning backend systems, healthcare tech, and applied AI.
              </p>
            </div>
          </div>

        </div>

        {/* ── Extracurricular ── */}
        <div className="career-extra">
          <h4 className="career-extra-title">Extracurricular</h4>
          <div className="career-extra-grid">

            <div className="career-extra-card">
              <div className="career-extra-card-icon">🏆</div>
              <div className="career-extra-card-body">
                <span className="career-extra-card-label">India Book of Records</span>
                <p className="career-extra-card-desc">
                  Youngest to carve out 13 chains from 13 single chalk sticks using only a pin &amp; scraping tool —
                  each chain measuring 9 cm × 1 cm. Confirmed age: <strong>14 years, 8 months</strong>.
                  <a
                    href="https://indiabookofrecords.in/youngest-to-carve-out-chains-from-chalk-sticks-record/"
                    target="_blank"
                    rel="noreferrer"
                    className="career-extra-link"
                    data-cursor="disable"
                  >
                    View record ↗
                  </a>
                </p>
              </div>
            </div>

            <div className="career-extra-card">
              <div className="career-extra-card-icon">🎨</div>
              <div className="career-extra-card-body">
                <span className="career-extra-card-label">Canvas Painting & Visual Arts</span>
                <p className="career-extra-card-desc">
                  Professional canvas painter — large-format works and fine-detail sculptures.
                  Contributes design and artwork to college events and social media campaigns at DESPU.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;
