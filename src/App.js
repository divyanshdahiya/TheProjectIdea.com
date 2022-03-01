import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [ListOfProjects, setListOfProjects] = useState([]);
  const [ProjectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/getProjects").then((response) => {
      setListOfProjects(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home
              ListOfProjects={ListOfProjects}
              setProjectInfo={setProjectInfo}
            />
          </Route>
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
          <Route path="/allProjects" component={AllProjects} exact>
            <AllProjects
              ListOfProjects={ListOfProjects}
              setProjectInfo={setProjectInfo}
            />
          </Route>
          <Route path="/ProjectDetail" component={ProjectDetail} exact>
            <ProjectDetail ProjectInfo={ProjectInfo} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
