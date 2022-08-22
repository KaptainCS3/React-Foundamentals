import React from "react";
import star from "../images/Star 1.png";
const Cards = (props) => {
  console.log(props);
  let badgeText;
  if (props.el.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.el.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className="cards">
        {badgeText && <div className="badge">{badgeText}</div>}
        <img
          src={require(`../images${props.el.coverImg}`)}
          alt=""
          className="img"
        />
        <div className="card-content">
          <span className="rating">
            <span>
              <img src={star} alt="start" />
            </span>
            <span>{props.el.stats.rating}</span>
            <span className="usa">
              ({props.el.stats.reviewCount}){props.el.location}
            </span>
          </span>
          <p className="card-profile">{props.el.title}</p>
          <span className="person">
            <b>from ${props.el.price}</b> / person
          </span>
        </div>
      </div>
    </>
  );
};
export default Cards;
