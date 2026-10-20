import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ContactSection from "../../containers/contact/ContactSection";
import "./ContactComponent.css";

class Contact extends Component {
  render() {
    const { theme, toggleTheme, themeMode } = this.props;

    return (
      <div className="contact-page-wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
        <main style={{ paddingTop: "5rem" }}>
          <ContactSection theme={theme} />
        </main>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Contact;
