import React from "react";
import Header from "./Header";
import FindProject from "./FindProject";
import Quote from "./Quote";

function Home({ ListOfProjects, setProjectInfo, setProjectId, Loading }) {
  return (
    <div>
      <Header />
      <FindProject
        ListOfProjects={ListOfProjects}
        setProjectInfo={setProjectInfo}
        setProjectId={setProjectId}
        Loading={Loading}
      />
      <Quote />
    </div>
  );
}

export default Home;
