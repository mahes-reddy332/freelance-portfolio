import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Services from "../../containers/services/Services";
import Process from "../../containers/process/Process";
import FeaturedProjectCard from "../../components/featuredProjectCard/FeaturedProjectCard";
import ContactSection from "../../containers/contact/ContactSection";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectsData from "../../shared/opensource/projects.json";
import { Fade } from "react-reveal";
import "./HomeComponent.css";

class Home extends Component {
  render() {
    const { theme, toggleTheme, themeMode } = this.props;
    const featuredProjects = ProjectsData.data.filter((p) => p.featured);

    return (
      <div className="portfolio-homepage">
        <Header theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />

        {/* 1. Hero and Introduction */}
        <Greeting theme={theme} />

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

        {/* 3. AI Engineering Services */}
        <Services theme={theme} />

        {/* 4. Tech Stack & Expertise */}
        <Skills theme={theme} />

        {/* 5. Client Delivery Process */}
        <Process theme={theme} />

        {/* 6. Contact */}
        <ContactSection theme={theme} />

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
