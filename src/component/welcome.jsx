import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTractor,
  faBriefcase,
  faDesktop,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "./welcomeheader";


function Welcome() {
  return (
    <div>
      <Header />
      <div className="welcome-title">
        <h1>Welcome Chidera,</h1>
        <span>Get GoLearn up and running personalised to your needs</span>

        <p>Select Category</p>
        <div className="category-box">
          <ul>
            <li>
              <FontAwesomeIcon icon={faTractor} className="category-icon" />
              <span>Agriculture</span>
              <p>0 Courses available</p>
            </li>
            <Link to="/explore" className="welcome-link">
              <li className="available-courses">
                <FontAwesomeIcon icon={faPen} className="category-icon" />
                <span>Art</span>
                <p>700 Courses available</p>
              </li>
            </Link>

            <li>
              <FontAwesomeIcon icon={faBriefcase} className="category-icon" />
              <span>Business</span>
              <p>0 Courses available</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faDesktop} className="category-icon" />
              <span>Technology</span>
              <p>0 Courses available</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
