import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <footer>
      <nav className="nav-footer">
        <ul className="nav-bar-footer">
          <li>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </li>
        </ul>
        <p>
          <b>&#169;</b> 2022. All Right Reserved by (KaptainCS3)
        </p>
      </nav>
    </footer>
  );
}

export default Footer