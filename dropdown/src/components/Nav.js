import React from 'react'
import navLogo from "../images/logo192.png"
function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <span className="img">
            <img src={navLogo} className="img-logo" />
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