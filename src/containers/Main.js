import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ResumePage from "../pages/resume/Resume.js";

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }
  render() {
    const routerBaseName = process.env.PUBLIC_URL
      ? new URL(process.env.PUBLIC_URL, window.location.origin).pathname.replace(
          /\/$/,
          ""
        ) || "/"
      : "/";

    const theme = this.props.theme;
    const toggleTheme = this.props.toggleTheme;
    const themeMode = this.props.themeMode;

    return (
      <BrowserRouter basename={routerBaseName}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
              ) : (
                <Home {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => (
              <Home {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
            )}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
            )}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => (
                <Splash {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
              )}
            />
          )}

          <Route
            path="/projects"
            render={(props) => (
              <Projects {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
            )}
          />
          <Route
            path="/resume"
            render={(props) => (
              <ResumePage {...props} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode} />
            )}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
