import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceSection from "../../containers/experience/ExperienceSection";
import ContactSection from "../../containers/contact/ContactSection";
import "./Experience.css";

class Experience extends Component {
  render() {
    const { theme, toggleTheme, themeMode } = this.props;
    return (
      <div className="experience-page-wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
        <main style={{ paddingTop: "5rem" }}>
          <ExperienceSection theme={theme} />
          <ContactSection theme={theme} />
        </main>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;
