import React from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <>
      <main>
        <div className="avarta-img">
          <img
            src={require("../images/IMG_20220629_163254_282.png")}
            alt="my profile"
          />
        </div>
        <div className="avarta-description">
          <h1>LEONARD APPELGRYN</h1>
          <h3>Frontend Developer</h3>
          <h5></h5>
          <div className="get-in-touch">
            <a
              type="button"
              className="email"
              href="mailto:mbiapplegryn@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icons" /> Email
            </a>
            <a
              type="button"
              className="linkedin"
              href="https://linkedin.com/in/mbi-appelgryn-b137571ab"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icons" /> Linkedin
            </a>
          </div>
          <section className="about">
            <h3>About</h3>
            <p>
              Passionate Frontend Developer Striving for finical freedom through
              tech. Leveling up my skills from self though to professional dev
              in the feature.
            </p>
          </section>
          <section className="interest">
            <h3>Interest</h3>
            <p>
              My interested in Frontend, backend, open source contribution,
              mobile app development. I'm interest in making things simple and
              automating daily tasks. Cultivate best practice habits, and I'm
              always looking for new things to learn
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Card;
