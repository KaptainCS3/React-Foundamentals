import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="nav">
      <header>
        <p>
          {" "}
          <FontAwesomeIcon icon={faGlobeAmericas} className="icons" />
          My Travel Journal
        </p>
      </header>
    </nav>
  );
}

export default Nav