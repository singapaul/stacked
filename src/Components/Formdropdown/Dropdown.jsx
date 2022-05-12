import React from "react";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const showForm = () => {
    setShowDropdown(!showDropdown);
  };

  const buttonText = showDropdown ? "Close" : "+ Workout";
  return (
    <div className="dropdown-wrapper">
      <button onClick={showForm} className="dropdown-wrapper__button">
        {buttonText}
      </button>
      <WorkoutForm showDropdown={showDropdown} />
    </div>
  );
};

export default Dropdown;
