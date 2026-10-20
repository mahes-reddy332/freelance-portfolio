import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, newTab, theme }) {
  if (href && href.startsWith("/") && !newTab) {
    return (
      <div className={className}>
        <Link
          to={href}
          className="main-button"
          style={{
            color: theme.body,
            backgroundColor: theme.text,
            border: `solid 1px ${theme.text}`,
          }}
          onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
          onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
        >
          {text}
        </Link>
      </div>
    );
  }

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
      >
        {text}
      </a>
    </div>
  );
}
