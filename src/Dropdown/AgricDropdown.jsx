import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './agricDropdown.css';

export default function AgricDropdown() {
  return (
    <div>
      <div className='agric-dropdown-container'>
        <ul>
          <span>
            <p>Agricultural Economics</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Agricultural Management</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Agricultural Science</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Farming</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Food Science</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>Horticulture, Forestry, Fishery</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
          <span>
            <p>IoT Enabled Farming</p>
            <FontAwesomeIcon icon={faArrowRight} className="category-arrow" />
          </span>
        </ul>
      </div>
    </div>
  );
}
