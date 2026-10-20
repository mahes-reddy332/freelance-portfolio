import React, { useState } from "react";
import "./ContactSection.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";

export default function ContactSection(props) {
  const { theme } = props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Generative AI, RAG & Chatbots",
    budget: "$2,000 – $5,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Freelance Inquiry] ${formData.service} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Mahesh,\n\nI am contacting you regarding a project inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nService Interested In: ${formData.service}\nEstimated Budget: ${formData.budget}\n\nProject Scope & Requirements:\n${formData.message}\n\nLooking forward to discussing further!`
    );

    window.location.href = `mailto:${greeting.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(greeting.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-inquiry-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-eyebrow-wrap">
            <span className="section-index-badge">04 / 04</span>
            <span className="section-eyebrow" style={{ color: theme.primary }}>
              Initiate Project
            </span>
          </div>

          <div className="section-header-split">
            <div>
              <h2 className="section-heading" style={{ color: theme.text }}>
                Let&apos;s Build Something Intelligent Together
              </h2>
              <p className="section-subheading" style={{ color: theme.secondaryText }}>
                Ready to accelerate your roadmap with custom LLMs, autonomous agent workflows, or predictive models? Let&apos;s talk.
              </p>
            </div>

            <div
              className="sla-badge"
              style={{
                backgroundColor: theme.name === "dark" ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.08)",
                borderColor: "rgba(16, 185, 129, 0.3)",
              }}
            >
              <span className="pulse-dot"></span>
              <span style={{ color: theme.emerald, fontWeight: 600 }}>
                Response SLA: Within 24 hours
              </span>
            </div>
          </div>
        </Fade>

        {/* 2-Column: Form & Direct Channels */}
        <div className="contact-grid">
          {/* Inquiry Form */}
          <Fade bottom duration={900} distance="25px">
            <div
              className="inquiry-form-card"
              style={{
                backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                borderColor: theme.border,
                boxShadow:
                  theme.name === "dark"
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.45)"
                    : "0 25px 50px -12px rgba(15, 23, 42, 0.06)",
              }}
            >
              <h3 className="form-card-title" style={{ color: theme.text }}>
                Send a Project Inquiry
              </h3>
              <p className="form-card-sub" style={{ color: theme.secondaryText }}>
                Fill out the details below to receive a feasibility evaluation and project proposal.
              </p>

              {submitted && (
                <div
                  className="form-feedback-alert"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    borderColor: "rgba(16, 185, 129, 0.35)",
                    color: theme.emerald,
                  }}
                >
                  <i className="fa-solid fa-circle-check"></i>
                  <span>
                    Inquiry draft created! Launching your mail client to send directly to {greeting.email}.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inquiry-name" style={{ color: theme.text }}>
                      Your Name / Company *
                    </label>
                    <input
                      id="inquiry-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan (Acme AI)"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "#f8fafc",
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-email" style={{ color: theme.text }}>
                      Work Email *
                    </label>
                    <input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@acme.ai"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "#f8fafc",
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inquiry-service" style={{ color: theme.text }}>
                      Primary Service Needed *
                    </label>
                    <select
                      id="inquiry-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        backgroundColor: theme.name === "dark" ? "#0f1523" : "#ffffff",
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    >
                      <option value="Generative AI, RAG & Chatbots">
                        Generative AI, RAG &amp; Chatbots
                      </option>
                      <option value="AI Agents & Automation">
                        AI Agents &amp; Automation
                      </option>
                      <option value="Machine Learning & Deep Learning">
                        Machine Learning &amp; Deep Learning
                      </option>
                      <option value="Full-Stack AI Application Development">
                        Full-Stack AI Application Development
                      </option>
                      <option value="Technical Consulting & Architecture Review">
                        Technical Consulting &amp; Architecture Review
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-budget" style={{ color: theme.text }}>
                      Estimated Budget Range
                    </label>
                    <select
                      id="inquiry-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        backgroundColor: theme.name === "dark" ? "#0f1523" : "#ffffff",
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    >
                      <option value="< $2,000">&lt; $2,000 (Small sprint / Proof-of-concept)</option>
                      <option value="$2,000 – $5,000">$2,000 – $5,000 (MVP / Full feature pipeline)</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000 (Production system &amp; deployment)</option>
                      <option value="$10,000+">$10,000+ (Ongoing retainer / Enterprise)</option>
                      <option value="Flexible / To be discussed">Flexible / To be scoped</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-message" style={{ color: theme.text }}>
                    Project Description &amp; Objectives *
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Describe your current bottlenecks, target workflow, data sources, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.04)" : "#f8fafc",
                      borderColor: theme.border,
                      color: theme.text,
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.primaryForeground || "#ffffff",
                    boxShadow: `0 10px 20px -5px ${theme.primaryGlow || "rgba(99, 102, 241, 0.4)"}`,
                  }}
                >
                  <span>Transmit Inquiry to Mahesh</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </Fade>

          {/* Direct Channels & Availability Card */}
          <Fade bottom duration={900} delay={150} distance="25px">
            <div className="direct-channels-wrap">
              {/* Direct Card */}
              <div
                className="channels-card"
                style={{
                  backgroundColor: theme.name === "dark" ? "rgba(17, 23, 38, 0.75)" : "#ffffff",
                  borderColor: theme.border,
                }}
              >
                <h3 className="channels-card-title" style={{ color: theme.text }}>
                  Direct Contact Channels
                </h3>

                {/* Email Box */}
                <div
                  className="direct-channel-item"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(15, 23, 42, 0.03)",
                    borderColor: theme.border,
                  }}
                >
                  <div className="channel-icon" style={{ backgroundColor: theme.highlight, color: theme.primary }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="channel-info">
                    <span className="channel-label" style={{ color: theme.secondaryText }}>
                      Email
                    </span>
                    <a
                      href={`mailto:${greeting.email}`}
                      className="channel-value"
                      style={{ color: theme.text }}
                    >
                      {greeting.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="copy-btn"
                    title="Copy email to clipboard"
                    style={{
                      borderColor: theme.border,
                      color: theme.secondaryText,
                    }}
                  >
                    <i className={`fa-solid ${copied ? "fa-check" : "fa-copy"}`}></i>
                  </button>
                </div>

                {/* LinkedIn Box */}
                <a
                  href={greeting.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-channel-item link-item"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(15, 23, 42, 0.03)",
                    borderColor: theme.border,
                    color: theme.text,
                  }}
                >
                  <div className="channel-icon" style={{ backgroundColor: "#0077B520", color: "#0077B5" }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="channel-info">
                    <span className="channel-label" style={{ color: theme.secondaryText }}>
                      LinkedIn Profile
                    </span>
                    <span className="channel-value">mahesh-reddy-mula-369z</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square channel-ext-icon" style={{ color: theme.secondaryText }}></i>
                </a>

                {/* GitHub Box */}
                <a
                  href={greeting.githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-channel-item link-item"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(15, 23, 42, 0.03)",
                    borderColor: theme.border,
                    color: theme.text,
                  }}
                >
                  <div className="channel-icon" style={{ backgroundColor: theme.highlight, color: theme.text }}>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div className="channel-info">
                    <span className="channel-label" style={{ color: theme.secondaryText }}>
                      GitHub Profile
                    </span>
                    <span className="channel-value">mahes-reddy332</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square channel-ext-icon" style={{ color: theme.secondaryText }}></i>
                </a>

                {/* Location */}
                <div
                  className="direct-channel-item"
                  style={{
                    backgroundColor: theme.name === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(15, 23, 42, 0.03)",
                    borderColor: theme.border,
                  }}
                >
                  <div className="channel-icon" style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="channel-info">
                    <span className="channel-label" style={{ color: theme.secondaryText }}>
                      Location &amp; Availability
                    </span>
                    <span className="channel-value" style={{ color: theme.text }}>
                      {greeting.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Consultation Call Box */}
              <div
                className="schedule-call-card"
                style={{
                  backgroundColor: theme.highlight,
                  borderColor: theme.borderStrong || theme.border,
                }}
              >
                <div className="schedule-header">
                  <i className="fa-solid fa-calendar-check" style={{ color: theme.primary, fontSize: "1.4rem" }}></i>
                  <div>
                    <h4 className="schedule-title" style={{ color: theme.text }}>
                      Need to scope a project quickly?
                    </h4>
                    <p className="schedule-sub" style={{ color: theme.secondaryText }}>
                      Email me directly to coordinate an introductory strategy call.
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${greeting.email}?subject=Introductory%20Call%20with%20Mahesh%20Reddy`}
                  className="schedule-btn"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.primaryForeground || "#ffffff",
                  }}
                >
                  <span>Request Strategy Call</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
