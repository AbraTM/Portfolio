import React from "react";
import "./styling/aboutme.css"

export default function AboutMe(){
    return(
        <div>
            <div className="aboutme">
                <div>
                    <h2>Hi There,</h2>
                    <h2>I'm Tushar Malhan</h2>
                    <h2>Web Developer</h2>
                    <div className="text">
                        Web Developer, experienced mainly in frontend work, aim to produce quality work. 
                    </div>
                    <a href="tusharmalhan2564@gmail.com">Contact Me </a>
                </div>
                <img src="./src/assets/profile.png" className="profile-img"></img>
            </div>
            <div className="line"></div>
        </div>
        
    )
}