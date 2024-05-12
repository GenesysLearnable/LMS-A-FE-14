import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Welcome() {
  return (
    <div className="welcome-title">
      <h1>Welcome Chidera,</h1>
      <span>Get GoLearn up and running personalised to your needs</span>

      <p>Select Category</p>
      <div className="category-box">
        <ul>
          <li>
            <FontAwesomeIcon icon={faTractor} className="category-icon" />
            <span>
              <Link to="/agriculture">Agriculture</Link>
            </span>
            <p>
              500 Courses available
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faPen} className="category-icon" />
            <span>
              <Link to="/art">Art</Link>
            </span>
            <p>
              700 Courses available
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} className="category-icon" />
            <span>
              <Link to="/business">Business</Link>
            </span>
            <p>
              743 Courses available
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faDesktop} className="category-icon" />
            <span>
              <Link to="/technology">Technology</Link>
            </span>
            <p>
              480 Courses available
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Welcome;
