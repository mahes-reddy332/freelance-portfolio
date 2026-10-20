import React from "react";
import "./FeaturedProjectCard.css";
import { Fade } from "react-reveal";

function ProjectVisual({ type, theme }) {
  if (type === "graph-analytics") {
    return (
      <div className="featured-card-visual" style={{ backgroundColor: "rgba(14, 107, 168, 0.05)" }}>
        <svg viewBox="0 0 340 140" className="visual-svg" aria-label="Temporal Graph Traversal Architecture">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#0E6BA8" />
            </marker>
            <marker id="arrow-alert" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#E53E3E" />
            </marker>
          </defs>
          {/* Background grid dots */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(14, 107, 168, 0.15)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Graph edges */}
          <path d="M 55 70 L 135 40" stroke="#0E6BA8" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrow)" />
          <path d="M 55 70 L 135 100" stroke="#0E6BA8" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrow)" />
          <path d="M 175 40 L 255 60" stroke="#E53E3E" strokeWidth="2" markerEnd="url(#arrow-alert)" />
          <path d="M 175 100 L 255 80" stroke="#E53E3E" strokeWidth="2" markerEnd="url(#arrow-alert)" />

          {/* Source Node */}
          <circle cx="45" cy="70" r="18" fill="#001C55" />
          <text x="45" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">SRC</text>
          <text x="45" y="100" textAnchor="middle" fill="#001C55" fontSize="9" fontWeight="600">Origin</text>

          {/* Mule 1 */}
          <circle cx="155" cy="40" r="15" fill="#0E6BA8" />
          <text x="155" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="600">Hop 1</text>
          <text x="155" y="20" textAnchor="middle" fill="#0E6BA8" fontSize="8">₹45k · +8m</text>

          {/* Mule 2 */}
          <circle cx="155" cy="100" r="15" fill="#0E6BA8" />
          <text x="155" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="600">Hop 2</text>
          <text x="155" y="126" textAnchor="middle" fill="#0E6BA8" fontSize="8">₹40k · +14m</text>

          {/* Terminal Mule Node */}
          <circle cx="275" cy="70" r="18" fill="#FFF5F5" stroke="#E53E3E" strokeWidth="2.5" />
          <text x="275" y="74" textAnchor="middle" fill="#E53E3E" fontSize="9" fontWeight="bold">MULE</text>
          <text x="275" y="100" textAnchor="middle" fill="#E53E3E" fontSize="9" fontWeight="bold">Flagged</text>

          {/* Risk scoring pill */}
          <rect x="210" y="12" width="120" height="22" rx="4" fill="#001C55" />
          <text x="270" y="27" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="600">BFS Window: 24h</text>
        </svg>
      </div>
    );
  }

  if (type === "multimodal-ml") {
    return (
      <div className="featured-card-visual" style={{ backgroundColor: "rgba(14, 107, 168, 0.05)" }}>
        <svg viewBox="0 0 340 140" className="visual-svg" aria-label="Multimodal Machine Learning Architecture">
          <defs>
            <marker id="arrow-ml" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#0E6BA8" />
            </marker>
          </defs>
          <pattern id="grid-ml" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(14, 107, 168, 0.15)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-ml)" />

          {/* Image branch */}
          <rect x="15" y="25" width="85" height="34" rx="6" fill="#001C55" />
          <text x="57" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Product Image</text>
          <text x="57" y="52" textAnchor="middle" fill="#A6E1FA" fontSize="8">ResNet50 / 2048d</text>

          {/* Text branch */}
          <rect x="15" y="80" width="85" height="34" rx="6" fill="#001C55" />
          <text x="57" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Catalog Text</text>
          <text x="57" y="107" textAnchor="middle" fill="#A6E1FA" fontSize="8">Transformer NLP</text>

          {/* Connecting lines */}
          <path d="M 100 42 L 140 68" stroke="#0E6BA8" strokeWidth="2" markerEnd="url(#arrow-ml)" />
          <path d="M 100 97 L 140 72" stroke="#0E6BA8" strokeWidth="2" markerEnd="url(#arrow-ml)" />

          {/* Fusion Block */}
          <rect x="145" y="50" width="80" height="40" rx="6" fill="#0E6BA8" />
          <text x="185" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold">Feature Fusion</text>
          <text x="185" y="81" textAnchor="middle" fill="#EDF9FE" fontSize="8">Dense Embeddings</text>

          <path d="M 225 70 L 250 70" stroke="#0E6BA8" strokeWidth="2" markerEnd="url(#arrow-ml)" />

          {/* Ensemble & Output */}
          <rect x="255" y="46" width="75" height="48" rx="6" fill="#FFFFFF" stroke="#001C55" strokeWidth="2" />
          <text x="292" y="66" textAnchor="middle" fill="#001C55" fontSize="9" fontWeight="bold">XGB + LGBM</text>
          <text x="292" y="80" textAnchor="middle" fill="#057a55" fontSize="8.5" fontWeight="bold">SMAPE: 39</text>

          <rect x="15" y="6" width="130" height="15" rx="3" fill="rgba(14, 107, 168, 0.12)" />
          <text x="80" y="17" textAnchor="middle" fill="#001C55" fontSize="8" fontWeight="bold">150K+ Sample Dataset</text>
        </svg>
      </div>
    );
  }

  // conversational-ai (OwnChatGPT)
  return (
    <div className="featured-card-visual" style={{ backgroundColor: "rgba(14, 107, 168, 0.05)" }}>
      <svg viewBox="0 0 340 140" className="visual-svg" aria-label="LangGraph ReAct Agent Architecture">
        <defs>
          <marker id="arrow-agent" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#0E6BA8" />
          </marker>
        </defs>
        <pattern id="grid-agent" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(14, 107, 168, 0.15)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-agent)" />

        {/* User Query */}
        <rect x="15" y="52" width="70" height="36" rx="6" fill="#001C55" />
        <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">User Query</text>
        <text x="50" y="80" textAnchor="middle" fill="#A6E1FA" fontSize="8">DSA / Logic</text>

        <path d="M 85 70 L 115 70" stroke="#0E6BA8" strokeWidth="2" markerEnd="url(#arrow-agent)" />

        {/* LangGraph ReAct Coordinator */}
        <rect x="120" y="44" width="95" height="52" rx="8" fill="#0E6BA8" />
        <text x="167" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">LangGraph ReAct</text>
        <text x="167" y="78" textAnchor="middle" fill="#EDF9FE" fontSize="8">Agent State &amp; Memory</text>
        <text x="167" y="89" textAnchor="middle" fill="#EDF9FE" fontSize="7.5">Tool Calling Loop</text>

        {/* ChromaDB Vector RAG loop */}
        <path d="M 167 44 L 167 25 L 235 25" stroke="#0E6BA8" strokeWidth="1.5" strokeDasharray="3,3" />
        <rect x="238" y="14" width="90" height="24" rx="4" fill="#FFFFFF" stroke="#0E6BA8" strokeWidth="1.5" />
        <text x="283" y="30" textAnchor="middle" fill="#001C55" fontSize="8.5" fontWeight="bold">ChromaDB RAG</text>

        <path d="M 215 70 L 245 70" stroke="#0E6BA8" strokeWidth="2" markerEnd="url(#arrow-agent)" />

        {/* Real-time Streaming Output */}
        <rect x="250" y="52" width="78" height="36" rx="6" fill="#FFFFFF" stroke="#001C55" strokeWidth="2" />
        <text x="289" y="68" textAnchor="middle" fill="#001C55" fontSize="9" fontWeight="bold">SSE Streaming</text>
        <text x="289" y="80" textAnchor="middle" fill="#057a55" fontSize="8" fontWeight="bold">FastAPI + React</text>

        <rect x="15" y="104" width="130" height="18" rx="3" fill="rgba(14, 107, 168, 0.12)" />
        <text x="80" y="116" textAnchor="middle" fill="#001C55" fontSize="8" fontWeight="600">Guided Diagnostic Hints</text>
      </svg>
    </div>
  );
}

export default function FeaturedProjectCard({ repo, theme }) {
  function handleCardClick() {
    window.open(repo.url, "_blank", "noopener,noreferrer");
  }

  function handleActionClick(e, url) {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Fade bottom duration={1200} distance="30px">
      <div
        className="featured-project-card"
        onClick={handleCardClick}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleCardClick();
          }
        }}
        aria-label={`Featured Project: ${repo.name}`}
      >
        <ProjectVisual type={repo.visualType} theme={theme} />

        <div className="featured-card-body">
          <div className="featured-card-meta">
            {repo.category && (
              <span className="featured-category-pill">{repo.category}</span>
            )}
            {repo.badge && (
              <span className="featured-badge-pill">{repo.badge}</span>
            )}
          </div>

          <h3 className="featured-card-title" style={{ color: theme.text }}>
            {repo.name}
          </h3>

          <p className="featured-card-desc" style={{ color: "#4A5568" }}>
            {repo.description}
          </p>

          <div className="featured-card-tech">
            {repo.languages &&
              repo.languages.slice(0, 5).map((lang, idx) => (
                <span key={idx} className="featured-tech-tag">
                  {lang.iconifyClass && (
                    <span
                      className="iconify featured-tech-icon"
                      data-icon={lang.iconifyClass}
                      data-inline="false"
                    ></span>
                  )}
                  {lang.name}
                </span>
              ))}
          </div>

          <div className="featured-card-actions">
            <button
              type="button"
              className="featured-btn-github"
              onClick={(e) => handleActionClick(e, repo.url)}
              aria-label={`View ${repo.name} repository on GitHub`}
            >
              <i className="fab fa-github" style={{ marginRight: "6px" }}></i>
              Source Code
            </button>

            {repo.liveUrl && (
              <button
                type="button"
                className="featured-btn-live"
                onClick={(e) => handleActionClick(e, repo.liveUrl)}
                aria-label={`View ${repo.name} live demo`}
              >
                <i className="fas fa-external-link-alt" style={{ marginRight: "6px" }}></i>
                Live Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
