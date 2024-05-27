import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

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
        <p className='logout-icon'>
          <FontAwesomeIcon icon={faDoorOpen} /> Logout
        </p>
        <Link to="/profile">
          <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/explore">
            <li className="active">Home</li>
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
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
