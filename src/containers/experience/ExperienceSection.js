import React from "react";
import "./ExperienceSection.css";
import { Fade } from "react-reveal";
import { degrees, experience, certifications } from "../../portfolio";

export default function ExperienceSection(props) {
  const { theme } = props;

  return (
    <section className="exp-credentials-section" id="experience">
      <div className="exp-container">
        {/* Section Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-eyebrow-wrap">
            <span className="section-index-badge">05 / 06</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Experience &amp; Credentials
            </span>
          </div>

          <div className="section-header-split">
            <h2 className="section-heading" style={{ color: theme.text }}>
              Academic Foundation &amp; Hands-on Research
            </h2>
            <p className="section-subheading" style={{ color: theme.secondaryText }}>
              Dual-degree engineering discipline coupled with research-grade computer vision and technical club leadership.
            </p>
          </div>
        </Fade>

        {/* 2-Column Layout: Dual Degree Education & Industry/Research Experience */}
        <div className="exp-dual-grid">
          {/* Left Column: Research & Leadership Experience */}
          <div className="exp-column">
            <Fade bottom duration={900} distance="25px">
              <div className="column-title-wrap">
                <span
                  className="column-icon-box"
                  style={{
                    backgroundColor: theme.highlight,
                    color: theme.primary,
                  }}
                >
                  <i className="fa-solid fa-flask"></i>
                </span>
                <h3 className="column-title" style={{ color: theme.text }}>
                  Research &amp; Technical Leadership
                </h3>
              </div>
            </Fade>

            <div className="timeline-cards-list">
              {experience.sections.flatMap((sec) => sec.experiences).map((exp, idx) => (
                <Fade bottom duration={900} delay={idx * 100} distance="25px" key={idx}>
                  <div
                    className="timeline-card"
                    style={{
                      backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                      borderColor: theme.border,
                      boxShadow:
                        theme.name === "dark"
                          ? "0 15px 35px -10px rgba(0, 0, 0, 0.35)"
                          : "0 15px 35px -10px rgba(15, 23, 42, 0.05)",
                    }}
                  >
                    <div className="timeline-card-header">
                      <div>
                        <span
                          className="timeline-duration"
                          style={{
                            color: theme.primary,
                            backgroundColor: theme.name === "dark" ? "rgba(99, 102, 241, 0.12)" : "rgba(79, 70, 229, 0.08)",
                          }}
                        >
                          {exp.duration}
                        </span>
                        <h4 className="timeline-role" style={{ color: theme.text }}>
                          {exp.title}
                        </h4>
                        <div className="timeline-org" style={{ color: theme.secondaryText }}>
                          <i className="fa-solid fa-building-columns" style={{ marginRight: "6px" }}></i>
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <p className="timeline-desc" style={{ color: theme.secondaryText }}>
                      {exp.description}
                    </p>

                    <div className="timeline-loc" style={{ color: theme.secondaryText }}>
                      <i className="fa-solid fa-location-dot" style={{ marginRight: "5px" }}></i>
                      {exp.location}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          {/* Right Column: Dual Degrees & Certifications */}
          <div className="exp-column">
            <Fade bottom duration={900} delay={150} distance="25px">
              <div className="column-title-wrap">
                <span
                  className="column-icon-box"
                  style={{
                    backgroundColor: theme.highlight,
                    color: theme.primary,
                  }}
                >
                  <i className="fa-solid fa-graduation-cap"></i>
                </span>
                <h3 className="column-title" style={{ color: theme.text }}>
                  Dual-Degree Academic Foundation
                </h3>
              </div>
            </Fade>

            <div className="timeline-cards-list">
              {degrees.degrees.map((degree, dIdx) => (
                <Fade bottom duration={900} delay={dIdx * 120} distance="25px" key={dIdx}>
                  <div
                    className="timeline-card"
                    style={{
                      backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                      borderColor: theme.border,
                      boxShadow:
                        theme.name === "dark"
                          ? "0 15px 35px -10px rgba(0, 0, 0, 0.35)"
                          : "0 15px 35px -10px rgba(15, 23, 42, 0.05)",
                    }}
                  >
                    <div className="timeline-card-header">
                      <div>
                        <span
                          className="timeline-duration"
                          style={{
                            color: theme.primary,
                            backgroundColor: theme.name === "dark" ? "rgba(99, 102, 241, 0.12)" : "rgba(79, 70, 229, 0.08)",
                          }}
                        >
                          {degree.duration}
                        </span>
                        <h4 className="timeline-role" style={{ color: theme.text }}>
                          {degree.title}
                        </h4>
                        <div className="timeline-org" style={{ color: theme.secondaryText }}>
                          {degree.subtitle}
                        </div>
                      </div>
                    </div>

                    <ul className="degree-bullet-list">
                      {degree.descriptions.map((desc, bIdx) => (
                        <li key={bIdx} style={{ color: theme.secondaryText }}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fade>
              ))}

              {/* Certifications Box */}
              <Fade bottom duration={900} delay={300} distance="25px">
                <div
                  className="certifications-summary-card"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                    borderColor: theme.border,
                  }}
                >
                  <div className="cert-card-title" style={{ color: theme.text }}>
                    <i className="fa-solid fa-award" style={{ color: theme.primary, marginRight: "8px" }}></i>
                    Verified Certifications &amp; Accreditations
                  </div>
                  <div className="certs-chips-wrap">
                    {certifications.certifications.map((c, cIdx) => (
                      <a
                        key={cIdx}
                        href={c.certificate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-chip"
                        style={{
                          backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.03)",
                          borderColor: theme.border,
                          color: theme.text,
                        }}
                      >
                        <i className="fa-solid fa-certificate" style={{ color: theme.primary }}></i>
                        <span>{c.title} {c.subtitle}</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "10px", opacity: 0.6 }}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
