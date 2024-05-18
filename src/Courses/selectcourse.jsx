import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../component/welcomeheader";


function Courses() {
  return (
    <div>
      <Header />
      <p className="header-text">2/2</p>
      <div className="course-container">
        <p className="course-header-text">Select Course</p>
        <div className="course-cat">
          <div className="course-title">
            <div className="c11">
              <p className="course-text">
                Application Development
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>

              <p className="course-text">
                Design
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>

              <p className="course-text">
                Website Design/Engineer
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>
            </div>

            <div className="c22">
              <p className="course-text">
                Cloud Computing
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>

              <p className="course-text">
                Digital Marketing
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>

              <p className="course-text">
                Product Management
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>
            </div>

            <div className="c33">
              <p className="course-text">
                Data Science
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>

              <p className="course-text">
                Information/Cyber Security
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>

              <p className="course-text">
                Software Programming
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="category-arrow"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="course-btn">
            <Link to="/skip" className="course-btn-link1">
              skip
            </Link>
            <Link to="/golearn" className="course-btn-link2">
              GoLearn!
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Courses;
