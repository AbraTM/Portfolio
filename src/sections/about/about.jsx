import React from "react";
import "./about.css"

import HTMLIcon from "./assets/html.png"
import JSIcon from "./assets/javascript.png"
import ReactIcon from "./assets/react.png"
import CSSIcon from "./assets/css.png"
import NodeJSIcon from "./assets/nodejs.png"
import ExpressJSIcon from "./assets/express.png"
import JavaIcon from "./assets/java.png"
import PostmanIcon from "./assets/postman.png"
import GitHubIcon from "./assets/github.png"

export default function About(){
    return(
        <div className="about-section">
            <div className="skills">
                <h1 className="slide-animation">Skills</h1>
                    <div className="skills-grid">
                        <div className="skills-icon">
                            <img src={HTMLIcon} className="icon"></img>
                            <h3>HTML</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={JSIcon} className="icon"></img>
                            <h3>JavaScript</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={ReactIcon} className="icon"></img>
                            <h3>ReactJS</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={NodeJSIcon} className="icon"></img>
                            <h3>NodeJS</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={CSSIcon} className="icon"></img>
                            <h3>CSS</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={ExpressJSIcon} className="icon"></img>
                            <h3>ExpressJS</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={JavaIcon} className="icon"></img>
                            <h3>Java</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={PostmanIcon} className="icon"></img>
                            <h3>Postman</h3>
                        </div>
                        <div className="skills-icon">
                            <img src={GitHubIcon} className="icon"></img>
                            <h3>GitHub</h3>
                        </div>
                    </div>
            </div>
            <div className="mid-line"></div>
            <div className="about">
                <h1 className="slide-animation">About</h1>
                <p className="about-txt">
                    I am a Web Developer from New Delhi, India. I am currently enrolled in a Bachelor of Technology program specializing in Information Technology at Guru Gobind Singh Indraprastha University, slated for completion in 2026.
                </p>
                <p className="about-txt p2">
                    I am currently learning about ReactJS and the ecosystem surronding it. I really enjoy the designing part of a webpage and making the user experience smooth and polished.I am also currently learing DSA in Java.
                </p>
            </div>
        </div>
    )
}