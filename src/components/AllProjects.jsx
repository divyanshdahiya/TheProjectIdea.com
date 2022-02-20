import React from "react";
import ProjectCard from "./ProjectCard";

function AllProjects({ ListOfProjects }) {
  return (
    <div>
      {ListOfProjects.map((data) => {
        return (
          <>
            <ProjectCard data={data} />
          </>
        );
      })}
    </div>
  );
}

export default AllProjects;
