import React from 'react'
function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <span className="img">
            <img src={require('../images/logo192.png')} className="img-logo" />
          </span>
          <span>ReactFacts</span>
        </div>
        <ul className="nav-bar">
          <p>React Course - Project 1</p>
        </ul>
      </nav>
    </>
  );
}

export default Nav