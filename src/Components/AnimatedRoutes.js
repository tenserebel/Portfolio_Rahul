import React from "react";
import routes from "../routes";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route
            key={route.path}
            path={route.path}
            // exact
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
