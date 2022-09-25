import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import data from './data'
import Nav from "./components/Nav";
import Card from "./components/Card"

const App = () => {
  const cardDate = data.map( item =>{
    return (
      <Card
        item={item} />
    );
  })
  return (
    <div className="container">
      <div className="card-content">
      <Nav />
      <main>
        {cardDate}
      </main>
      </div>
    </div>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
