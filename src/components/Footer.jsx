import React from "react";
import wave from "../images/wave.svg";
import "./styles/footer.css";

function Footer() {
  return (
    <div>
      <div id="footer" className="footer-above">
        <img className="footer-img" src={wave} alt="footer" />
      </div>
      <footer>
        <div className=" footer-content container-footer">
          <div className="sec about">
            <h2>About Us</h2>
            <p>
              Still writing “Hello World” ? Build real-world projects. Bridge
              the gap between learning and applying new skills through projects!
            </p>
            <ul className="social">
              <li>
                <a href="/" target="_blank">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  {/* <i class="fa fa-youtube-play" aria-hidden="true"></i> */}
                </a>
              </li>
              <li>
                <a href="/">
                  {/* <i class="fa fa-instagram" aria-hidden="true"></i> */}
                </a>
              </li>
              <li>
                <a href="/">
                  {/* <i class="fa fa-twitter" aria-hidden="true"></i> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
          <div className="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">RHome</a>
              </li>
              <li>
                <a href="/">Home</a>
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
      </div>
    </div>
  );
}

export default Footer;
