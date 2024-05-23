import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./UxheroStyle.css";

const TwoStar = () => {
  return (
    <div className="user-rating">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
};

export default TwoStar;
