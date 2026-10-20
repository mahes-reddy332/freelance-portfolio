import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import FeaturedProjectCard from "../../components/featuredProjectCard/FeaturedProjectCard";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectsData from "../../shared/opensource/projects.json";
import {
  experience,
  certifications,
  contactPageData,
} from "../../portfolio.js";
import { Fade } from "react-reveal";
import "./HomeComponent.css";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    const featuredProjects = ProjectsData.data.filter((p) => p.featured);

    return (
      <div>
        <Header theme={theme} />

        {/* 1. Hero / Introduction */}
        <Greeting theme={theme} />
        <Skills theme={theme} />

        {/* 2. Selected Projects */}
        {featuredProjects.length > 0 && (
          <div className="home-section" id="projects">
            <Fade bottom duration={1000} distance="20px">
              <div className="home-section-header">
                <h1
                  className="home-section-title"
                  style={{ color: theme.text }}
                >
                  Selected Projects
                </h1>
                <p
                  className="home-section-subtitle subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  A selection of AI applications, machine learning models, and
                  software projects built to solve practical problems.
                </p>
              </div>
            </Fade>
            <div className="home-featured-cards-grid">
              {featuredProjects.map((repo) => (
                <FeaturedProjectCard
                  key={repo.id}
                  repo={repo}
                  theme={theme}
                />
              ))}
            </div>
            <div className="home-section-btn-div">
              <Button
                text="View All Projects"
                href="/projects"
                theme={theme}
              />
            </div>
          </div>
        )}

        {/* 3. Experience & Research */}
        <div className="home-section" id="experience">
          <Fade bottom duration={1000} distance="20px">
            <div className="home-section-header">
              <h1
                className="home-section-title"
                style={{ color: theme.text }}
              >
                Experience & Research
              </h1>
              <p
                className="home-section-subtitle subTitle"
                style={{ color: theme.secondaryText }}
              >
                Hands-on AI/ML engineering, academic research at IIT Madras,
                and recognized achievements across industry hackathons and case
                competitions.
              </p>
            </div>
          </Fade>
          <ExperienceAccordion
            sections={experience["sections"]}
            theme={theme}
          />
          <div className="home-section-btn-div">
            <Button
              text="View Full Experience"
              href="/experience"
              theme={theme}
            />
          </div>
        </div>

        {/* 4. Education */}
        <div className="home-section" id="education">
          <Educations theme={theme} />
          {certifications &&
            certifications.certifications &&
            certifications.certifications.length > 0 && (
              <Certifications theme={theme} />
            )}
        </div>

        {/* 5. Contact */}
        <div className="home-section" id="contact">
          <Fade bottom duration={1000} distance="20px">
            <div
              className="home-contact-card"
              style={{ backgroundColor: theme.highlight }}
            >
              <h1
                className="home-section-title"
                style={{ color: theme.text, textAlign: "center" }}
              >
                {contactPageData.contactSection.title}
              </h1>
              <p
                className="home-section-subtitle subTitle"
                style={{
                  color: theme.secondaryText,
                  textAlign: "center",
                  maxWidth: "750px",
                  margin: "12px auto 24px auto",
                  lineHeight: "1.6",
                }}
              >
                {contactPageData.contactSection.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <SocialMedia theme={theme} />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  text="Hire Me / Email"
                  href="mailto:mahesreddymula@gmail.com"
                  newTab={true}
                  theme={theme}
                />
                <Button
                  text="See My Resume"
                  href="/resume"
                  theme={theme}
                />
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
