import React from "react";
import ReactDom from "react-dom";
import Nav from './component/Nav'
import Main from './component/Main'
import Cards from './component/Cards'
import './index.css'
import img from './images/image 12.png'
import wedding from './images/wedding-photography 1.png'
import bike from './images/mountain-bike 1.png'

const App = () =>{
  return (
    <div className="container">
      <Nav />
      <Main />
      <div className="row">
        <Cards
          img = {img}
          alt="Zaferes USA"
          rating="5.0"
          grayTxt="(6). USA"
          title="Life lessons with Katie Zaferes"
          price="From $136"
        />
        <Cards
          img={wedding}
          alt='wedding photography'
          rating="5.0"
          grayTxt="(30). USA"
          title="Learn wedding photography"
          price="From $125"
        />
        <Cards
          img={bike}
          alt = 'Mountain bike'
          rating="4.8"
          grayTxt="(2). USA"
          title="Group Mountain Bikin"
          price="From $50"
        />
      </div>
    </div>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
