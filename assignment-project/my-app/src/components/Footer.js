import React from "react";
import Twitter from "../Assets/Twitter.png";
import Facebook from "../Assets/Facebook.png";
import Instagram from "../Assets/Instagram.png";
import GitHub from "../Assets/GitHub.png";

function Footer() {
  return (
    <div>
      <footer>
        <img src={Twitter} alt="twitter-logo" />
        <img src={Facebook} alt="facebook-logo" />
        <img src={Instagram} alt="instagram-logo" />
        <img src={GitHub} alt="github-logo" />
      </footer>
    </div>
  );
}
export default Footer;
