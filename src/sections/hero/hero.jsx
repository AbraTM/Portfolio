import React from "react";
import "./hero.css"
import ProfileURL from "../../../public/profile_img.jpg"

export default function Hero(){
    return(
        <div className="hero-section">
            <div className="wrapper">
                <div className="hero">
                    <h1 className="portfolio-header">PORTFOLIO</h1>
                    <div className="hero-info-cn">
                        <div className="hero-text">
                            <h1>Hi there,</h1>
                            <h1>I'm Tushar Malhan</h1>
                            <h1 className="underline">Web Developer</h1>
                            <p>Web Developer, experienced mainly in frontend work, aim to produce quality work.</p>
                        </div>
                        <div className="profile">
                            <img src={ProfileURL} className="profile-img"></img>
                        </div>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tusharmalhan2564@gmail.com" target="_blank" className="contact-me-btn">
                        <button className="contact-me">CONTACT ME</button>
                    </a>
                    <a href="/Portfolio/public/Resume.pdf" target="_blank" className="resume-btn">
                        <button className="resume">RESUME</button>
                    </a>
                </div>
            </div>
        </div>
    )
}