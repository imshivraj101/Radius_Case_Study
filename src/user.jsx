import React from "react";
import "./user.css";
import userImg from "./assets/Ashish.png";

const User = () => (
  <section className="user-section">
    <div className="user-title">Userflow</div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
      <img src={userImg} alt="Ashish Nashikkar" className="user-img" />
    </div>
  </section>
);

export default User;
