import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";
const Footer = () => {
  const location = useLocation();
  const ignoreEndpoints = ["/"];

  if (ignoreEndpoints.includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      <footer>
        <div class="wrapper">
          <hr style={{ width: "100%" }}></hr>
          <small style={{ padding: "0.7em 0.5em 0.7em 0.8em" }}>
            &copy;2023 <strong>Phoenix Corp</strong>, All Rights Reserved
          </small>
          <nav class="footer-nav">
            <NavLink to="/home">
              <a href="/home">Home</a>
            </NavLink>
            <NavLink to="projects">
              <a href="/projects">Projects</a>
            </NavLink>
            <NavLink to="contact">
              <a href="/contact">Contact Us</a>
            </NavLink>
            <NavLink to="/resume">
              <a href="/resume">Resume</a>
            </NavLink>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
