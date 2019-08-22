import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, changeQuarter] = useState(1);
  const [down, changeDown] = useState(1);
  

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div className="bottom-row-button">
        <button onClick={() => changeQuarter(quarter + 1)}>Change Quarter</button>
        {quarter > 4 && (
          changeQuarter(1)
        )}
        <button onClick={() => changeDown(down + 1)}>Change Down</button>
        {down > 4 && (
          changeDown(1)
        )}
      </div>
    </div>
  );
};

export default BottomRow;
