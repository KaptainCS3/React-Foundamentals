import React from "react";
import logo from '../images/react-icon-small.png'
function Nav({toggleDarkMode, darkMode}) {
  return (
    <>
      {/* <nav className="nav">
        <div className="nav-left">
          <span className="img">
            <img src={require("../images/logo192.png")} className="img-logo" />
          </span>
          <span>ReactFacts</span>
        </div>
        <div className="nav-bar">
          <p className="toggler--light">Light</p>
          {/* <p>React Course - Project 1</p> */}
      {/* <div id="notification">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <p className="toggler--dark">Dark</p>
        </div> */}
      {/* </nav>  */}

      <nav className={darkMode ? "dark" : ""}>
        <img className="nav--logo_icon" src={logo} alt='React-logo'/>
        <h3 className="nav--logo_text">ReacstFacts</h3>

        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>
    </>
  );
}

export default Nav;
