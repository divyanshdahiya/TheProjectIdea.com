import React from "react";

function ProjectDetail({ ProjectInfo }) {
  console.log(ProjectInfo);

  return (
    <div>
      <h1>{ProjectInfo.difficulty}</h1>
    </div>
  );
}

export default ProjectDetail;
