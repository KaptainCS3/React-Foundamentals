import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDom.render(<App />, document.querySelector("#root"));
