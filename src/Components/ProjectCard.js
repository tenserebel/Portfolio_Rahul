import React from "react";

import "../styles/project.css";
const ProjectCard = ({ project_name, project_stack }) => {
  return (
    <div class="proj-container" id="proj1">
      <div class="proj_bg"></div>
      <div class="proj_title">
        <p>{project_name}</p>
      </div>
      <div class="proj_desc">
        <p>{project_stack}</p>
      </div>
      <div class="proj_info limit">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis
          nulla id mauris accumsan, ultrices sollicitudin turpis feugiat.
          Integer molestie, leo euismod pretium euismod, arcu est consequat
          metus, non porttitor mauris orci vel eros. Mauris tincidunt fermentum
          quam, vitae dictum sem vestibulum eget. Maecenas lobortis faucibus
          ultrices. Nam lacus nisi, placerat sed congue a, tincidunt congue
          dolor. Vestibulum eget ante pellentesque eros tristique gravida.
          <br></br>
          <a href="https://www.w3schools.com" className="project-link">
            Link
          </a>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCard;
