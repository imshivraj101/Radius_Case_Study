import React from "react";
import "./Prob.css";
import probImg from "./assets/thinking.png";

const Prob = () => (
  <section className="prob-section">
    <div className="prob-context">
      Friendship isn't just about who you know. It's about who gets you.<br/>
      But today’s social apps chase followers, not real connection.<br/>
      They amplify noise, not identity.<br/>
      <br/>
      Radius isn’t just another network. It’s your orbit.<br/>
      A space where your vibe shapes your tribe, your presence means something, and your story unfolds in Circles that feel like home.<br/>
      It’s where expression, community, and real-world experiences come together—<br/>
      So you don’t just scroll through life...
    </div>
    <div className="prob-main-row">
      <div className="prob-illustration">
        <img src={probImg} alt="Problem Illustration" style={{width: "100%", borderRadius: "1.5rem"}} />
      </div>
      <div className="prob-content">
        <div className="prob-title">Problem Statement</div>
        <div className="prob-desc">
          In today’s hyperconnected world, Gen Z users feel more digitally surrounded yet emotionally disconnected than ever. Social platforms focus on followers, likes, and infinite scrolling, but rarely support authentic expression, safe belonging, or real-life connection.<br/><br/>
          While Gen Z craves communities built around identity, interest, and shared intent, current apps lack the structure and intention to turn online engagement into offline experiences that matter.<br/><br/>
          There is a growing need for a platform that redefines social interaction—not as a performance, but as a path to presence—bridging digital identity with real-world moments, and helping users move from scrolling to showing up.
        </div>
      </div>
    </div>
  </section>
);

export default Prob;
