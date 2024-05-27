import React from "react";
import "../App.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Link className="landing-link-explore-text" to="/www.facebook.com/">
              <img src={facebook} alt="facebook"></img>
            </Link>
            <Link className="landing-link-explore-text" to="/www.github.com/">
              <img src={github} alt="github"></img>
            </Link>
            <Link className="landing-link-explore-text" to="/www.mail.google.com/">
              <img src={google} alt="google"></img>
            </Link>
            <Link className="landing-link-explore-text" to="/www.twitter.com/">
              <img src={twitter} alt="twitter"></img>
            </Link>
            <Link className="landing-link-explore-text" to="/www.microsoft.com/">
              <img src={microsoft} alt="microsoft"></img>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
