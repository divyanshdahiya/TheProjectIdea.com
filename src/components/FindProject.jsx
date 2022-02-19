import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/projectCard.css";
// css in ProjectCard.css

function FindProject() {
  return (
    <div className="container-findproject">
      <h1 className="find-project-heading1">Find your next project</h1>
      <h1 className="find-project-heading2">💻 Web development projects</h1>
      <div className="home-project">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="div-btn">
        <button className="container-findproject-btn">
          <a className="container-findproject-btn-a" href="/">
            View all Projects
          </a>
        </button>
      </div>
    </div>
  );
}

export default FindProject;
