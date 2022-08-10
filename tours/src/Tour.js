import React, { useState } from 'react';

// This is the main container of the  tour project and  we will pass our values using props which are our parameters

const Tour = ({id,image,info,price,name , removeTours}) => {
  const [readMore,setReadMore] = useState(false)
  return <>
  <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">
          ${price}
        </h4>
      </div>
      <p>
        {/* {readMore ? info : `${info.substring(0,200)}...`} */}
        {/* <button onClick={()=> setReadMore(!readMore)} > */}
          {/* {readMore ? "show less" : "show more"} */}
        {/* </button> */}
        {info}
      </p>
      {/* Here is our button with the onclick event  to delete a tour  */}
      <button className='delete-btn' onClick={()=> removeTours(id)} >not interestes</button>
    </footer>
  </article>
  </>;
};

export default Tour; 
