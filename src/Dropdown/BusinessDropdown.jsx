import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./businessDropdown.css";

export default function BusinessDropdown() {
  return (
    <div>
      <div>
        <div className="business-dropdown-container">
          <ul>
            <span>
              <p>Accounting</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
            <span>
              <p>Business Analytics</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
            <span>
              <p>Business Management</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
            <span>
              <p>E-Commerce</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
            <span>
              <p>Economics</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
