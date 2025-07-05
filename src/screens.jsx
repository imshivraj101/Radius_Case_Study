import React from "react";
import "./screens.css";
import screensImg1 from "./assets/screens1.png"; // Replace with your first screens image
import screensImg2 from "./assets/screens2.png"; // Replace with your second screens image

const Screens = () => (
  <section className="screens-section">
    <h2 className="screens-title">Notable Screens</h2>
    <img src={screensImg1} alt="Notable Screens 1" className="screens-img" />
    <img src={screensImg2} alt="Notable Screens 2" className="screens-img" />
  </section>
);

export default Screens;
