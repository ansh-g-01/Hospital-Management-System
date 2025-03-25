import React from "react";
import facebookIcon from "../Assets/headericons/facebook.png";
import instagramIcon from "../Assets/headericons/instagram.png";
import youtubeIcon from "../Assets/headericons/youtube.png";
import linkedinIcon  from "../Assets/headericons/linkedin.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
          <ul className="LHS-Header">
          <li><img src={facebookIcon} alt="" /></li>
          <li>|</li>
          <li><img src={youtubeIcon} alt="" /></li>
          <li>|</li>
          <li><img src={instagramIcon} alt="" /></li>
          <li>|</li>
          <li><img src={linkedinIcon} alt="" /></li>
  
        </ul>
      <div>
      <nav>
        <ul className="nav-links">
          <li><a href="abc">Privacy Policy</a></li>
          <li>|</li>
          <li><a href="abc">Disclaimer</a></li>
          <li>|</li>
          <li><a href="abc">Contact us</a></li>
  
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
