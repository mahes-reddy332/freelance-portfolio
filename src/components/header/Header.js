import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

function Header(props) {
  const { theme, toggleTheme, themeMode, location } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/" || location.pathname === "/home";

  const handleNavClick = (anchorId) => {
    setMobileMenuOpen(false);
    if (isHome) {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <SeoHeader />
      <header className={`modern-dock-wrapper ${isScrolled ? "dock-scrolled" : ""}`}>
        <nav
          className="navbar-dock"
          style={{
            backgroundColor: theme.name === "dark" ? "rgba(10, 14, 23, 0.88)" : "rgba(255, 255, 255, 0.92)",
            borderColor: theme.border,
            boxShadow:
              theme.name === "dark"
                ? "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)"
                : "0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Brand Mark */}
          <Link
            to="/home"
            className="dock-brand"
            onClick={() => {
              setMobileMenuOpen(false);
              if (isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div
              className="dock-brand-avatar"
              style={{
                backgroundColor: theme.highlight,
                color: theme.primary,
                border: `1px solid ${theme.borderStrong || theme.border}`,
              }}
            >
              MR
            </div>
            <div className="dock-brand-text">
              <span className="dock-brand-name" style={{ color: theme.text }}>
                {greeting.logo_name || "Mahesh Reddy"}
              </span>
              <span className="dock-brand-role" style={{ color: theme.secondaryText }}>
                AI &amp; GenAI Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="dock-nav-links">
            {isHome ? (
              <>
                <a
                  href="#services"
                  className="dock-nav-link"
                  style={{ color: theme.secondaryText }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("services");
                  }}
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="dock-nav-link"
                  style={{ color: theme.secondaryText }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("projects");
                  }}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="dock-nav-link"
                  style={{ color: theme.secondaryText }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("skills");
                  }}
                >
                  Tech Stack
                </a>
                <a
                  href="#process"
                  className="dock-nav-link"
                  style={{ color: theme.secondaryText }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("process");
                  }}
                >
                  Process
                </a>
                <a
                  href="#experience"
                  className="dock-nav-link"
                  style={{ color: theme.secondaryText }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("experience");
                  }}
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="dock-nav-link"
                  style={{ color: theme.secondaryText }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/home#services" className="dock-nav-link" style={{ color: theme.secondaryText }}>
                  Services
                </Link>
                <Link to="/projects" className="dock-nav-link" style={{ color: theme.secondaryText }}>
                  Projects
                </Link>
                <Link to="/home#skills" className="dock-nav-link" style={{ color: theme.secondaryText }}>
                  Tech Stack
                </Link>
                <Link to="/experience" className="dock-nav-link" style={{ color: theme.secondaryText }}>
                  Experience
                </Link>
                <Link to="/education" className="dock-nav-link" style={{ color: theme.secondaryText }}>
                  Education
                </Link>
                <Link to="/contact" className="dock-nav-link" style={{ color: theme.secondaryText }}>
                  Contact
                </Link>
              </>
            )}
            <Link to="/resume" className="dock-nav-link" style={{ color: theme.secondaryText }}>
              Resume
            </Link>
          </div>

          {/* Right Action Utilities */}
          <div className="dock-actions">
            {/* Availability Pill */}
            <div
              className="dock-availability"
              style={{
                backgroundColor: theme.name === "dark" ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.1)",
                borderColor: theme.name === "dark" ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.25)",
              }}
            >
              <span className="pulse-dot"></span>
              <span className="availability-text">Available</span>
            </div>

            {/* Theme Toggle Button */}
            {toggleTheme && (
              <button
                type="button"
                className="dock-theme-toggle"
                onClick={toggleTheme}
                title={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
                aria-label="Toggle color theme"
                style={{
                  color: theme.text,
                  borderColor: theme.border,
                  backgroundColor: theme.surfaceSoft || "transparent",
                }}
              >
                {themeMode === "dark" ? (
                  <i className="fa-solid fa-sun" style={{ color: "#facc15" }}></i>
                ) : (
                  <i className="fa-solid fa-moon" style={{ color: "#6366f1" }}></i>
                )}
              </button>
            )}

            {/* CTA Pill Button */}
            <a
              href="#contact"
              className="dock-cta-btn"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick("contact");
                }
              }}
              style={{
                backgroundColor: theme.primary,
                color: theme.primaryForeground || "#ffffff",
                boxShadow: `0 4px 14px ${theme.primaryGlow || "rgba(99, 102, 241, 0.3)"}`,
              }}
            >
              <span>Hire Me</span>
              <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="dock-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              style={{ color: theme.text }}
            >
              <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="dock-mobile-menu"
            style={{
              backgroundColor: theme.name === "dark" ? "#0f1523" : "#ffffff",
              borderColor: theme.border,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="mobile-menu-links">
              {isHome ? (
                <>
                  <a
                    href="#services"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("services");
                    }}
                  >
                    Services
                  </a>
                  <a
                    href="#projects"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("projects");
                    }}
                  >
                    Projects &amp; Case Studies
                  </a>
                  <a
                    href="#skills"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("skills");
                    }}
                  >
                    Tech Stack
                  </a>
                  <a
                    href="#process"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("process");
                    }}
                  >
                    Process
                  </a>
                  <a
                    href="#experience"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("experience");
                    }}
                  >
                    Experience
                  </a>
                  <a
                    href="#contact"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("contact");
                    }}
                  >
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to="/home"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/projects"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/experience"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Experience
                  </Link>
                  <Link
                    to="/education"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Education
                  </Link>
                  <Link
                    to="/contact"
                    className="mobile-menu-link"
                    style={{ color: theme.text }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
              <Link
                to="/resume"
                className="mobile-menu-link"
                style={{ color: theme.text }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </Link>
            </div>
            <div className="mobile-menu-footer">
              <a
                href="#contact"
                className="mobile-menu-cta"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (isHome) {
                    e.preventDefault();
                    handleNavClick("contact");
                  }
                }}
                style={{
                  backgroundColor: theme.primary,
                  color: theme.primaryForeground || "#ffffff",
                }}
              >
                Hire Mahesh For Your Project
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default withRouter(Header);
