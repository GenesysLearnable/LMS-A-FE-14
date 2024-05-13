import React from 'react';
import './artDropdown.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArtDropdown() {
  return (
    <div>
      <div>
        <div className="art-dropdown-container">
          <ul>
            <span>
              <p>Architecture</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
            <span>
              <p>Design</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
            <span>
              <p>Virtual Art</p>
              <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
