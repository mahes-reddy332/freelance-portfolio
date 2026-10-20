import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FeaturedProjectCard from "../../components/featuredProjectCard/FeaturedProjectCard";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const featuredProjects = ProjectsData.data.filter((p) => p.featured);
    const moreProjects = ProjectsData.data.filter((p) => !p.featured);

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* 1. Header with Illustration */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* 2. Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="featured-projects-section">
            <Fade bottom duration={1000} distance="20px">
              <div className="projects-section-header">
                <h2
                  className="projects-section-title"
                  style={{ color: theme.text }}
                >
                  Featured Projects
                </h2>
                <p
                  className="projects-section-subtitle"
                  style={{ color: theme.secondaryText }}
                >
                  Flagship systems highlighting temporal graph analytics,
                  multimodal machine learning, and conversational AI.
                </p>
              </div>
            </Fade>

            <div className="featured-cards-grid">
              {featuredProjects.map((repo) => {
                return (
                  <FeaturedProjectCard
                    key={repo.id}
                    repo={repo}
                    theme={theme}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* 3. More Projects Section */}
        <div className="more-projects-section">
          <Fade bottom duration={1000} distance="20px">
            <div className="projects-section-header">
              <h2
                className="projects-section-title"
                style={{ color: theme.text }}
              >
                More Projects
              </h2>
              <p
                className="projects-section-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Additional applications, competition solutions, and tools
                across AI agents, data platforms, and APIs.
              </p>
            </div>
          </Fade>

          <div className="repo-cards-div-main">
            {moreProjects.map((repo) => {
              return (
                <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
              );
            })}
          </div>
        </div>

        {/* GitHub External Action */}
        <div className="projects-bottom-cta">
          <Button
            text={"Explore All Repositories on GitHub"}
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />
        </div>

        {/* Publications / Achievements */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader.description}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        {publications.data.length > 0 && (
          <div className="repo-cards-div-main">
            {publications.data.map((pub) => {
              return <PublicationCard key={pub.id} pub={pub} theme={theme} />;
            })}
          </div>
        )}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
