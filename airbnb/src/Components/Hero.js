import React from "react";
import hero from "../Assets/hero.png";

function Hero() {
  return (
    <section>
      <div className="hero">
        <img src={hero} className="hero--photo" alt="hero-section" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
