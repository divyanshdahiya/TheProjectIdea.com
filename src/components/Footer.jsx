import React from "react";
import wave from "../images/wave.svg";
import "./styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div id="footer" className="footer-above">
        <img className="footer-img" src={wave} alt="footer" />
      </div>
      <footer>
        <div className=" footer-content container-footer">
          <div className="sec about">
            <h1>The Project Idea</h1>
            <p>
              Still writing “Hello World” ? Build real-world projects. Bridge
              the gap between learning and applying new skills through projects!
            </p>
            <ul className="social">
              <li>
                <Link to="/">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  {/* <i class="fa fa-youtube-play" aria-hidden="true"></i> */}
                </Link>
              </li>
              <li>
                <Link to="/">
                  {/* <i class="fa fa-instagram" aria-hidden="true"></i> */}
                </Link>
              </li>
              <li>
                <Link to="/">
                  {/* <i class="fa fa-twitter" aria-hidden="true"></i> */}
                </Link>
              </li>
            </ul>
          </div>
          <div className="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allProjects">All Projects</Link>
              </li>
              <li>
                <Link to="/">Github</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          Copyright © {new Date().getFullYear()} The Project Idea. All Rights
          Reserved
        </p>
        <p> Created by Divyansh Dahiya</p>
      </div>
    </div>
  );
}

export default Footer;
