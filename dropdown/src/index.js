import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
ReactDom.render(<App />, document.querySelector("#root"));
