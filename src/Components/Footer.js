import React from "react";
import { useLocation } from "react-router";
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
          <small>
            &copy;2023 <strong>Phoenix Corp</strong>, All Rights Reserved
          </small>
          <nav class="footer-nav">
            <a href="/home">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Us</a>
            <a href="/resume">Resume</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
