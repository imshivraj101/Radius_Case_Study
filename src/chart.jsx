import React from "react";
import "./chart.css";
import chart1 from "./assets/chart1.png"; // Replace with your actual chart image path
import chart2 from "./assets/chart2.png"; // Replace with your actual chart image path

const Chart = () => (
  <section className="chart-section">
    <h2 className="chart-title">To create a human-centered social platform</h2>
    <div className="chart-subtitle">
      that moves beyond followers and feeds — enabling authentic identity, meaningful connections, and real-world experiences — so users don’t just scroll through life, they show up in it.
    </div>
    <img src={chart1} alt="Teen Internet Usage Chart" className="chart-img" />
    <img src={chart2} alt="Teen Social Platform Usage Chart" className="chart-img-large" />
  </section>
);

export default Chart;
