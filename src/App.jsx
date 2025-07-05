import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Prob from "./Prob";
import Research from "./research";
import Chart from "./chart";
import User from "./user";
import Solution from "./solution";
import Screens from "./screens";
import Conc from "./conc";
// import Problem from "./problem";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Prob/>
      <Research/>
      <Chart/>
      <User />
      <Solution/>
      <Screens />
      <Conc />
      {/* <Problem /> */}
    </>
  );
}

export default App;
