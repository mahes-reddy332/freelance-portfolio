import React from "react";
import { Link } from "react-router-dom";
import "./Greeting.css";
import { greeting, metrics } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const { theme } = props;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow-bg" aria-hidden="true"></div>

      <div className="hero-container">
        {/* Top Eyebrow Badge */}
        <Fade top duration={800} distance="15px">
          <div
            className="hero-status-badge"
            style={{
              backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)",
              borderColor: theme.border,
            }}
          >
            <span className="status-live-dot"></span>
            <span className="status-text" style={{ color: theme.text }}>
              Available for Freelance &amp; AI Automation Projects
            </span>
            <span className="status-divider" style={{ color: theme.secondaryText }}>
              —
            </span>
            <span className="status-sub" style={{ color: theme.secondaryText }}>
              Remote / Global
            </span>
          </div>
        </Fade>

        {/* Hero Grid */}
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <Fade bottom duration={900} distance="25px">
              <h1 className="hero-title" style={{ color: theme.text }}>
                I build intelligent AI systems{" "}
                <span className="hero-title-gradient">
                  that deliver real results.
                </span>
              </h1>
            </Fade>

            <Fade bottom duration={1000} delay={100} distance="25px">
              <p className="hero-description" style={{ color: theme.secondaryText }}>
                {greeting.subTitle}
              </p>
            </Fade>

            <Fade bottom duration={1100} delay={200} distance="25px">
              <div className="hero-cta-group">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                  className="hero-btn-primary"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.primaryForeground || "#ffffff",
                    boxShadow: `0 10px 25px -5px ${theme.primaryGlow || "rgba(99, 102, 241, 0.4)"}`,
                  }}
                >
                  <span>Explore Case Studies</span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="hero-btn-secondary"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
                    borderColor: theme.borderStrong || theme.border,
                    color: theme.text,
                  }}
                >
                  <i className="fa-solid fa-calendar-check" style={{ color: theme.primary }}></i>
                  <span>Hire Me / Inquire</span>
                </a>

                <Link
                  to="/resume"
                  className="hero-btn-tertiary"
                  style={{ color: theme.secondaryText }}
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  <span>Resume &amp; Credentials</span>
                </Link>
              </div>
            </Fade>
          </div>

          {/* Right Hero Interactive Terminal / AI Preview Card */}
          <div className="hero-visual">
            <Fade right duration={1000} delay={150} distance="30px">
              <div
                className="ai-terminal-card"
                style={{
                  backgroundColor: theme.name === "dark" ? "#0d131f" : "#ffffff",
                  borderColor: theme.border,
                  boxShadow:
                    theme.name === "dark"
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(99, 102, 241, 0.2)"
                      : "0 25px 50px -12px rgba(15, 23, 42, 0.1), 0 0 1px 1px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Terminal Header */}
                <div
                  className="terminal-header"
                  style={{
                    backgroundColor: theme.name === "dark" ? "#090d16" : "#f1f5f9",
                    borderColor: theme.border,
                  }}
                >
                  <div className="terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="terminal-title" style={{ color: theme.secondaryText }}>
                    <i className="fa-solid fa-network-wired" style={{ marginRight: "6px" }}></i>
                    langgraph_agent_runtime.py
                  </div>
                  <div className="terminal-badge" style={{ color: theme.emerald }}>
                    ● LIVE
                  </div>
                </div>

                {/* Terminal Code Body */}
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="t-prompt">&gt;</span>
                    <span className="t-cmd">
                      Workflow.execute(goal=&quot;Autonomous RAG &amp; Fact-Checking&quot;)
                    </span>
                  </div>

                  <div className="terminal-step step-1">
                    <span className="t-step-num">[01]</span>
                    <span className="t-step-name">Planner Agent:</span>
                    <span className="t-step-desc">Decomposed query into parallel DAG nodes</span>
                  </div>

                  <div className="terminal-step step-2">
                    <span className="t-step-num">[02]</span>
                    <span className="t-step-name">ChromaDB Vector:</span>
                    <span className="t-step-desc">Dense + sparse hybrid search · Top 8 retrieved</span>
                  </div>

                  <div className="terminal-step step-3">
                    <span className="t-step-num">[03]</span>
                    <span className="t-step-name">FastMCP Server:</span>
                    <span className="t-step-desc">Tool &apos;verify_citations&apos; returned 0 discrepancies</span>
                  </div>

                  <div className="terminal-step step-4">
                    <span className="t-step-num">[04]</span>
                    <span className="t-step-name">Critic &amp; Guardrail:</span>
                    <span className="t-step-badge">100% Verified</span>
                    <span className="t-step-desc">Hallucination check passed</span>
                  </div>

                  <div className="terminal-output">
                    <span className="t-check">✓</span>
                    <span className="t-success">
                      Pipeline dispatched via FastAPI SSE stream in 184ms
                    </span>
                  </div>
                </div>

                {/* Terminal Footer Info */}
                <div
                  className="terminal-footer"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(99, 102, 241, 0.05)" : "rgba(79, 70, 229, 0.04)",
                    borderColor: theme.border,
                  }}
                >
                  <div className="terminal-tag">
                    <i className="fa-brands fa-python" style={{ color: "#38bdf8" }}></i> Python 3.12
                  </div>
                  <div className="terminal-tag">
                    <i className="fa-solid fa-bolt" style={{ color: "#facc15" }}></i> LangGraph ReAct
                  </div>
                  <div className="terminal-tag">
                    <i className="fa-solid fa-server" style={{ color: "#34d399" }}></i> FastMCP Remote
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/* Highlights / Metrics Grid */}
        <Fade bottom duration={1000} delay={250} distance="30px">
          <div
            className="hero-metrics-bar"
            style={{
              borderColor: theme.border,
              backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.6)" : "#ffffff",
              boxShadow:
                theme.name === "dark"
                  ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                  : "0 10px 30px -10px rgba(15, 23, 42, 0.06)",
            }}
          >
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="metric-card"
                style={{
                  borderRightColor: theme.border,
                }}
              >
                <div
                  className="metric-icon"
                  style={{
                    backgroundColor: theme.highlight,
                    color: theme.primary,
                  }}
                >
                  <i className={metric.icon}></i>
                </div>
                <div className="metric-info">
                  <div className="metric-value-wrap">
                    <span className="metric-value" style={{ color: theme.text }}>
                      {metric.value}
                    </span>
                  </div>
                  <div className="metric-label" style={{ color: theme.text }}>
                    {metric.label}
                  </div>
                  <div className="metric-sub" style={{ color: theme.secondaryText }}>
                    {metric.subLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
