import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Fade } from "react-reveal";

class ExperienceAccordion extends Component {
  constructor(props) {
    super(props);
    // Keep research and competitions open by default, allowing independent toggles
    this.state = {
      openSections: { 0: true, 1: true },
      failedLogos: {},
    };
  }

  handleSectionClick = (index) => {
    this.setState((state) => ({
      openSections: {
        ...state.openSections,
        [index]: !state.openSections[index],
      },
    }));
  };

  handleLogoError = (company) => {
    this.setState((state) => ({
      failedLogos: {
        ...state.failedLogos,
        [company]: true,
      },
    }));
  };

  render() {
    const theme = this.props.theme;
    const sections = this.props.sections || [];

    return (
      <div className="experience-accord">
        {sections.map((section, index) => {
          const isOpen = !!this.state.openSections[index];

          return (
            <div key={section.title} className="accord-panel">
              <button
                type="button"
                className="experience-accordion-header"
                onClick={() => this.handleSectionClick(index)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: theme.body,
                  border: "1px solid",
                  borderRadius: "5px",
                  borderColor: theme.headerColor,
                  marginBottom: "8px",
                  fontFamily: "Google Sans Regular",
                  color: theme.text,
                  cursor: "pointer",
                  padding: "16px 20px",
                  fontSize: "17px",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "background-color 0.2s ease",
                }}
              >
                <span>{section.title}</span>
                <span
                  aria-hidden="true"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    backgroundColor: theme.body,
                    marginBottom: "16px",
                  }}
                >
                  {section.competitions && section.competitions.length > 0 ? (
                    <div className="competitions-compact-grid">
                      {section.competitions.map((item, compIndex) => {
                        const outcomeClass = `outcome-badge outcome-${
                          item.outcomeType || "default"
                        }`;
                        const showLogo =
                          item.logo_path && !this.state.failedLogos[item.company];

                        return (
                          <Fade
                            bottom
                            duration={600}
                            distance="15px"
                            key={`${item.company}-${compIndex}`}
                          >
                            <div
                              className="competition-entry-card"
                              style={{
                                backgroundColor: theme.body,
                                borderColor: theme.headerColor || "#cbd5e1",
                              }}
                            >
                              <div className="competition-entry-header">
                                <div className="competition-entry-title-wrap">
                                  {showLogo && (
                                    <div className="competition-logo-container">
                                      <img
                                        src={require(`../../assets/images/${item.logo_path}`)}
                                        alt={item.alt || `${item.company} logo`}
                                        className="competition-logo-img"
                                        onError={() =>
                                          this.handleLogoError(item.company)
                                        }
                                      />
                                    </div>
                                  )}
                                  <div className="competition-entry-text-block">
                                    <span
                                      className="competition-company-name"
                                      style={{ color: theme.text }}
                                    >
                                      {item.company}
                                    </span>
                                    <span
                                      className="competition-event-name"
                                      style={{ color: theme.secondaryText }}
                                    >
                                      {" "}
                                      • {item.competition}
                                    </span>
                                  </div>
                                </div>
                                <span className={outcomeClass}>
                                  {item.outcome}
                                </span>
                              </div>
                              <p
                                className="competition-entry-desc"
                                style={{ color: theme.secondaryText }}
                              >
                                {item.description}
                              </p>
                            </div>
                          </Fade>
                        );
                      })}
                    </div>
                  ) : section.experiences && section.experiences.length > 0 ? (
                    section.experiences.map((experience, experienceIndex) => (
                      <ExperienceCard
                        key={`${section.title}-${experience.title}-${experienceIndex}`}
                        index={experienceIndex}
                        totalCards={section.experiences.length}
                        experience={experience}
                        theme={theme}
                      />
                    ))
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
