import React from "react";
import Data from "../Data/Data";
import Greeting from "../Greeting/Greeting";
import "./WidgetContainer.scss";

const WidgetContainer = () => {
  return (
    <div className="Widget">
      {" "}
      <Greeting />
      <Data />
    </div>
  );
};

export default WidgetContainer;
