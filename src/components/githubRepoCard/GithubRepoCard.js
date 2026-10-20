import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  function handleActionClick(e, url) {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Fade bottom duration={1200} distance="25px">
      <div
        className="repo-card-div"
        onClick={() => openRepoinNewTab(repo.url)}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            openRepoinNewTab(repo.url);
          }
        }}
        aria-label={`Project: ${repo.name}`}
      >
        <div className="repo-meta-row">
          {repo.category && (
            <span className="repo-category-pill">{repo.category}</span>
          )}
          {repo.badge && (
            <span className="repo-badge-pill">{repo.badge}</span>
          )}
        </div>

        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="octicon repo-svg"
            height="18"
            role="img"
            viewBox="0 0 12 16"
            width="14"
            fill={theme.text}
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <h3 className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </h3>
        </div>

        <p className="repo-description" style={{ color: "#4A5568" }}>
          {repo.description}
        </p>

        <div className="repo-details">
          <div className="repo-action-links">
            <button
              type="button"
              className="repo-action-btn"
              onClick={(e) => handleActionClick(e, repo.url)}
              aria-label={`View ${repo.name} on GitHub`}
            >
              <i className="fab fa-github" style={{ marginRight: "5px" }}></i>
              Source
            </button>

            {repo.liveUrl && (
              <button
                type="button"
                className="repo-live-btn"
                onClick={(e) => handleActionClick(e, repo.liveUrl)}
                aria-label={`View ${repo.name} live demo`}
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginRight: "5px" }}
                ></i>
                Live Demo
              </button>
            )}
          </div>

          <ProjectLanguages
            className="repo-languages"
            logos={repo.languages}
          />
        </div>
      </div>
    </Fade>
  );
}
