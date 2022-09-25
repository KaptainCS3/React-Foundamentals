import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({item}) => {
  /* {item}
  destructure properties from 
  map method in index.js 
  
  item = {item}
  element destructure is the value assign 
  to the callBack(item) from map method,
  but since my callBack is the same as 
   variable
  */
  return (
    <section className="card">
      <div className="card-img">
        <img src={require(`../images${item.image}`)} alt="" className="img" />
      </div>
      <div className="card-description">
        <div className="caption">
          {/* <img src={} alt='' /> */}
          <span className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icons" />
            {item.location}
          </span>
          <a href={item.googleMap} className="gMap">
            View on Google Map
          </a>
        </div>
        <div className="card-img-description">
          <h1 className="hero">{item.title}</h1>
          <div className="dates">
            <span className="strDate">{item.startDate} - </span>
            <span className="endDate"> {item.endDate}</span>
          </div>
          <p className="img-description">{item.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
