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

function App() {
  const [ListOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getProjects").then((response) => {
      setListOfProjects(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home ListOfProjects={ListOfProjects} />
          </Route>
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
          <Route path="/allProjects" component={AllProjects} exact>
            <AllProjects ListOfProjects={ListOfProjects} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
