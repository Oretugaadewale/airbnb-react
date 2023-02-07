import React from "react";
import logo from "../Assets/logo.png";

function Nav() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="react-logo" />
        <h1 className="nav-h1">ReactFact</h1>
        <h3 className="react">React Course - project 1</h3>
      </div>
    </div>
  );
}

export default Nav;
