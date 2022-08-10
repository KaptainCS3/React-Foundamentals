import React from 'react';

// This is our props here , this time it is acting as a parameter
const List = ({people}) => {
  return (
    <>
    {/* back in the App.js , you passed the people array to as a prop which was an array , so now you can reuse it here an map through it */}
      {people.map((person)=>{
        {/* upon mapping , you will pass thisvalues to it and they will be taken from the array  */}
        const {id,name,age,image} = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className="">
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  );
}; 

export default List;
