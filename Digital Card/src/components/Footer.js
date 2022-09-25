import React from "react";
function Footer() {
  return (
    <footer>
      <nav className="nav-footer">
        <div className="nav-bar-footer">
          <a href="https://github.com/KaptainCS3">
            <img src={require("../images/GitHub Icon.png")} alt="github" />
          </a>
          <a
            href="https://www.instagram.com/leonard_appelgryn_"
          >
            <img
              src={require("../images/Instagram Icon.png")}
              alt="instagram"
            />
          </a>
          <a href="https://web.facebook.com/enow.leonard.9">
            <img src={require("../images/Facebook Icon.png")} alt="facebook" />
          </a>
          <a href="https://twitter.com/KaptainCS3">
            <img src={require("../images/Twitter Icon.png")} alt="twitter" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
