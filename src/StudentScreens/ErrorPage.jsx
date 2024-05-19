import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import Footer from "./Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import error from "../images/Error.png";
import leftarrow from "../images/LeftArrow.png";

export default function ErrorPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="navbar-container">
        <div className="navbar">
          <img
            className="navbar-logo"
            src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
            alt="Logo"
          />
          <span className="nav-text">Explore</span>
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search Course" />
          </div>
          <span className="nav-text-link nav-text-link-error">
            GoLearn Business
          </span>
          <span className="nav-text-link nav-text-link-error">Instructor</span>
        </div>
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li>My Course</li>
            <li>Saved</li>
            <li>Reminder</li>
            <li>Cart</li>
            <li>Certificates</li>
          </ul>
        </div>
      </div>

      <div className="error-container">
        <div className="error-body">
          <div className="error-text">
            <p>Sorry, we couldn’t find any results</p>
            <p>Try adjusting your search. Here are some ideas:</p>
            <li>Make sure all words are spelled correctly</li>
            <li>Try different search terms</li>
            <li>Try more general search terms</li>
          </div>
          <img src={error} alt="error" />
        </div>
        <div className="error-btn">
          <img src={leftarrow} alt="left arrow" />
          <p>Back to Home</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
