import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { modernDarkTheme, modernLightTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  const toggleTheme = () => {
    const nextMode = themeMode === "dark" ? "light" : "dark";
    setThemeMode(nextMode);
    localStorage.setItem("portfolio_theme", nextMode);
  };

  const currentTheme = themeMode === "dark" ? modernDarkTheme : modernLightTheme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    if (document.body) {
      document.body.style.backgroundColor = currentTheme.body;
      document.body.style.color = currentTheme.text;
    }
  }, [themeMode, currentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div className="portfolio-app-root">
          <Main
            theme={currentTheme}
            toggleTheme={toggleTheme}
            themeMode={themeMode}
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

