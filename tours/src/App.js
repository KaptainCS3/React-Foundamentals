import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  // This is our useSatte thanks to this , we will have our variables 
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])


  // This function enables us to remove some tour using the onclick event 
  const removeTours = (id)=>{
    // so we filter every tours and if the id matches the one we just clicked , we will return all tours except for that one in particular
    const newTours = tours.filter((tour)=>
      tour.id !== id
    )
    // so we call our useState function and passing its values as the fetched values
    setTours(newTours)
  }
  const fetchTours = async () =>{
    // this is our fetch tours method , we use it to fetch data from an api
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)

      console.log(error);
    }
    console.log(tours);
  }


  useEffect(()=>{
    fetchTours()
  },[])

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0 ){
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className='btn' onClick={()=> fetchTours()} > refresh</button>
        </div>
      </main>
    )
  }
  return <>
  <main>
    <Tours tours={tours} removeTours={removeTours} />
  </main>
  </>
} 

export default App
