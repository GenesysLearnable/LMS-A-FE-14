import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./UxheroStyle.css";

const OneStar = () => {
  return (
    <div className="user-rating">
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
};

export default OneStar;
