import React from "react";
import "./research.css";
import researchImg from "./assets/mockup.png";
import competitiveImg from "./assets/competitive.png"; // Add your competitive analysis image here

const Research = () => (
  <section className="research-section">
    <img src={researchImg} alt="Research Mockup" className="research-img" />
    <h2 className="research-title">Research</h2>
    <div className="research-desc">
      To design a platform that fosters meaningful social interaction, I conducted
      an in-depth analysis of leading social platforms—Instagram, Snapchat,
      Discord, Reddit, Google+, and Facebook. The goal was to understand why
      users increasingly feel disconnected, despite being more digitally
      connected than ever.
    </div>
    <div
      className="research-subtitle"
      style={{
        fontSize: "1.35rem",
        color: "#7c1ee6",
        textAlign: "center",
        fontWeight: 600,
        margin: "2.5rem 0 1.2rem 0",
      }}
    >
      Competitive Analysis
    </div>
    <img
      src={competitiveImg}
      alt="Competitive Analysis"
      className="research-img"
    />
  </section>
);

export default Research;
