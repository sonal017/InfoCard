import React from "react";
import IMG from "./img/adminpic.jpeg";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

    
const admail = "sonalkumar.job17@gmail.com";
const copyToClipboard=async()=>{
    try {
        await navigator.clipboard.writeText(admail);
        alert("Email Copied to Clipboard: "+admail);
    } catch (error) {
        console.error("Failed to copy: ",error);
        alert("Failed to copy email.")
    };
}

function Header() {
  return (
    <div className="head-info">
      <img className="adpic" src={IMG} />
      <h2>Sonalkumar Singh</h2>
      <h5>Frontend Developer</h5>
      <button id="email" onClick={copyToClipboard}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="email-icon"
            style={{ color: "black" }}
          />
          Email
    
      </button>
      <button id="linkedin">
        <a href="https://www.linkedin.com/in/sonalkumar-singh-a8b230294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
        Linkedin
        </a>
      </button>
    </div>
  );
}



export default Header;
