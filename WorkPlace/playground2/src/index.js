import React from "react";
import ReactDom from "react-dom";
import Nav from './component/Nav'
import Main from './component/Main'
import Cards from './component/Cards'
import './index.css'
import data from './data'

  const cardData = data.map(el =>{
        return (
          <Cards 
            keys= {el.id}
            // assign the hold props to data alternative #1
            el = {el}

            // assigning props to the data object alternative #2
            // title= {el.title}
            // description={el.description}
            // price={el.price}
            // coverImg = {el.coverImg}
            // rating={el.stats.rating}
            // reviewCount={el.stats.reviewCount}
            // location= {el.location}
            
            //assign props to the data object alternative #3
            // {...el}
          />
        )
  })

const App = () =>{
  return (
    <div className="container">
      <Nav />
      <Main />
      <div className="row">
        {cardData}
      </div>
    </div>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
