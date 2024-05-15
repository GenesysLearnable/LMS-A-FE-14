import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import ITimage from "../images/IT&Software.png";
import star from "../images/Star .png";
import user from "../images/User.svg";
import design from "../images/design.png";
import development from "../images/development.png";
import marketing from "../images/marketing.png";

const StudentSavedCourse = () => {
  return (
    <div>
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
          <span className="nav-text-link">GoLearn Business</span>
          <span className="nav-text-link">Admin</span>
          <FontAwesomeIcon icon={faBell} className="notification-icon" />
          <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
        </div>
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li>My Course</li>
            <li className="active">Saved</li>
            <li>Reminder</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <div className="saved-course-main-container">
        <div className="saved-card-row1">
          <div className="saved-card">
            <img className="it-image" src={ITimage} alt="IT"></img>
            <div className="saved-title-text">
              <p>IT & SOFTWARE</p>
              <p>$35</p>
            </div>
            <h6>Learn Python Programming Matsreclass</h6>
            <div>
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.0</p>
              </div>
              <div>
                <img src={user} alt="user" />
                <p>211,434</p>
                <p>students</p>
              </div>
            </div>
          </div>

          <div className="saved-card">
            <img className="it-image" src={design} alt="IT"></img>
            <div className="saved-title-text">
              <p>IT & SOFTWARE</p>
              <p>$35</p>
            </div>
            <h6>Learn Python Programming Matsreclass</h6>
            <div>
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.0</p>
              </div>
              <div>
                <img src={user} alt="user" />
                <p>211,434</p>
                <p>students</p>
              </div>
            </div>
          </div>

          <div className="saved-card">
            <img className="it-image" src={development} alt="IT"></img>
            <div className="saved-title-text">
              <p>IT & SOFTWARE</p>
              <p>$35</p>
            </div>
            <h6>Learn Python Programming Matsreclass</h6>
            <div>
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.0</p>
              </div>
              <div>
                <img src={user} alt="user" />
                <p>211,434</p>
                <p>students</p>
              </div>
            </div>
          </div>

          <div className="saved-card">
            <img className="it-image" src={marketing} alt="IT"></img>
            <div className="saved-title-text">
              <p>IT & SOFTWARE</p>
              <p>$35</p>
            </div>
            <h6>Learn Python Programming Matsreclass</h6>
            <div>
              <div className="saved-star-left">
                <img src={star} alt="star"></img>
                <p>4.0</p>
              </div>
              <div>
                <img src={user} alt="user" />
                <p>211,434</p>
                <p>students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSavedCourse;
