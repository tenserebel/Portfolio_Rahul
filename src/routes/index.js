import React from "react";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
];

export default routes;
