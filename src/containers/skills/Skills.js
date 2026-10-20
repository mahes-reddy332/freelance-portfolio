import React from "react";
import "./Skills.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const { theme } = props;

  return (
    <section className="skills-arsenal-section" id="skills">
      <div className="skills-container">
        {/* Section Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-eyebrow-wrap">
            <span className="section-index-badge">02 / 04</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Tech Stack
            </span>
          </div>

          <div className="section-header-split">
            <h2 className="section-heading" style={{ color: theme.text }}>
              Tech Stack &amp; Expertise
            </h2>
            <p className="section-subheading" style={{ color: theme.secondaryText }}>
              Frameworks, libraries, and tools I use to build AI-powered applications.
            </p>
          </div>
        </Fade>

        {/* Tech Categories Grid */}
        <div className="tech-stack-grid">
          {techStack.map((group, idx) => (
            <Fade bottom duration={800} delay={idx * 60} distance="20px" key={group.id}>
              <div
                className={`tech-stack-panel ${idx === 4 ? "tech-stack-panel-wide" : ""}`}
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                  borderColor: theme.border,
                  boxShadow:
                    theme.name === "dark"
                      ? "0 10px 30px -10px rgba(0, 0, 0, 0.35)"
                      : "0 10px 30px -10px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div className="tech-panel-header">
                  <span
                    className="tech-panel-icon-box"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.primary,
                    }}
                  >
                    <i className={group.icon}></i>
                  </span>
                  <div className="tech-panel-title-wrap">
                    <h3 className="tech-panel-title" style={{ color: theme.text }}>
                      {group.category}
                    </h3>
                    <p className="tech-panel-desc" style={{ color: theme.secondaryText }}>
                      {group.description}
                    </p>
                  </div>
                </div>

                <div
                  className="tech-panel-divider"
                  style={{ backgroundColor: theme.border || "rgba(0, 28, 85, 0.08)" }}
                ></div>

                <div className="tech-pills-wrap">
                  {group.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="tech-stack-pill"
                      style={{
                        backgroundColor:
                          theme.name === "dark"
                            ? "rgba(255, 255, 255, 0.04)"
                            : "rgba(15, 23, 42, 0.03)",
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
