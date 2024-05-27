import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function WarningPage({ onCancel, onExit }) {
  return (
    <div>
      <div className="overlay">
        <div className="cancel-icon-box">
          <FontAwesomeIcon className="cancel-icon" icon={faXmark} />
        </div>
        <div className="warn-icon-box">
          <FontAwesomeIcon
            className="warn-icon"
            icon={faCircleExclamation}
            size="2xl"
          />
        </div>
        <div>
          <div className="warning-page">
            <h2>Warning!</h2>
            <p>
              Are you sure you want to exit this page? This action cannot be
              undone!
            </p>
            <div className="logout-cancel-bts">
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
  );
}
