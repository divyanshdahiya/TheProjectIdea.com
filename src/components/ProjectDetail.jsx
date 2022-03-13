import React from "react";
import "./styles/projectDetail.css";
import ProjectCard from "./ProjectCard";

function ProjectDetail({ ProjectInfo, ListOfProjects, setProjectInfo }) {
  console.log(ProjectInfo);

  return (
    <>
      <div className="project-detail container">
        <h1 className="project-detail-heading">{ProjectInfo.tittle}</h1>
        <h2 className="project-detail-difficulty">
          Difficulty - {ProjectInfo.difficulty}
        </h2>
        <div className="project-detail-tech">
          <div>
            <h2>Tech Used -</h2>
          </div>
          <div>
            <p>
              {ProjectInfo.tech.map((e) => {
                return (
                  <>
                    <span className="project-detail-tech-item">{e},</span>
                  </>
                );
              })}{" "}
            </p>
          </div>
        </div>
        <div className="project-detail-description">
          <h3>Description -</h3>
          <p>{ProjectInfo.description}</p>
        </div>

        <div className="project-detail-links">
          <h3>Project Links -</h3>

          <a href={ProjectInfo.githublink} target="blank">
            <button className="card-btn">Github</button>
          </a>

          <a href={ProjectInfo.articlelink} target="blank">
            <button className="card-btn">Project Article</button>
          </a>

          <a href={ProjectInfo.videolink} target="blank">
            <button className="card-btn">Project Video</button>
          </a>
        </div>
      </div>

      <h2 className="project-detail-middle-heading">More Projects</h2>

      <div className="project-detail-other-cards">
        {ListOfProjects.slice(3, 9).map((data) => {
          return (
            <>
              <ProjectCard
                data={data}
                key={data.id}
                setProjectInfo={setProjectInfo}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProjectDetail;
