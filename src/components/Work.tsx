import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Nexa",
    category: "Zero-Cost RAG Knowledge Base",
    tools: "Python, RAG, PDF/Excel/Email Ingestion, NLP, Citation Engine",
    description:
      "Built a Retrieval-Augmented Generation system that ingests PDFs, Excel sheets, and emails into a single searchable knowledge base with zero recurring infrastructure cost. Natural-language Q&A with citation-backed answers.",
    image: "/images/omnikavach.png",
    link: "https://github.com/chaitanyabhujbal912006-afk",
    lang: "Python",
  },
  {
    title: "OmniKavach",
    category: "Multi-Agent ICU Risk Monitoring",
    tools: "Python, AI Agents, MIMIC-III, RAG, ICU Data Processing, React",
    description:
      "Designed a multi-agent AI system that processes complex ICU data streams to generate early, evidence-backed risk insights for life-threatening conditions like sepsis and multi-organ failure.",
    image: "/images/omnikavach.png",
    link: "https://github.com/chaitanyabhujbal912006-afk/Omnikavach",
    lang: "Python",
  },
  {
    title: "EdiPro",
    category: "HIPAA-Compliant Healthcare EDI Parser",
    tools: "Python, EDI X12, Healthcare Standards, Validator, Dashboard",
    description:
      "Enterprise-grade parser, validator, and dashboard for Healthcare EDI transactions — transforming complex clinical and financial data for downstream operations.",
    image: "/images/edi.png",
    link: "https://github.com/chaitanyabhujbal912006-afk/EDI_Healthcare",
    lang: "Python",
  },
  {
    title: "ReachGuard",
    category: "Local-First CVE Impact Scanner",
    tools: "CLI, HTML, Static Analysis, CVE Database, Reachability Analysis",
    description:
      "Zero-cost, fully local CLI that flags not just which CVEs exist, but whether the vulnerable function is actually reachable in the code — cutting alert noise by 60–80%.",
    image: "/images/hostel_php.png",
    link: "https://github.com/chaitanyabhujbal912006-afk",
    lang: "CLI / HTML",
  },
  {
    title: "Snapstudio AI",
    category: "AI-Powered Photo Editing Platform",
    tools: "Next.js, Python, Vercel, Kaggle GPU, AI Models",
    description:
      "Full-stack photo editor with a Next.js frontend (deployed on Vercel) and GPU-backed inference service (Kaggle), supporting auto-enhance, background swap, art-style transfer, and object removal.",
    image: "/images/hostel_py.png",
    link: "https://github.com/chaitanyabhujbal912006-afk",
    lang: "Next.js · Python",
  },
  {
    title: "NiveshLoop",
    category: "Indian Stock Market Learning Platform",
    tools: "TypeScript, React, Finance APIs, Ad-free",
    description:
      "Ad-free platform teaching Indian stock-market investing through an integrated read-and-practice loop. Covers fundamental analysis, market mechanics, and hands-on simulations.",
    image: "/images/hostel_py.png",
    link: "https://github.com/chaitanyabhujbal912006-afk",
    lang: "TypeScript",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <div className="carousel-title-row">
                          <h4>{project.title}</h4>
                          <span className="carousel-lang-badge">{project.lang}</span>
                        </div>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                            className="carousel-link-btn"
                          >
                            <FiGithub /> View on GitHub
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                            className="carousel-link-btn carousel-link-btn-secondary"
                          >
                            <FiExternalLink /> Live
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
