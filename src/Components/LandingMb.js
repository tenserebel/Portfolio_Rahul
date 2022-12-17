import React from "react";
import { motion } from "framer-motion";
const LandingMb = () => {
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
          {/* <div>
          <img src="images/loading icon.gif" />
        </div> */}
          <div>
            <svg viewBox="0 0 1880 720">
              <text x="20%" y="20%">
                Hello.
              </text>
            </svg>
          </div>
        </div>
        <div id="bottom"></div>

        <div id="redirect">{/* <RedirectHome /> */}</div>
      </motion.div>
    </body>
  );
};

export default LandingMb;
