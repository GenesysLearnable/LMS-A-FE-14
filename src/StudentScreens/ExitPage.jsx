import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import group from "../images/Group.svg";

const ExitPage = ({onClose}) => {
  return (
    <div className="overlay more-width">
      <div className="cancel-icon-box2">
        <FontAwesomeIcon
          className="cancel-icon"
          icon={faXmark}
          onClick={onClose}
        />
      </div>
      <div className="good-icon-box">
        <img className="good-icon" src={group} alt="good mark" />
      </div>
      <div className="exit-page">
        <h2>Exit Successful!</h2>
        <p>You’ve successfully exited.</p>
      </div>
    </div>
  );
};

export default ExitPage;
