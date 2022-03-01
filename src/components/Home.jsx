import React from "react";
import Header from "./Header";
import FindProject from "./FindProject";
import Quote from "./Quote";

function Home({ ListOfProjects, setProjectInfo }) {
  return (
    <div>
      <Header />
      <FindProject
        ListOfProjects={ListOfProjects}
        setProjectInfo={setProjectInfo}
      />
      <Quote />
    </div>
  );
}

export default Home;
