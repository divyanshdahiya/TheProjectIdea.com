import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProjectCard from "./ProjectCard";

function AllProjects() {
  const [ListOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getProjects").then((response) => {
      setListOfProjects(response.data);
    });
  }, []);

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
