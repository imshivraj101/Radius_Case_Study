import React from "react";
import "./solution.css";
import featuresImg from "./assets/features.png"; // Replace with your features table image
import flowImg from "./assets/flow.png"; // Replace with your userflow image

const Solution = () => (
  <section className="solution-section">
    <h2 className="solution-title">Brainstorming on the Solution</h2>
    <div className="solution-subtitle">Proposed Features</div>
    <img src={featuresImg} alt="Proposed Features Table" className="solution-img" />
    <div className="solution-subtitle">Simplified User Navigation</div>
    <img src={flowImg} alt="User Navigation Flow" className="solution-img" />
  </section>
);

export default Solution;
