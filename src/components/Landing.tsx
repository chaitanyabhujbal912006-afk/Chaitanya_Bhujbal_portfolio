import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              CHAITANYA
              <br />
              <span>BHUJBAL</span>
            </h1>
            <div className="landing-badges">
              <span className="landing-badge">Backend Dev</span>
              <span className="landing-badge">Cloud & DevOps</span>
              <span className="landing-badge landing-badge--design">Design Head · AWS Club</span>
            </div>
          </div>
          <div className="landing-info">
            <h3>Backend Developer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cloud &</div>
              <div className="landing-h2-2">Distributed</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Systems</div>
              <div className="landing-h2-info-1">Enthusiast</div>
            </h2>
            <p className="landing-location">📍 Pune, Maharashtra, India</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
