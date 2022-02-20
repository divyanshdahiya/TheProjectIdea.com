import React from "react";
import image from "../images/header.png";
import "./styles/home.css";
import { BiSelectMultiple } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container header-container">
          <div className="header-content">
            <h1>Learn by building projects!</h1>
            <p>
              Still writing “Hello World” ? Build real-world projects. Bridge
              the gap between learning and applying new skills through projects!
            </p>

            <Link to="/allProjects">
              <button>Get Started</button>
            </Link>
          </div>
          <div>
            <img className="header-img" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="home-info container">
        <h1>A Powerful and Effective Way To Boost Your Developer Career</h1>
        <p>
          The best way to learn a skill is by applying what you learn in real
          scenarios. At The Project Idea, we take it a notch higher by giving
          you actual work experience-based learning. So, instead of just
          watching tutorials, you actually experience building real products
          like professional engineers.
        </p>
      </div>
      <div className="header2 container">
        <h1 className="header2-heading">How It Works</h1>
        <div className="header2-content">
          <div className="header2-item">
            <BiSelectMultiple className="header2-icon" />
            <h2>Select Your Project</h2>
            <p>
              Find a project that fit's with your current skills from our hand
              selected list of projects
            </p>
          </div>
          <div className="header2-item">
            <BiDownload className="header2-icon" />
            <h2>Download the Files</h2>
            <p>
              Download the files attached to the project, So you dont have to
              setup everything
            </p>
          </div>
          <div className="header2-item">
            <BiCodeAlt className="header2-icon" />
            <h2>Start Coding</h2>
            <p>Lets Code, Open up your code editor and show your skills</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
