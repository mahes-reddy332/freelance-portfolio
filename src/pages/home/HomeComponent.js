import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Services from "../../containers/services/Services";
import Process from "../../containers/process/Process";
import FeaturedProjectCard from "../../components/featuredProjectCard/FeaturedProjectCard";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import ContactSection from "../../containers/contact/ContactSection";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectsData from "../../shared/opensource/projects.json";
import {
  experience,
  certifications,
} from "../../portfolio.js";
import { Fade } from "react-reveal";
import "./HomeComponent.css";

class Home extends Component {
  render() {
    const { theme, toggleTheme, themeMode } = this.props;
    const featuredProjects = ProjectsData.data.filter((p) => p.featured);

    return (
      <div className="portfolio-homepage">
        <Header theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />

        {/* 1. Hero / Introduction */}
        <Greeting theme={theme} />
        <Skills theme={theme} />

        {/* Freelance Services */}
        <Services theme={theme} />

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

        {/* Client Delivery Process */}
        <Process theme={theme} />

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

        {/* 5. Contact & Client Inquiry */}
        <ContactSection theme={theme} />

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
