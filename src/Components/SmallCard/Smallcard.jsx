import React from "react";
import "./Smallcard.scss";

const Smallcard = ({ icon, description, weight, isSmall }) => {
  const CardSizeclass = isSmall ? "smallCard" : "largeCard";
  return (
    <div className={CardSizeclass}>
      <p className={`${CardSizeclass}__icon`}>{icon}</p>
      <p className={`${CardSizeclass}__desc`}>{description}</p>
      <p className={`${CardSizeclass}__weight`}>{weight}</p>
    </div>
  );
};

export default Smallcard;
