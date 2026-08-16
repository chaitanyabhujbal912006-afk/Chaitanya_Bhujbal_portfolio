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
    githubLink: "https://github.com/chaitanyabhujbal912006-afk",
    liveLink: "",
    lang: "Python",
    color: "teal",
  },
  {
    title: "OmniKavach",
    category: "Multi-Agent ICU Risk Monitoring",
    tools: "Python, AI Agents, MIMIC-III, RAG, ICU Data Processing, React",
    description:
      "Designed a multi-agent AI system that processes complex ICU data streams to generate early, evidence-backed risk insights for life-threatening conditions like sepsis and multi-organ failure.",
    githubLink: "https://github.com/chaitanyabhujbal912006-afk/Omnikavach",
    liveLink: "",
    lang: "Python",
    color: "blue",
  },
  {
    title: "EdiPro",
    category: "HIPAA-Compliant Healthcare EDI Parser",
    tools: "Python, EDI X12, Healthcare Standards, Validator, Dashboard",
    description:
      "Enterprise-grade parser, validator, and dashboard for Healthcare EDI transactions — transforming complex clinical and financial data for downstream operations.",
    githubLink: "https://github.com/chaitanyabhujbal912006-afk/EDI_Healthcare",
    liveLink: "",
    lang: "Python",
    color: "purple",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 40;

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Slides Track */}
          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
                          <div className="tools-pills-row">
                            {project.tools.split(", ").map((tool, tIdx) => (
                              <span key={tIdx} className="tool-pill">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="carousel-links">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                            className="carousel-link-btn"
                          >
                            <FiGithub /> GitHub
                          </a>
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                              className="carousel-link-btn carousel-link-btn-secondary"
                            >
                              <FiExternalLink /> Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        alt={project.title}
                        lang={project.lang}
                        color={project.color}
                        link={project.githubLink}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls Bar: Arrows + Dots */}
          <div className="carousel-controls-bar">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdArrowBack />
            </button>
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
