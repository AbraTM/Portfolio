import React from "react";
import "./styling/home.css"

export default function AboutMe(){
    return(
        <div>
            <div className="home">
                <div>
                    <h2>Hi There,</h2>
                    <h2>I'm Tushar Malhan</h2>
                    <h2>Web Developer</h2>
                    <div className="text">
                        Web Developer, experienced mainly in frontend work, aim to produce quality work. 
                    </div>
                    <a href="mailto:tusharmalhan2564@gmail.com" className="mail"><button className="mail-me">
                    Contact Me &#9993;</button></a>
                </div>
                <img src="./public/assets/profile.png" className="profile-img"></img>
            </div>
            <div className="line"></div>
        </div>
        
    )
}