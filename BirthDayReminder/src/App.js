import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // Your people array is declared and is assigned a data 
  const [people,setPeople] = useState(data)
  return <main>
    <section className="container">
      <h3>{people.length} Birthday Today</h3>
      {/* This the list or let me say the container for out birthday reminder projects */}
      {/* We are passing props here which are just like argument as compared to function so that they can still execute where ever they are called */}
      <List people={people} />
      {/* This is our useState here in use in our button */}
      {/* as we know , useState come with the initialiser and the functions to permit you to update your values , so upon clicking on this button , your people array which was set to the data we import will be cleared off as they become empty array  */}
      <button onClick={()=> setPeople([]) }>Clear all</button>
    </section>
  </main>;
} 

export default App;