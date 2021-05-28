import React from "react";

const ModelList = ({ features }) => {
  const summaryHandler = (feature) => {
    console.log(feature);
  };
  return (
    <div>
      {features.map((feature, index) => {
        return (
          <li key={index}>
            <button type="button" onClick={() => summaryHandler(feature)}>
              {feature.name}
            </button>
            <span>
              <button type="button" onClick={() => summaryHandler(feature)}>
                &gt;
              </button>
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default ModelList;
