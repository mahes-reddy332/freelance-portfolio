import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, metrics } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const { theme } = props;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {greeting.availability && (
                <div className="availability-wrapper">
                  <span
                    className="availability-badge"
                    style={{
                      color: theme.imageHighlight,
                      backgroundColor: theme.highlight,
                    }}
                  >
                    <span
                      className="availability-dot"
                      style={{ backgroundColor: "#10b981" }}
                    ></span>
                    {greeting.availability}
                  </span>
                </div>
              )}
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Start a Project"
                  href="/contact"
                  theme={theme}
                  className="portfolio-repo-btn"
                />
                <Button
                  text="See My Resume"
                  href="/resume"
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>

        {/* Highlights / Metrics Grid */}
        {metrics && metrics.length > 0 && (
          <Fade bottom duration={1000} delay={250} distance="30px">
            <div
              className="hero-metrics-bar"
              style={{
                borderColor: theme.border || "rgba(0, 28, 85, 0.12)",
                backgroundColor: theme.surface || "#ffffff",
                boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.06)",
                marginTop: "30px",
              }}
            >
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="metric-card"
                  style={{
                    borderRightColor: theme.border || "rgba(0, 28, 85, 0.12)",
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
        )}
      </div>
    </Fade>
  );
}
