import React from "react";
import "./footer.css"

import TwitterIcon from "./assets/twitter.png"
import InstagramIcon from "./assets/instagram.png"
import LinkedInIcon from "./assets/linkedin.png"

export default function Footer(){
    return(
        <div className="footer-section">
            <div className="footer-bg"></div>
            <div className="footer">
                <div className="footer-contact">
                    <h3>Get in touch</h3>
                    <a href="#" className="email-btn">
                        <div>EMAIL</div>
                        <div>&#x2192;</div>
                    </a>
                    <div>tusharmalhan2564@gmail.com</div>
                    <div>+91 7838122747</div>
                    <div>New Delhi, India</div>
                </div>
                <div className="socials">
                    <h3>Find me on socials</h3>
                    <img src={TwitterIcon}></img>
                    <img src={InstagramIcon}></img>
                    <img src={LinkedInIcon}></img>
                </div>
            </div>
        </div>
    )
}