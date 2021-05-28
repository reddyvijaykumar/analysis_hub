import React from "react";
import Model from "./components/Model";
import Selection from "./components/Selection";
import { data } from "./components/data";
import "./App.css";

const App = () => {
  // console.log(data);
  return (
    <div className="container">
      <Model data={data} />
      <Selection />
    </div>
  );
};

export default App;
