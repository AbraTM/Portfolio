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
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tusharmalhan2564@gmail.com" target="_blank" className="email-btn">
                        <div>EMAIL</div>
                        <div>&#x2192;</div>
                    </a>
                    <div>tusharmalhan2564@gmail.com</div>
                    <div>+91 7838122747</div>
                    <div>New Delhi, India</div>
                </div>
                <div className="socials">
                    <h3>Find me on socials</h3>
                    <a href="https://twitter.com/Tushar_Malhan_" target="_blank">
                        <img src={TwitterIcon}></img>
                    </a>
                    <a href="https://www.instagram.com/tushar_malhan_/" target="_blank">
                        <img src={InstagramIcon}></img>
                    </a>
                    <a href="www.linkedin.com/in/tushar-malhan-9998ab256" target="_blank">
                        <img src={LinkedInIcon}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}