import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/allProjects.css";
import Image from "../images/allprojects-header.png";

function AllProjects({ ListOfProjects }) {
  return (
    <>
      <div className="allProjects-container">
        <div className="allProjects-content">
          <div>
            <img className="allProjects-img" src={Image} alt="Logo" />
          </div>
          <div>
            <h1>Best Web Development Projects</h1>
            <p>
              Bridge the gap between theory and real-world code by working on
              curated web development projects. Build projects to make your
              portfolio stand out from others. From beginner web development
              projects to more advanced ones, find your next coding project now!
            </p>
          </div>
        </div>
        <div className="allProjects-card">
          {ListOfProjects.map((data) => {
            return (
              <>
                <ProjectCard data={data} key={data._id} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllProjects;
