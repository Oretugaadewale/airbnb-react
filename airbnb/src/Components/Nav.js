import React from "react";
import airlogo from "../Assets/airlolg.png";

function Nav() {
  return (
    <div>
      <nav>
        <img src={airlogo} className="nav--logo" alt="airbnb-logo" />
      </nav>
    </div>
  );
}

export default Nav;
