import React from "react";
import { FaFontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <nav className="nav-footer">
        <ul className="nav-bar-footer">
          <li>
            <FontAwesomeIcon icon={FaGithub} />
            GitHub
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
            Twitter
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            Linkedin
          </li>
        </ul>
      </nav>
      <p>
        <b>&#169;</b>
        2022. All Right Reserved by (KaptainCS3)
      </p>
    </footer>
  );
};

export default Footer;
