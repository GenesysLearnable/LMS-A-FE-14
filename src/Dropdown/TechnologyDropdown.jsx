import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./technologyDropdown.css";

export default function TechnologyDropdown() {
  return (
    <div>
      <div className="tech-dropdown-container">
        <ul>
          <span>
            <p>Data Science</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Information/Cyber Security</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Product Management</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Software Programming</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
        </ul>
      </div>
    </div>
  );
}
