import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Footer({ darkMode }) {
  const links = {
    github: "https://github.com/KaptainCS3",
    instagram: "https://www.instagram.com/leonard_appelgryn_",
    twitter: "https://twitter.com/KaptainCS3",
    linkedin: "",
  };
  return (
    <footer className={darkMode ? "dark" : ""}>
      <div className="nav-footer">
        <ul className="nav-bar-footer">
          <li>
            <a href={links.github} className={darkMode ? "dark" : ""}>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a href={links.instagram} className={darkMode ? "dark" : ""}>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            <a href={links.twitter} className={darkMode ? "dark" : ""}>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </li>
          <li>
            <a href={links.linkedin} className={darkMode ? "dark" : ""}>
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </a>
          </li>
        </ul>
        <p className={darkMode ? "dark" : ""}>
          <b>&#169;</b> 2022. All Right Reserved by (KaptainCS3)
        </p>
      </div>
    </footer>
  );
}

export default Footer;
