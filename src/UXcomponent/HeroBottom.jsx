import {
  faCheck,
  faXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './UxheroStyle.css'

const HeroBottom = () => {
  return (
    <div>
      <div className="payframe-container">
        <div>
          <h3 className="payframe-header">
            Try free Courses or enroll in paid courses
          </h3>
          <div className="payframe-grant">
            <FontAwesomeIcon className="attention" icon={faCircleExclamation} />
            <p className="attention-text">
              {" "}
              All courses have a 30-days money back guarantee
            </p>
          </div>
          <button className="grant-btn">
            View Paid User Experience Courses
          </button>
        </div>
        <div className="paid-options">
          <div>
            <h3>Free Courses</h3>
            <ul>
              <li>
                <FontAwesomeIcon className="good-mark" icon={faCheck} />
                Online video content
              </li>
              <li>
                <FontAwesomeIcon className="bad-mark" icon={faXmark} />
                Certificate of Completion
              </li>
              <li>
                <FontAwesomeIcon className="bad-mark" icon={faXmark} />
                Instructor Q&A
              </li>
              <li>
                <FontAwesomeIcon className="bad-mark" icon={faXmark} />
                Instructor direct message
              </li>
            </ul>
          </div>
          <div>
            <h3>Paid Courses</h3>
            <ul>
              <li>
                <FontAwesomeIcon className="good-mark" icon={faCheck} />
                Online video content
              </li>
              <li>
                <FontAwesomeIcon className="good-mark" icon={faCheck} />
                Certificate of Completion
              </li>
              <li>
                <FontAwesomeIcon className="good-mark" icon={faCheck} />
                Instructor Q&A
              </li>
              <li>
                <FontAwesomeIcon className="good-mark" icon={faCheck} />
                Instructor direct message
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBottom;
