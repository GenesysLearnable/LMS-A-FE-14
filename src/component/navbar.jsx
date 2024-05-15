import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
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
        <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
      </div>
      <div className="navbar-links">
        <ul>
          <li className="active">Home</li>
          <li>My Course</li>
          <li>Saved</li>
          <li>Reminder</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
