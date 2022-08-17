import React from "react";
import star from '../images/Star 1.png'
const Cards = ({img, alt, rating, grayTxt, title, price}) =>{
  // console.log(props)
  return (
    <>
      <div className="cards">
        <img src={img} alt={alt} className = 'img'/>
        <div className="card-content">
          <span className="rating">
            <span>
              <img src={star} alt="start" />
            </span>
            <span>{rating}</span>
            <span className="usa">{grayTxt}</span>
          </span>
          <p className="card-profile">{title}</p>
          <span className="person">
            <b>{price}</b> / person
          </span>
        </div>
      </div>
    </>
  );
}
export default Cards