import React from "react";
import { Link } from "react-router-dom";
// css imported in find projects.jsx

function ProjectCard({ data, setProjectInfo }) {
  return (
    <div className="project-card">
      <span className="card-diificulty">{data.difficulty}</span>
      <h2 className="card-heading">{data.tittle} </h2>
      <p className="card-description">{data.description}</p>
      <p className="card-tech">
        {data.tech.map((e) => {
          return (
            <>
              <span>{e}</span>
            </>
          );
        })}
      </p>

      <Link to="/ProjectDetail">
        <button
          className="card-btn"
          onClick={() =>
            setProjectInfo({
              difficulty: data.difficulty,
              description: data.description,
              tittle: data.tittle,
              tech: data.tech,
              link: data.link,
            })
          }
        >
          View Project -
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;
