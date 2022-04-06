import React from "react";
import Header from "./Header";
import FindProject from "./FindProject";
import Quote from "./Quote";

function Home({ ListOfProjects, setProjectInfo, setProjectId }) {
  return (
    <div>
      <Header />
      <FindProject
        ListOfProjects={ListOfProjects}
        setProjectInfo={setProjectInfo}
        setProjectId={setProjectId}
      />
      <Quote />
    </div>
  );
}

export default Home;
