import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function Courses() {
  return (
    <div className="course-container">
      <p>Select Course</p>
      <div className="course-cat">
        <div className="course-title">
          <div className="c1">
            <p className="course-text">
              Application Development
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>

            <p className="course-text">
              Cloud Computing
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>

            <p className="course-text">
              Data Science
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>
          </div>

          <div className="c2">
            <p className="course-text">
              Design
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>

            <p className="course-text">
              Digital Marketing
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>

            <p className="course-text">
              Information/Cyber Security
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>
          </div>

          <div className="c3">
            <p className="course-text">
              Website Design/Engineer
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>

            <p className="course-text">
              Product Management
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>

            <p className="course-text">
              Software Programming
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </p>
          </div>
        </div>
      </div>
      <div className="course-btn">
        <button className="course-btn-1">
          <a href="#">Skip</a>
          {/* <Link to="/skip">skip</Link> */}
        </button>
        <button className="couse-btn-2">
          <a href="#">GoLearn!</a>
          {/* <Link to="/golearn">GoLearn!</Link> */}
        </button>
      </div>
    </div>
  );
}

export default Courses;
