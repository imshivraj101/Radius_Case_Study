import React from "react";
import "./hero.css";
import logo from "./assets/radius.png"; // Replace with your logo path if different
import profileImg from "./assets/shivraj.jpeg"; // Replace with your profile image path

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={logo} alt="Radius Logo" className="hero-logo" />
      <div className="hero-title">Radius</div>
      <div className="hero-tagline">
        For Those who like to be the center of the circles
      </div>
      <div className="hero-section-title">Mind behind Radius</div>
      <img
        src={profileImg}
        alt="Profile"
        className="hero-profile-img"
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/shivraj-talekar-259099336/",
            "_blank"
          )
        }
      />
      <div className="hero-profile-desc">
        UI/UX Research, Conceptualization &amp; Frontend Development
      </div>
    </div>
  );
};

export default Hero;
