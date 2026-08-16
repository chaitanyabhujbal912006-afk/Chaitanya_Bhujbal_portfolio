import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const clickHandler = () => handleClick(container);
          container.addEventListener("click", clickHandler);
          // Keep reference to clean up
          (container as any)._clickHandler = clickHandler;
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container && (container as any)._clickHandler) {
          container.removeEventListener("click", (container as any)._clickHandler);
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in what-box-in--triple">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* Panel 1 — Backend & Cloud */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND & CLOUD</h3>
              <h4>Distributed Systems Built for Scale</h4>
              <p>
                Engineering robust backend architectures with Node.js, Express, and Python.
                Leveraging AWS, Docker, and Kubernetes to build cloud-native, highly available
                services with microservices patterns and advanced system design.
              </p>
              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Node.js / Express</div>
                <div className="what-tags">AWS</div>
                <div className="what-tags">Docker / Kubernetes</div>
                <div className="what-tags">PostgreSQL / MongoDB</div>
                <div className="what-tags">Redis</div>
                <div className="what-tags">GraphQL</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">System Design</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Panel 2 — Healthcare AI & Applied AI */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>HEALTHCARE AI & APPLIED AI</h3>
              <h4>Intelligent Systems for Real-World Impact</h4>
              <p>
                Building multi-agent AI systems (OmniKavach), HIPAA-compliant EDI parsers,
                RAG knowledge bases (Nexa), and CVE scanners (ReachGuard) that solve real
                clinical and security problems at scale.
              </p>
              <h5>Expertise</h5>
              <div className="what-content-flex">
                <div className="what-tags">Multi-Agent AI</div>
                <div className="what-tags">RAG Systems</div>
                <div className="what-tags">Healthcare Data (EDI)</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">LLMs & NLP</div>
                <div className="what-tags">CVE / Security</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Panel 3 — Design & Creative */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DESIGN & CREATIVE</h3>
              <h4>Where Code Meets Canvas</h4>
              <p>
                Design Head at the <strong>AWS Student Builder Club — DESPU</strong> (Core Team).
                Leads visual identity for college events, social media, and community branding.
                Fine-detail sculptor and canvas painter with an eye for composition and precision.
              </p>
              <h5>Creative Skills</h5>
              <div className="what-content-flex">
                <div className="what-tags">Figma</div>
                <div className="what-tags">Brand Identity</div>
                <div className="what-tags">Event Design</div>
                <div className="what-tags">Social Media Creatives</div>
                <div className="what-tags">Canvas Painting</div>
                <div className="what-tags">UI/UX</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
