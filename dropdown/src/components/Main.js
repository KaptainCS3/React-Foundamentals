import React from 'react'

function Main({darkMode}) {
  return (
    // <main>
    //   <h1>Fun Facts About React</h1>
    //   <ul>
    //     <li>
    //       <span>Was first released in 2013</span>
    //     </li>
    //     <li>
    //       <span> Was originally created by Jordan Walke</span>
    //     </li>
    //     <li>
    //       <span>Has well over 100K stars on GitHub</span>
    //     </li>
    //     <li>
    //       <span>Is maintained by Facebook</span>
    //     </li>
    //     <li>
    //       <span>
    //         Powers thousands of enterprise apps, including <br /> mobile apps
    //       </span>
    //     </li>
    //   </ul>
    // </main>
    <main className={darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

export default Main