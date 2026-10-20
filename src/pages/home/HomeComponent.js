import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Services from "../../containers/services/Services";
import Projects from "../../containers/projects/Projects";
import Process from "../../containers/process/Process";
import Skills from "../../containers/skills/Skills";
import ExperienceSection from "../../containers/experience/ExperienceSection";
import ContactSection from "../../containers/contact/ContactSection";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    const { theme, toggleTheme, themeMode } = this.props;

    return (
      <div className="portfolio-homepage">
        <Header theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
        <main id="main">
          <Greeting theme={theme} />
          <Services theme={theme} />
          <Projects theme={theme} />
          <Process theme={theme} />
          <Skills theme={theme} />
          <ExperienceSection theme={theme} />
          <ContactSection theme={theme} />
        </main>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
