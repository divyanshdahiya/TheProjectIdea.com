import React from "react";
import Header from "./Header";
import FindProject from "./FindProject";
import Quote from "./Quote";

function Home({ ListOfProjects }) {
  return (
    <div>
      <Header />
      <FindProject ListOfProjects={ListOfProjects} />
      <Quote />
    </div>
  );
}

export default Home;
