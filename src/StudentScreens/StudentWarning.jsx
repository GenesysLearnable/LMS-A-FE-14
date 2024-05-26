import React from 'react';
import './StudentWarning.Exit.css';
import cancelicon from '..images/cancel.svg';
import warnicon from '..images/warning.svg';

const WarningPage = ({ onCancel, onExit }) => {
  return (
    <div>
      <div className="logout-general-box">
        <img src={cancelicon} alt="cancel" className="cancel-icon" />
        <div>
          <img
            src={warnicon}
            alt="warning"
            className="warning-icon"
           />
          <div>
            <div className="warning-card">
              <div className="warning-content">
                <h2>Warning!</h2>
                <p>
                  Are you sure you want to exit this page? This action cannot be
                  undone!
                </p>
                <div>
                  <button onClick={onCancel}>Cancel</button>
                  <button onClick={onExit}>Exit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningPage;




