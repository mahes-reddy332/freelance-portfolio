import React from "react";
import "./Process.css";
import { deliveryProcess } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Process(props) {
  const { theme } = props;

  return (
    <section className="process-section" id="process">
      <div className="process-container">
        {/* Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-eyebrow-wrap">
            <span className="section-index-badge">03 / 04</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Client Delivery Process
            </span>
          </div>

          <div className="section-header-split">
            <h2 className="section-heading" style={{ color: theme.text }}>
              How We Work Together
            </h2>
            <p className="section-subheading" style={{ color: theme.secondaryText }}>
              A disciplined, milestone-driven framework that minimizes risk, delivers rapid proof-of-concept validation, and builds production-hardened AI software.
            </p>
          </div>
        </Fade>

        {/* Process Steps Grid */}
        <div className="process-steps-grid">
          {deliveryProcess.map((step, idx) => (
            <Fade bottom duration={900} delay={idx * 100} distance="25px" key={idx}>
              <div
                className="process-card"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                  borderColor: theme.border,
                  boxShadow:
                    theme.name === "dark"
                      ? "0 20px 40px -15px rgba(0, 0, 0, 0.4)"
                      : "0 20px 40px -15px rgba(15, 23, 42, 0.05)",
                }}
              >
                <div className="process-card-top">
                  <span
                    className="process-step-pill"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.primary,
                      border: `1px solid ${theme.borderStrong || theme.border}`,
                    }}
                  >
                    Phase {step.step}
                  </span>
                  <span className="process-timeline-tag" style={{ color: theme.secondaryText }}>
                    <i className="fa-regular fa-clock" style={{ marginRight: "4px" }}></i>
                    {step.timeline}
                  </span>
                </div>

                <h3 className="process-step-title" style={{ color: theme.text }}>
                  {step.name}
                </h3>

                <p className="process-step-summary" style={{ color: theme.secondaryText }}>
                  {step.summary}
                </p>

                <div className="process-status-indicator">
                  <div className="progress-track" style={{ backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)" }}>
                    <div
                      className="progress-fill"
                      style={{
                        width: `${(idx + 1) * 25}%`,
                        backgroundColor: theme.primary,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
