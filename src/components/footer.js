import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="foot-info">
            <a href="https://www.facebook.com/sk.sonal.3?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/sonal_._singh_/profilecard/?igsh=MWswdTAyZG56eGlnbQ=="><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/sonal017"><FontAwesomeIcon icon={faGithub} /></a>
        
        </div>
    )
}

export default Footer;