import React, { useState } from "react";
import "./Project.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

const verifiedProjects = [
  {
    id: "agentic-blog-studio",
    title: "AI Blog Studio — Production LangGraph Multi-Agent Platform",
    category: "Agentic AI & LLMs",
    flagship: true,
    githubUrl: "https://github.com/mahes-reddy332/agentic-blog-studio",
    description:
      "Production-grade agentic AI platform that automates end-to-end technical content creation through autonomous research, outline planning, parallel drafting, editorial harmonization, semantic fact-checking, citation validation, quality critique, technical SEO, AI image generation, and multi-format export.",
    impact: "Automated 8-stage collaborative workflow with zero-hallucination fact verification",
    technologies: ["LangGraph", "FastAPI", "Next.js", "Python", "TypeScript", "React"],
    icon: "fa-solid fa-wand-magic-sparkles",
  },
  {
    id: "ownchatgpt-rag",
    title: "Agentic AI RAG Assistant — OwnChatGpt",
    category: "Agentic AI & LLMs",
    flagship: true,
    githubUrl: "https://github.com/mahes-reddy332/OwnChatGpt",
    description:
      "Enterprise-grade full-stack Agentic AI Assistant featuring LangGraph ReAct workflows, real-time Server-Sent Events (SSE) streaming, RAG with ChromaDB vector search, Model Context Protocol (MCP) server integration, LangSmith observability, persistent memory, and Human-in-the-Loop approval gates.",
    impact: "Sub-200ms real-time streaming, long-term memory & interactive tool invocation",
    technologies: ["LangGraph", "ChromaDB", "FastAPI", "React", "TypeScript", "LangSmith"],
    icon: "fa-solid fa-comments",
  },
  {
    id: "mcp-expense-tracker",
    title: "ExpenseTracker MCP Server — Remote Deployment",
    category: "Agentic AI & LLMs",
    flagship: true,
    githubUrl: "https://github.com/mahes-reddy332/Mcp-Remote-Deploy-Expense-Tracker",
    description:
      "Model Context Protocol (MCP) server for managing personal expenses and financial intelligence directly through AI assistants. Engineered with FastMCP, SQLite, and asynchronous I/O, supporting tool calls, resource endpoints, HTTP transport, and turnkey Claude Desktop integration.",
    impact: "Seamless AI assistant integration via Model Context Protocol standard",
    technologies: ["FastMCP", "Python", "SQLite", "aiosqlite", "Claude Desktop"],
    icon: "fa-solid fa-server",
  },
  {
    id: "iitm-biomaterials-cv",
    title: "Biomaterials SEM Computer Vision & Bayesian Optimization",
    category: "Computer Vision & Research",
    flagship: true,
    githubUrl: "https://github.com/mahes-reddy332",
    description:
      "Research pipeline developed at IIT Madras for automated SEM image analysis and bioink optimization. Uses CLAHE and watershed segmentation to extract nanorod morphology and PCA orientation angles for 200+ particles/image, coupled with Bayesian optimization (Gaussian Process surrogate) for 3D bioprinting.",
    impact: "Extracted morphology from 200+ particles/image and optimized 3D bioprinting rheology",
    technologies: ["OpenCV", "scikit-image", "SciPy", "Bayesian Opt", "Python"],
    icon: "fa-solid fa-microscope",
  },
  {
    id: "amazon-ml-pricing",
    title: "Amazon ML Challenge 2025 — Smart Price Prediction",
    category: "Machine Learning",
    flagship: false,
    githubUrl: "https://github.com/mahes-reddy332/AmazonMlChallenge_SmartPricePrediction",
    description:
      "Competitive pricing prediction engine developed for the Amazon ML Challenge. Employs deep learning architectures, advanced tabular feature engineering, gradient boosting ensembles, and robust cross-validation strategies.",
    impact: "High-accuracy product price prediction across complex competitive catalogs",
    technologies: ["PyTorch", "XGBoost", "LightGBM", "Scikit-learn", "Pandas"],
    icon: "fa-solid fa-chart-line",
  },
  {
    id: "clinical-trial-analytics",
    title: "AI-Driven Clinical Trial Data Analytics Platform",
    category: "Data & Analytics",
    flagship: false,
    githubUrl: "https://github.com/mahes-reddy332/G-14_Nest_Nitraipur",
    description:
      "Integrated analytics platform consolidating clinical trial records from disparate sources. Delivers real-time executive dashboards, anomaly detection, cohort tracking, and Agentic AI recommendation modules.",
    impact: "Consolidated multi-source trial telemetry with automated KPI insights",
    technologies: ["Python", "SQL", "FastAPI", "Data Analytics", "Agentic AI"],
    icon: "fa-solid fa-heart-pulse",
  },
  {
    id: "cnn-sentiment",
    title: "Emotion & Sentiment Style Detection (CNN)",
    category: "Machine Learning",
    flagship: false,
    githubUrl: "https://github.com/mahes-reddy332/FeelingDetectionUsingCNN",
    description:
      "Deep convolutional neural network for facial sentiment and emotional state recognition, featuring data augmentation, dropout regularization, and real-time webcam inference.",
    impact: "Real-time facial expression and sentiment classification pipeline",
    technologies: ["PyTorch", "TensorFlow", "OpenCV", "Python"],
    icon: "fa-solid fa-face-smile",
  },
  {
    id: "netflix-sql-analytics",
    title: "Netflix Content Trend Analytics (Advanced SQL)",
    category: "Data & Analytics",
    flagship: false,
    githubUrl: "https://github.com/mahes-reddy332/NetflixContentAnalysis",
    description:
      "Comprehensive exploratory data analysis and database modeling examining global streaming trends, content ratings, genre shifts, and regional production dynamics using advanced SQL window functions.",
    impact: "Identified key global production shifts using multi-table relational aggregations",
    technologies: ["PostgreSQL", "SQL Window Functions", "Data Modeling", "ETL"],
    icon: "fa-solid fa-database",
  },
];

const categories = [
  "All Work",
  "Agentic AI & LLMs",
  "Machine Learning",
  "Computer Vision & Research",
  "Data & Analytics",
];

export default function Projects(props) {
  const theme = props.theme;
  const [activeTab, setActiveTab] = useState("All Work");

  const filteredProjects =
    activeTab === "All Work"
      ? verifiedProjects
      : verifiedProjects.filter((p) => p.category === activeTab);

  return (
    <section className="projects-showcase-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-eyebrow-wrap">
            <span className="section-index-badge">02 / 06</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Featured Case Studies
            </span>
          </div>

          <div className="section-header-split">
            <div>
              <h2 className="section-heading" style={{ color: theme.text }}>
                Proven AI &amp; Software Work
              </h2>
              <p className="section-subheading" style={{ color: theme.secondaryText }}>
                A curated selection of production multi-agent systems, RAG pipelines, research models, and high-throughput data solutions.
              </p>
            </div>

            <a
              href={greeting.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-gh-btn"
              style={{
                backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
                borderColor: theme.borderStrong || theme.border,
                color: theme.text,
              }}
            >
              <i className="fa-brands fa-github"></i>
              <span>View All Repositories</span>
              <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }}></i>
            </a>
          </div>
        </Fade>

        {/* Filter Tabs */}
        <Fade bottom duration={900} delay={100} distance="20px">
          <div className="project-tabs-row" role="tablist">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeTab === cat}
                onClick={() => setActiveTab(cat)}
                className={`project-tab-btn ${activeTab === cat ? "active" : ""}`}
                style={{
                  backgroundColor:
                    activeTab === cat
                      ? theme.primary
                      : theme.name === "dark"
                      ? "rgba(255, 255, 255, 0.04)"
                      : "rgba(15, 23, 42, 0.04)",
                  color: activeTab === cat ? "#ffffff" : theme.secondaryText,
                  borderColor: activeTab === cat ? theme.primary : theme.border,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Fade>

        {/* Projects Cards Grid */}
        <div className="project-cards-grid">
          {filteredProjects.map((project, index) => (
            <Fade bottom duration={900} delay={index * 80} distance="25px" key={project.id}>
              <div
                className={`case-study-card ${project.flagship ? "flagship-card" : ""}`}
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                  borderColor: theme.border,
                  boxShadow:
                    theme.name === "dark"
                      ? "0 20px 40px -15px rgba(0, 0, 0, 0.4)"
                      : "0 20px 40px -15px rgba(15, 23, 42, 0.05)",
                }}
              >
                {/* Card Top Meta */}
                <div className="case-study-top">
                  <div className="category-and-icon">
                    <span
                      className="case-study-icon"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.primary,
                      }}
                    >
                      <i className={project.icon}></i>
                    </span>
                    <span
                      className="case-category-pill"
                      style={{
                        backgroundColor: theme.name === "dark" ? "rgba(99, 102, 241, 0.12)" : "rgba(79, 70, 229, 0.08)",
                        color: theme.primary,
                        borderColor: theme.border,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {project.flagship && (
                    <span
                      className="flagship-badge"
                      style={{
                        backgroundColor: "rgba(245, 158, 11, 0.12)",
                        color: "#f59e0b",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      }}
                    >
                      <i className="fa-solid fa-star"></i> Flagship
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="case-study-title" style={{ color: theme.text }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="case-study-desc" style={{ color: theme.secondaryText }}>
                  {project.description}
                </p>

                {/* Key Outcome / Impact Box */}
                <div
                  className="case-study-impact-box"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(16, 185, 129, 0.06)" : "rgba(16, 185, 129, 0.05)",
                    borderColor: "rgba(16, 185, 129, 0.2)",
                  }}
                >
                  <i className="fa-solid fa-chart-pie" style={{ color: theme.emerald }}></i>
                  <span className="impact-text" style={{ color: theme.emerald }}>
                    <strong>Key Result:</strong> {project.impact}
                  </span>
                </div>

                {/* Tech Pills */}
                <div className="case-study-techs">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="case-tech-tag"
                      style={{
                        backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.03)",
                        color: theme.secondaryText,
                        borderColor: theme.border,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links / Action Footer */}
                <div className="case-study-footer" style={{ borderTopColor: theme.border }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-action-link"
                    style={{ color: theme.primary }}
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>Source Code</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }}></i>
                  </a>

                  <a
                    href="#contact"
                    className="case-discuss-btn"
                    style={{ color: theme.secondaryText }}
                  >
                    <span>Discuss Similar Project</span>
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: "10px" }}></i>
                  </a>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
