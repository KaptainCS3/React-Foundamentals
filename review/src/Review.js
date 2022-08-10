import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  // The review is same as a carousel you know in css and normal js
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index]


  // This function helps us check and make sure we dont go above the lenght of our array and below its lenght 
  const checkNumber = (number)=>{
    if(number > people.length - 1){
      return 0
    }
    if(number < 0 )
      return people.length - 1;
    return number
  }
  
  // This function help us in moving to the previous element
  const prevPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index - 1 
      // if(newIndex < 0)
        // newIndex = 3
      // checkNumber(newIndex)
      return  checkNumber(newIndex)
    })
  }
  
  // This function help us in moving to the next element
  const nextPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index + 1 
      // if(newIndex > people.length -1)
        // newIndex = 0
      // checkNumber(newIndex)
      return checkNumber(newIndex)
    })
  }


  // in this function , we use the random object to generate random numbers so we can get random images within our range
  const randomPerson = ()=>{
      let randomIndex = Math.floor(Math.random() * people.length)
      if(randomIndex === index){
        randomIndex = index + 1

      }
      setIndex(checkNumber(randomIndex))
      // return randomIndex
  }
  console.log(people);
  return <>
  <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson} >
        <FaChevronLeft />
      </button>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
      <button className='next-btn' onClick={nextPerson} >
        <FaChevronRight />
      </button>
    </div>
  </article>
  </>;
};
 
export default Review;
