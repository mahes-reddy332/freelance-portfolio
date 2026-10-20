import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectsShowcase from "../../containers/projects/Projects";
import ContactSection from "../../containers/contact/ContactSection";
import "./Projects.css";

class ProjectsPage extends Component {
  render() {
    const { theme, toggleTheme, themeMode } = this.props;

    return (
      <div className="projects-page-wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
        <main style={{ paddingTop: "5rem" }}>
          <ProjectsShowcase theme={theme} />
          <ContactSection theme={theme} />
        </main>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default ProjectsPage;
