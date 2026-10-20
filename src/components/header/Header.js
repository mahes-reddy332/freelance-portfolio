import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  closeMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn) {
      menuBtn.checked = false;
    }
  };

  render() {
    const theme = this.props.theme;
    const { toggleTheme, themeMode } = this.props;
    const link = settings.isSplash ? "/splash" : "home";

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo" onClick={this.closeMenu}>
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn" aria-label="Toggle navigation menu">
              <span className="navicon" style={{ backgroundColor: theme.text }}></span>
            </label>
            <ul
              className="menu"
              style={{
                backgroundColor: theme.body,
                borderColor: theme.border || "rgba(0, 28, 85, 0.12)",
              }}
            >
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onClick={this.closeMenu}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onClick={this.closeMenu}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onClick={this.closeMenu}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onClick={this.closeMenu}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onClick={this.closeMenu}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Hire Me
                </NavLink>
              </li>
              {toggleTheme && (
                <li
                  className="theme-toggle-li"
                  style={{ display: "flex", alignItems: "center", padding: "12px 20px" }}
                >
                  <button
                    type="button"
                    onClick={toggleTheme}
                    title={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
                    aria-label="Toggle theme"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      color: theme.text,
                      padding: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>{themeMode === "dark" ? "☀️" : "🌙"}</span>
                    <span className="theme-toggle-label" style={{ fontSize: "14px", color: theme.secondaryText }}>
                      {themeMode === "dark" ? "Light Mode" : "Dark Mode"}
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
