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
            <span className="section-index-badge">01 / 04</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Services
            </span>
          </div>
          <div className="section-header-split">
            <h2 className="section-heading" style={{ color: theme.text }}>
              AI Engineering Services
            </h2>
            <p className="section-subheading" style={{ color: theme.secondaryText }}>
              AI solutions I can design, develop, and integrate for your business.
            </p>
          </div>
        </Fade>

        {/* Services Card Grid */}
        <div className="services-grid">
          {freelanceServices.map((service, index) => (
            <Fade bottom duration={800} delay={index * 80} distance="20px" key={service.id}>
              <div
                className="service-card"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                  borderColor: theme.border,
                  boxShadow:
                    theme.name === "dark"
                      ? "0 15px 35px -10px rgba(0, 0, 0, 0.45)"
                      : "0 15px 35px -10px rgba(15, 23, 42, 0.05)",
                }}
              >
                <div className="service-card-body">
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

                  <h3 className="service-title" style={{ color: theme.text }}>
                    {service.title}
                  </h3>

                  <p className="service-desc" style={{ color: theme.secondaryText }}>
                    {service.description}
                  </p>
                </div>

                <div className="service-card-footer">
                  <button
                    type="button"
                    onClick={() => handleInquire(service.title)}
                    className="service-cta-btn"
                    style={{
                      color: theme.primary,
                      borderColor: theme.borderStrong || theme.border,
                    }}
                  >
                    <span>Discuss a Project</span>
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
