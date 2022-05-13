import React from "react";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const showForm = (event) => {
    setShowDropdown(!showDropdown);
  };

  const demoToLearn = () => {
    console.log("pauls");
  };

  const closeButton = (
    <button onClick={showForm} className="dropdown-wrapper__button-close">
      Close
    </button>
  );

  const postButton = (
    <button onClick={showForm} className="dropdown-wrapper__button">
      ➕ new workout
    </button>
  );

  return (
    <div className="dropdown-wrapper">
      {showDropdown ? closeButton : postButton}
      <div className="liftGrid">
        <WorkoutForm demoFunc={showForm} showDropdown={showDropdown} />
      </div>
    </div>
  );
};

export default Dropdown;
