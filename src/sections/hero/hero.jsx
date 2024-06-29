import React from "react";
import "./hero.css"

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
                        <div className="profile"></div>
                    </div>
                    <div className="contact-me-btn">
                        <button className="contact-me">CONTACT ME</button>
                    </div>
                    <div className="resume-btn">
                        <button className="resume">RESUME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}