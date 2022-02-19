import React from "react";
import wave from "../images/wave.svg";
import "./styles/footer.css";

function Footer() {
  return (
    <div>
      <div id="footer" class="footer-above">
        <img class="footer-img" src={wave} alt="footer" />
      </div>
      <footer>
        <div class=" footer-content container-footer">
          <div class="sec about">
            <h2>About Us</h2>
            <p>
              Still writing “Hello World” ? Build real-world projects. Bridge
              the gap between learning and applying new skills through projects!
            </p>
            <ul class="social">
              <li>
                <a
                  href="https://www.facebook.com/Sepaktakraw-india-1410783925801178"
                  target="_blank"
                >
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCFv0HgcL8GT9754jCjvNyjA/featured"
                  target="_blank"
                >
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="./#section1">Home</a>
              </li>
              <li>
                <a href="./notices-and-circulars.html">Notices And Circulars</a>
              </li>
              <li>
                <a href="./#gallery">Gallery</a>
              </li>
              <li>
                <a href="./MYAS-compliance.html">MYAS Compliance</a>
              </li>
            </ul>
          </div>
          <div class="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="./election2020.html">Elections 2020</a>
              </li>
              <li>
                <a href="./antidoping.html">Anti-Doping</a>
              </li>
              <li>
                <a href="./rules-&-regulations.html">Rules & Regulations</a>
              </li>
              <li>
                <a href="./history.html">STFI History</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div class="copyright">
        <p>
          Copyright © {new Date().getFullYear()} The Project Idea. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
