import React from "react";
import ReactDom from "react-dom";

const Nav = () =>{
  return (
    <nav>
      <p>MYlogo</p>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}   

const MyPage = () =>{
  return (
    <>
      <ul>
        List of Cafe stores
        <li>Local shop</li>
        <li>SuperMarket</li>
        <li>I don't know any other option</li>
      </ul>
    </>
  );
}

const App = () =>{
  return(
    <>
    <Nav />
    <MyPage />
    </>
  )
}
ReactDom.render(<App />, document.getElementById("root"));
