import React, { useState } from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import Footer from "./Footer.jsx";
import joel from "../images/joel.png";
import email from "../images/email.svg";
import naija from "../images/naija.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WarningPage from "./WarningPage.jsx";
import ExitPage from "./ExitPage.jsx";

const StudentProfileLogout = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [showExit, setShowExit] = useState(false);

  const handleLogoutClick = () => {
    setShowWarning(true);
  };

  const handleCancel = () => {
    setShowWarning(false);
  };

  const handleExit = () => {
    setShowWarning(false);
    setShowExit(true);
  };

  const handleExitPageClose = () => {
    setShowExit(false);
  };

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
          <p className="logout-icon logout-profile" onClick={handleLogoutClick}>
            <FontAwesomeIcon
              icon={faDoorOpen}
              className="logout-profile-icon"
            />{" "}
            Logout
          </p>
          <Link to="/profile">
            <FontAwesomeIcon icon={faCircleUser} className="user-icon " />
          </Link>
        </div>
        <div className="navbar-links">
          <ul>
            <Link to="/explore">
              <li>Home</li>
            </Link>
            <Link to="/mycourse">
              <li>My Course</li>
            </Link>
            <Link to="/savedcourse">
              <li>Saved</li>
            </Link>
            <Link to="/remind">
              <li>Reminder</li>
            </Link>
            <Link to="/cart">
              <li>In Review (34)</li>
            </Link>
          </ul>
        </div>
      </div>
      {/*BODY STARTS HERE!!!*/}
      <div className="saved-general-container">
        <div className="std-profile-container">
          <div className="std-main-profile">
            <h3>Profile</h3>
            <div className="std-profile-details">
              <img
                className="profile-hero-image"
                src={joel}
                alt="student"
              ></img>
              <div className="std-profile-body">
                <p className="std-name">
                  Joel Michael | <span>Product Designer</span>
                </p>
                <div className="std-address">
                  <div className="profile-country">
                    <img src={naija} alt="country"></img>
                    <p>Benin City, Nigeria</p>
                  </div>
                  <div className="std-email-address">
                    <img src={email} alt="email address"></img>
                    <p>cherrystouch@gmail.com</p>
                  </div>
                </div>
                <p>
                  In my work I am always eager to learn new techniques in
                  design, print media, Graphics and video production with
                  excellent conceptualization skills, and the ability to develop
                  creative solutions that meet all deadlines. As an avid learner
                  and quick thinker, I'm constantly searching for opportunities
                  to improve myself and add to my skill set so as to provide the
                  best experience possible for clients and colleagues alike.
                </p>
              </div>
            </div>
            <div className="std-certification">
              <div className="std-profile-row">
                <p>Completed Courses (0)</p>
                <p>Certificates (0)</p>
                <p>Skills</p>
              </div>

              <div className="std-profile-row">
                <p>Course in progress (0)</p>
                <p>Work Experience</p>
                <p>Additional Certificate</p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      {showWarning && (
        <WarningPage onCancel={handleCancel} onExit={handleExit} />
      )}
      {showExit && <ExitPage onClose={handleExitPageClose} />}
    </div>
  );
};

export default StudentProfileLogout;
