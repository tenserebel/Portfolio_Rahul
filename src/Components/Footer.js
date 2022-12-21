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
            &copy;2022 <strong>Phoenix Corp</strong>, All Rights Reserved
          </small>
          <nav class="footer-nav">
            <a href="/home">Back to Top</a>
            <a href="/contact">Terms of Use</a>
            <a href="/projects">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
