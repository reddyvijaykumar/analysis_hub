import React from "react";
import "./Selection.css";

const Selection = () => {
  return (
    <div className="selection">
      <div className="heading">
        <p>YOUR SELECTION</p>
      </div>
      <div className="details">
        <ul>
          <li>
            <div className="data">
              <p>ORGANISM</p>
              <p>Homo sapiens</p>
            </div>
            <div>
              <span className="edit">edit</span>
              <span className="cross">X</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="get-data-container">
        <button type="submit"></button>
      </div>
    </div>
  );
};

export default Selection;
