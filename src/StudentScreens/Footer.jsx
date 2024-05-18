import React from 'react';
import "../App.css";
import logo from "../images/golearn-logo.png";
import facebook from "../images/Facebook.svg";
import github from "../images/Github.svg";
import google from "../images/googleicon.svg";
import twitter from "../images/Twitter.svg";
import microsoft from "../images/Microsoft.svg";

export default function Footer() {
  return (
    <div>
      <footer className="saved-footer">
        <div className="saved-footer-first">
          <img src={logo} alt="logo" />
          <p>
            Empowering learners through accessible and engaging online
            education. <br /> GoLearn is a leading online learning platform
            dedicated to providing high-quality, flexible, and affordable
            educational experiences.
          </p>
        </div>
        <div className="saved-footer-second">
          <h3>Get Help</h3>
          <div className="saved-footer-help">
            <p>Contact Us</p>
            <p>Latest Articles</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="saved-footer-third">
          <h3>Careers</h3>
          <div className="saved-footer-help">
            <p>Arts & Design</p>
            <p>Business</p>
            <p>IT & Software</p>
            <p>Language</p>
            <p>Programming</p>
          </div>
        </div>
        <div className="saved-footer-fourth">
          <h3>Contact Us</h3>
          <div className="saved-footer-help">
            <p>Press</p>
            <p>Investors</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Help</p>
            <p>Accessibility</p>
            <p>Contact</p>
            <p>Articles</p>
            <p>Directory</p>
            <p>Affiliates</p>
            <p>Modern Slavery Statement</p>
            <p>Manage Cookie Preferences</p>
          </div>
          <div className="saved-socials">
            <img src={facebook} alt="facebook"></img>
            <img src={github} alt="facebook"></img>
            <img src={google} alt="facebook"></img>
            <img src={twitter} alt="facebook"></img>
            <img src={microsoft} alt="facebook"></img>
          </div>
        </div>
      </footer>
    </div>
  );
}
