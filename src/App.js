import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [Loading, setLoading] = useState(false);
  const [ListOfProjects, setListOfProjects] = useState([]);
  const [ProjectInfo, setProjectInfo] = useState({});
  const [ProjectId, setProjectId] = useState(`6223b9cf13d911bac674eff6`)

  useEffect(() => {
    Axios.get("https://theprojectidea-divyansh.herokuapp.com/getProjects").then((response) => {
      setListOfProjects(response.data);
      setLoading(true)
    });
    
  }, []);

  useEffect(() => {
    Axios.get(`https://theprojectidea-divyansh.herokuapp.com/getProjects/${ProjectId}`).then((data) => {
      
         setProjectInfo({
             difficulty: data.data.difficulty,
            description: data.data.description,
            tittle: data.data.tittle,
            tech: data.data.tech,
            githublink: data.data.githublink,
            articlelink: data.data.articlelink,
            videolink: data.data.videolink,
          })
      
       }
    );
  }, [ProjectId]);


  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home
              ListOfProjects={ListOfProjects}
              setProjectInfo={setProjectInfo}
              setProjectId={setProjectId}
              Loading={Loading}
            />
          </Route>
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/blogs" component={Blogs} exact>
            <Blogs />
          </Route>
          <Route path="/allProjects" component={AllProjects} exact>
            <AllProjects
              ListOfProjects={ListOfProjects}
              setProjectInfo={setProjectInfo}
              setProjectId={setProjectId}
            />
          </Route>
          <Route path = '/ProjectDetail' component={ProjectDetail} exact>
            <ProjectDetail
              ProjectInfo={ProjectInfo}
              ListOfProjects={ListOfProjects}
              setProjectInfo={setProjectInfo}
              setProjectId={setProjectId}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
