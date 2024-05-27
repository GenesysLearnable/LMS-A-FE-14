import React, {useState} from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faDoorOpen
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cartnav = () => {
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
          <FontAwesomeIcon icon={faDoorOpen} className="logout-profile-icon" />{" "}
          Logout
        </p>
        <Link to="/profile">
          <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
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
            <li className="active">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Cartnav;
