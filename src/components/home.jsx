import React from "react";
import "./styling/home.css"
import { motion } from "framer-motion";

export default function AboutMe(){
    return(
    
            <div className="home" id="home">
                <div className="home-contents">
                    <h2>Hi There,</h2>
                    <h2>I'm Tushar Malhan</h2>
                    <h2>Web Developer</h2>
                    <div className="text">
                        Web Developer, experienced mainly in frontend work, aim to produce quality work. 
                    </div>
                    <a href="mailto:tusharmalhan2564@gmail.com" className="mail"><button className="mail-me">
                    Contact Me &#x2709;</button></a>
                </div>
                <div className="image-cn">
                    <img src="./assets/profile.png" className="profile-img"></img>
                </div>
                
            </div>
    )
}