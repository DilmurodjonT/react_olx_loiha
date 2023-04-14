import React from "react";
import c from "./Components.module.scss";
import { Link } from "react-router-dom";

const Container = ({ children }) => {
  return <div className={c.container}>{children}</div>;
};

const UniversalLink = ({ text, link, icon }) => {
  return (
    <Link to={link} className={c.navbar__link}>
      {icon}
      {text}
    </Link>
  );
};

const MainLink = ({ text, link, type }) => {
  return (
    <Link
      to={link}
      className={type === "light" ? c.main__link : c.main__linck__dark}
    >
      {text}
    </Link>
  );
};

export { Container, UniversalLink, MainLink };
