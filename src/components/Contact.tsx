import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Reach Out</h4>
            <p>
              <a
                href="mailto:chaitanyabhujbal809@gmail.com"
                className="contact-social"
                data-cursor="disable"
              >
                chaitanyabhujbal809@gmail.com
              </a>
            </p>
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/chaitanya-bhujbal-aba168332/"
                className="contact-social"
                data-cursor="disable"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn — Chaitanya Bhujbal
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech CSE · DES Pune University · CGPA 8.1 · 2024–2028
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/chaitanyabhujbal912006-afk"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-bhujbal-aba168332/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/chaitanya9aa/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <div className="contact-open-source">
              <span className="oss-badge">🦈 Pull Shark</span>
              <span className="oss-badge">13 Public Repos</span>
            </div>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Chaitanya Bhujbal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
