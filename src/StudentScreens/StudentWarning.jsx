import React from 'react';
import './WarningModal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";


const StudentWarning = ({ onCancel, onExit }) => {
  return (
    <div>
      <div className="logout-general-box">
        <FontAwesomeIcon icon={faXmark} className="cancel-icon" />
        <div>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="warning-icon"
            size="2xl"
          />
          <div>
            <div className="warning-card">
              <div className="warning-content">
                <h2>Warning!</h2>
                <p>
                  Are you sure you want to exit this page? This action cannot be
                  undone!
                </p>
                <div className="logout-btns">
                  <button className="logout-cancel-btn" onClick={onCancel}>
                    Cancel
                  </button>
                  <button className="logout-exit-btn" onClick={onExit}>
                    Exit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentWarning;




