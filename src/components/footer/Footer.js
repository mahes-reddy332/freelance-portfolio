import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  const { theme } = props;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="modern-footer"
      style={{
        borderTopColor: theme.border,
        backgroundColor: theme.name === "dark" ? "#070a12" : "#f8fafc",
      }}
    >
      <div className="footer-inner-container">
        {/* Top Footer Split */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span
                className="footer-brand-logo"
                style={{
                  backgroundColor: theme.highlight,
                  color: theme.primary,
                  borderColor: theme.border,
                }}
              >
                MR
              </span>
              <span className="footer-brand-title" style={{ color: theme.text }}>
                {greeting.title}
              </span>
            </div>
            <p className="footer-tagline" style={{ color: theme.secondaryText }}>
              AI/ML Engineer &amp; Generative AI Developer building production-grade autonomous agents, enterprise RAG, and scalable machine learning workflows.
            </p>
            <div
              className="footer-status-pill"
              style={{
                backgroundColor: theme.name === "dark" ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.08)",
                borderColor: "rgba(16, 185, 129, 0.25)",
              }}
            >
              <span className="pulse-dot"></span>
              <span style={{ color: theme.emerald, fontWeight: 600, fontSize: "0.75rem" }}>
                Available for Freelance Contracts
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title" style={{ color: theme.text }}>
              Navigation
            </h4>
            <div className="footer-nav-list">
              <a href="#services" className="footer-link" style={{ color: theme.secondaryText }}>
                Freelance Services
              </a>
              <a href="#projects" className="footer-link" style={{ color: theme.secondaryText }}>
                Case Studies
              </a>
              <a href="#skills" className="footer-link" style={{ color: theme.secondaryText }}>
                Technical Arsenal
              </a>
              <a href="#process" className="footer-link" style={{ color: theme.secondaryText }}>
                Delivery Process
              </a>
              <a href="#experience" className="footer-link" style={{ color: theme.secondaryText }}>
                Experience &amp; Education
              </a>
              <Link to="/resume" className="footer-link" style={{ color: theme.secondaryText }}>
                Resume &amp; CV
              </Link>
            </div>
          </div>

          {/* Connect & Social Channels */}
          <div className="footer-links-col">
            <h4 className="footer-col-title" style={{ color: theme.text }}>
              Direct Channels
            </h4>
            <div className="footer-social-list">
              <a
                href={greeting.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)",
                  borderColor: theme.border,
                  color: theme.text,
                }}
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
                <i className="fa-solid fa-arrow-up-right-from-square ext-icon"></i>
              </a>

              <a
                href={greeting.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)",
                  borderColor: theme.border,
                  color: theme.text,
                }}
              >
                <i className="fa-brands fa-linkedin-in" style={{ color: "#0077B5" }}></i>
                <span>LinkedIn</span>
                <i className="fa-solid fa-arrow-up-right-from-square ext-icon"></i>
              </a>

              <a
                href={`mailto:${greeting.email}`}
                className="footer-social-pill"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)",
                  borderColor: theme.border,
                  color: theme.text,
                }}
              >
                <i className="fa-solid fa-envelope" style={{ color: theme.primary }}></i>
                <span>{greeting.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Back to Top */}
        <div
          className="footer-bottom-row"
          style={{ borderTopColor: theme.border }}
        >
          <div className="footer-copy-text" style={{ color: theme.secondaryText }}>
            &copy; {new Date().getFullYear()} {greeting.title}. Designed &amp; engineered for modern client delivery.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-btn"
            style={{
              backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
              borderColor: theme.border,
              color: theme.text,
            }}
          >
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
