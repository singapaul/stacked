import React from "react";
import "./Greeting.scss";
import paul from "../../Assets/paulrunning.jpg";

const Greeting = () => {
  return (
    <>
      <div className="greeting">
        <div className="greeting__text">
          <h2 className="greeting__greet">Welcome back</h2>
          <h1 className="greeting__name">Paul Hardman</h1>
        </div>
        <img className="greeting__photo" src={paul} alt="" />
      </div>
    </>
  );
};

export default Greeting;
