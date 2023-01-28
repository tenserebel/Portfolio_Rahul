import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/landing.css";
import { motion } from "framer-motion";
import { useTitle } from "../Components/Title";

const RedirectHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3800);
  }, [navigate]);
};

const Landing = () => {
  useTitle("Landing");

  useEffect(() => {
    const timer = setTimeout(() => {
      const buttons = document.getElementById("bottom");
      var id = buttons.getAttribute("id");

      var layerClass = "." + id + "-layer";
      var layers = document.querySelectorAll(layerClass);

      for (const layer of layers) {
        layer.classList.toggle("active");
      }
    }, 2680);
    return () => clearTimeout(timer);
  }, []);

  return (
    <body className="body">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="bottom-layer"></div>
          <div className="bottom-layer bottom-layer--2"></div>
          <div className="bottom-layer bottom-layer--3"></div>

          <div>
            <svg viewBox="0 0 1280 720">
              <text text-anchor="middle" x="50%" y="50%">
                Hello.
              </text>
            </svg>
          </div>
        </div>
        <div id="bottom"></div>

        <div id="redirect">
          <RedirectHome />
        </div>
      </motion.div>
    </body>
  );
};

export default Landing;
