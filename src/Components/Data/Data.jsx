import "./Data.scss";

import React from "react";
import Smallcard from "../SmallCard/Smallcard";

const Data = () => {
  return (
    <>
      <div className="Data">
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
