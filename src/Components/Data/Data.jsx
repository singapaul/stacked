import "./Data.scss";

import React from "react";
import Smallcard from "../SmallCard/Smallcard";

const Data = () => {
  // make teh big card have todays date e.t.c.
  return (
    <>
      <div className="Data">
        <div className="Data__big">
          <Smallcard
            isSmall={false}
            icon="22/04/2022"
            description={"Log new workout"}
            weight={"PLACEHOLDER"}
          />
        </div>
        <div className="Data__small">
          <Smallcard
            isSmall={true}
            icon="⚖️"
            description={"Current weight"}
            weight={"86kg"}
          />
        </div>
        <div className="Data__small">
          <Smallcard
            isSmall={true}
            icon="🏋🏻"
            description={"Heaviest workout"}
            weight={"400kg"}
          />
        </div>
        <div className="Data__small">
          <Smallcard
            isSmall={true}
            icon="📉 "
            description={"Lift More"}
            weight={"Lat pulldown"}
          />
        </div>
      </div>
    </>
  );
};

export default Data;
