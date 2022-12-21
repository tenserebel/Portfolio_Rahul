import React from "react";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

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
  {
    path: "/resume",
    element: <Resume />,
  },
];

export default routes;
