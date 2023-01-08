import React from "react";
import "../styles/project.css";
import Layout from "../Components/Layout";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  return (
    <Layout>
      <div>
        <h1 className="font-style-header-project">Projects</h1>
        <h2>This is a new page</h2>
        <ProjectCard
          project_name={"Recommendation system"}
          project_stack={"HTML | CSS | Javascript"}
        />
        <ProjectCard
          project_name={"Recommendation system"}
          project_stack={"HTML | CSS | Javascript"}
        />
        <ProjectCard
          project_name={"Recommendation system"}
          project_stack={"HTML | CSS | Javascript"}
        />
        <ProjectCard
          project_name={"Recommendation system"}
          project_stack={"HTML | CSS | Javascript"}
        />
      </div>
    </Layout>
  );
};

export default Projects;
