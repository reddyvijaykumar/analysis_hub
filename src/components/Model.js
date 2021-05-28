import React, { useState, useEffect } from "react";
import ModelList from "./ModelList";
import "./Model.css";

const Model = ({ data }) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    setResult(...data);
  }, [data]);

  return (
    <div className="model">
      <p>{result.study_name}</p>
      <div className="cross">&#10005;</div>
      <div className="list">
        <ul>
          {data.map((item, index) => {
            return <ModelList key={index} features={item.features} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Model;
