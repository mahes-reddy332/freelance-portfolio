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
        borderTopColor: theme.border || "rgba(0, 28, 85, 0.12)",
        backgroundColor: theme.name === "dark" ? "#070a12" : (theme.surfaceHover || "#EDF9FE"),
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
                  borderColor: theme.border || "rgba(0, 28, 85, 0.12)",
                }}
              >
                MR
              </span>
              <span className="footer-brand-title" style={{ color: theme.text }}>
                {greeting.name || "Mahesh Reddy"}
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
              <Link to="/home" className="footer-link" style={{ color: theme.secondaryText }}>
                Home
              </Link>
              <Link to="/projects" className="footer-link" style={{ color: theme.secondaryText }}>
                Projects
              </Link>
              <Link to="/experience" className="footer-link" style={{ color: theme.secondaryText }}>
                Experience
              </Link>
              <Link to="/education" className="footer-link" style={{ color: theme.secondaryText }}>
                Education
              </Link>
              <Link to="/contact" className="footer-link" style={{ color: theme.secondaryText }}>
                Hire Me
              </Link>
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
                  borderColor: theme.border || "rgba(0, 28, 85, 0.12)",
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
                  borderColor: theme.border || "rgba(0, 28, 85, 0.12)",
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
                  borderColor: theme.border || "rgba(0, 28, 85, 0.12)",
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
          style={{ borderTopColor: theme.border || "rgba(0, 28, 85, 0.12)" }}
        >
          <div className="footer-copy-text" style={{ color: theme.secondaryText }}>
            &copy; {new Date().getFullYear()} {greeting.name || "Mahesh Reddy"}. Designed &amp; engineered for modern client delivery.
            <div style={{ marginTop: "4px", fontSize: "0.8rem" }}>
              Made with <span role="img" aria-label="love">❤️</span> by {greeting.name || "Mahesh Reddy"}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-btn"
            style={{
              backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
              borderColor: theme.border || "rgba(0, 28, 85, 0.12)",
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
