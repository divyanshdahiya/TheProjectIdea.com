import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/projectCard.css";
// css in ProjectCard.css
import { Link } from "react-router-dom";
import { MinimalSpinner } from "loading-animations-react";

function FindProject({
  ListOfProjects,
  setProjectInfo,
  setProjectId,
  Loading,
}) {
  return (
    <div className="container-findproject">
      <h1 className="find-project-heading1">Find your next project</h1>
      <h1 className="find-project-heading2">💻 Web development projects</h1>

      {Loading ? (
        <div>
          <div className="home-project">
            {ListOfProjects.slice(0, 3).map((data) => {
              return (
                <ProjectCard
                  data={data}
                  key={data._id}
                  setProjectInfo={setProjectInfo}
                  setProjectId={setProjectId}
                />
              );
            })}
          </div>
          <div className="div-btn">
            <Link className="container-findproject-btn-a" to="/allProjects">
              <button className="container-findproject-btn">
                View all Projects
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="home-spinner">
          <MinimalSpinner color="#ffbe00" />
        </div>
      )}
    </div>
  );
}

export default FindProject;
