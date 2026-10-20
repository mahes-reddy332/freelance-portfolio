import React from "react";
import "./Services.css";
import { freelanceServices } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Services(props) {
  const { theme } = props;

  const handleInquire = (serviceTitle) => {
    const contactSection = document.getElementById("contact");
    const serviceSelect = document.getElementById("inquiry-service");
    if (serviceSelect) {
      serviceSelect.value = serviceTitle;
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Section Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-eyebrow-wrap">
            <span className="section-index-badge">01 / 06</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Freelance Services
            </span>
          </div>
          <div className="section-header-split">
            <h2 className="section-heading" style={{ color: theme.text }}>
              Specialized AI &amp; Engineering Services
            </h2>
            <p className="section-subheading" style={{ color: theme.secondaryText }}>
              I partner with founders, engineering teams, and enterprises to design, prototype, and ship high-impact AI capabilities with production reliability.
            </p>
          </div>
        </Fade>

        {/* Services Card Grid */}
        <div className="services-grid">
          {freelanceServices.map((service, index) => (
            <Fade bottom duration={900} delay={index * 100} distance="25px" key={service.id}>
              <div
                className="service-card"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                  borderColor: theme.border,
                  boxShadow:
                    theme.name === "dark"
                      ? "0 20px 40px -15px rgba(0, 0, 0, 0.4)"
                      : "0 20px 40px -15px rgba(15, 23, 42, 0.05)",
                }}
              >
                {/* Card Top */}
                <div className="service-card-top">
                  <span
                    className="service-icon-box"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.primary,
                    }}
                  >
                    <i className={service.icon}></i>
                  </span>
                  <span className="service-num-tag" style={{ color: theme.secondaryText }}>
                    {service.number}
                  </span>
                </div>

                {/* Card Header */}
                <h3 className="service-title" style={{ color: theme.text }}>
                  {service.title}
                </h3>
                <p className="service-tagline" style={{ color: theme.primary }}>
                  {service.tagline}
                </p>
                <p className="service-desc" style={{ color: theme.secondaryText }}>
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div
                  className="service-deliverables"
                  style={{
                    borderTopColor: theme.border,
                    borderBottomColor: theme.border,
                  }}
                >
                  <div className="deliverables-title" style={{ color: theme.text }}>
                    Key Deliverables:
                  </div>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="deliverable-item">
                        <i className="fa-solid fa-check deliverable-check" style={{ color: theme.emerald }}></i>
                        <span style={{ color: theme.secondaryText }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="service-tech-tags">
                  {service.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="service-tech-pill"
                      style={{
                        backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 23, 42, 0.04)",
                        color: theme.text,
                        borderColor: theme.border,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="service-card-footer">
                  <button
                    type="button"
                    onClick={() => handleInquire(service.title)}
                    className="service-inquire-btn"
                    style={{
                      color: theme.primary,
                      borderColor: theme.borderStrong || theme.border,
                    }}
                  >
                    <span>Inquire About This Service</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
