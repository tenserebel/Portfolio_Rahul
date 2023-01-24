import React from "react";

import "../styles/project.css";
const ProjectCard = ({
  project_name,
  project_stack,
  project_detail,
  project_link,
  project_back,
}) => {
  return (
    <div class="proj-container" id="proj1">
      <div class="proj_bg">
        <img
          className="project-back-img"
          src={project_back}
          alt="project_background"
        />
      </div>
      <div class="proj_title">
        <p>{project_name}</p>
      </div>
      <div class="proj_desc">
        <p>{project_stack}</p>
      </div>
      <div class="proj_info limit">
        <p>
          {project_detail}
          <br></br>
          <a href={project_link} className="project-link">
            Link
          </a>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCard;
