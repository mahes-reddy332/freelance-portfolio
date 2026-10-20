import React from "react";
import "./Skills.css";
import { Fade } from "react-reveal";

const skillCategories = [
  {
    title: "LLMs, Agents & RAG Architecture",
    icon: "fa-solid fa-brain",
    summary: "Production autonomous workflows, vector embeddings, and real-time streaming",
    tools: [
      { name: "LangGraph", tag: "Agentic DAGs" },
      { name: "LangChain", tag: "Orchestration" },
      { name: "FastMCP", tag: "MCP Servers" },
      { name: "Model Context Protocol", tag: "Tool Protocol" },
      { name: "ChromaDB", tag: "Vector DB" },
      { name: "FAISS", tag: "Similarity Search" },
      { name: "OpenAI & Groq APIs", tag: "Inference" },
      { name: "LoRA / PEFT", tag: "Fine-Tuning" },
      { name: "LangSmith", tag: "Observability" },
    ],
    highlights: [
      "Stateful multi-agent systems with ReAct loops and human-in-the-loop review",
      "Dense and sparse hybrid RAG pipelines with semantic fact-checking guardrails",
      "Model Context Protocol remote servers for desktop and cloud AI assistants",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: "fa-solid fa-microchip",
    summary: "Predictive modeling, neural architectures, computer vision, and optimization",
    tools: [
      { name: "PyTorch", tag: "Deep Learning" },
      { name: "TensorFlow", tag: "Neural Nets" },
      { name: "Scikit-learn", tag: "ML Algorithms" },
      { name: "XGBoost", tag: "Gradient Boost" },
      { name: "LightGBM", tag: "Tabular" },
      { name: "OpenCV", tag: "Computer Vision" },
      { name: "SciPy", tag: "Scientific Computing" },
      { name: "Pandas & NumPy", tag: "Data Processing" },
    ],
    highlights: [
      "Supervised and unsupervised models with rigorous cross-validation and feature engineering",
      "SEM image segmentation via CLAHE and watershed algorithms extracting 200+ particles/image",
      "Bayesian optimization with Gaussian Process surrogate models for experimental tuning",
    ],
  },
  {
    title: "Backend, Cloud & Infrastructure",
    icon: "fa-solid fa-server",
    summary: "High-throughput asynchronous APIs, containerization, and cloud deployment",
    tools: [
      { name: "Python", tag: "Primary Language" },
      { name: "FastAPI", tag: "Async APIs" },
      { name: "Docker", tag: "Containers" },
      { name: "Google Cloud (GCP)", tag: "Cloud Infrastructure" },
      { name: "Kafka", tag: "Event Streaming" },
      { name: "Linux / Bash", tag: "Environments" },
      { name: "Git / GitHub", tag: "Version Control" },
      { name: "REST & SSE", tag: "Real-time Protocols" },
    ],
    highlights: [
      "Asynchronous I/O microservices with Server-Sent Events (SSE) streaming for LLMs",
      "Containerized microservices with Docker for seamless multi-environment deployments",
      "Robust CI/CD workflows and version control practices",
    ],
  },
  {
    title: "Databases, Analytics & Frontend",
    icon: "fa-solid fa-chart-column",
    summary: "Relational persistence, vector stores, BI dashboards, and reactive user interfaces",
    tools: [
      { name: "PostgreSQL", tag: "Relational DB" },
      { name: "MySQL", tag: "SQL" },
      { name: "SQLite & aiosqlite", tag: "Embedded DB" },
      { name: "React", tag: "UI Engineering" },
      { name: "TypeScript", tag: "Typed Frontend" },
      { name: "Power BI & Tableau", tag: "BI Dashboards" },
      { name: "Advanced Excel", tag: "KPI Modeling" },
    ],
    highlights: [
      "Complex SQL window functions, relational schemas, and ETL data modeling",
      "Interactive modern React user interfaces connecting real-time AI endpoints",
      "Executive KPI dashboards and exploratory data analysis",
    ],
  },
];

export default function Skills(props) {
  const theme = props.theme;

  return (
    <section className="skills-arsenal-section" id="skills">
      <div className="skills-container">
        {/* Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-eyebrow-wrap">
            <span className="section-index-badge">04 / 06</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Technical Arsenal
            </span>
          </div>

          <div className="section-header-split">
            <h2 className="section-heading" style={{ color: theme.text }}>
              Technologies &amp; Frameworks
            </h2>
            <p className="section-subheading" style={{ color: theme.secondaryText }}>
              Battle-tested tools and frameworks I use to engineer intelligent autonomous systems, fine-tuned models, and robust cloud services.
            </p>
          </div>
        </Fade>

        {/* Categories Grid */}
        <div className="skills-matrix-grid">
          {skillCategories.map((cat, idx) => (
            <Fade bottom duration={900} delay={idx * 100} distance="25px" key={idx}>
              <div
                className="skill-domain-card"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                  borderColor: theme.border,
                  boxShadow:
                    theme.name === "dark"
                      ? "0 20px 40px -15px rgba(0, 0, 0, 0.4)"
                      : "0 20px 40px -15px rgba(15, 23, 42, 0.05)",
                }}
              >
                {/* Domain Header */}
                <div className="domain-card-header">
                  <span
                    className="domain-icon-box"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.primary,
                    }}
                  >
                    <i className={cat.icon}></i>
                  </span>
                  <div>
                    <h3 className="domain-title" style={{ color: theme.text }}>
                      {cat.title}
                    </h3>
                    <p className="domain-summary" style={{ color: theme.secondaryText }}>
                      {cat.summary}
                    </p>
                  </div>
                </div>

                {/* Tool Pills */}
                <div className="domain-tools-wrap">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="tool-badge-pill"
                      style={{
                        backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.03)",
                        borderColor: theme.border,
                      }}
                    >
                      <span className="tool-name" style={{ color: theme.text }}>
                        {tool.name}
                      </span>
                      <span className="tool-tag" style={{ color: theme.primary }}>
                        {tool.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div
                  className="domain-highlights-box"
                  style={{
                    borderTopColor: theme.border,
                  }}
                >
                  <ul className="domain-highlights-list">
                    {cat.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="domain-highlight-item">
                        <i className="fa-solid fa-angle-right" style={{ color: theme.primary }}></i>
                        <span style={{ color: theme.secondaryText }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
