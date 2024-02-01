import React from "react";
import "./styling/projects.css";
import BrowserWindow from "./project-browser-window";

export default function Projects(){
    return (
        <div>
            <h1 className="heading">This is some of my work :</h1>
            <div className="projects-cn">
                <div className="project">
                    <BrowserWindow
                        project={{
                                    name: 'Tenzies',
                                    URL: 'https://abratm.github.io/Tenzies-Game/',
                                    img: 'Tenzies.png'
                                }}
                    />
                    <div className="about-project">
                        <h3>Tenzies</h3>
                        <div>A fun little game.</div>
                    </div>
                </div>
                <div className="project">
                    <div className="about-project">
                        <h3>MemeGenerator</h3>
                        <div>Make your own hilarious memes and share them with your friends.</div>
                    </div>
                    <BrowserWindow
                        project={{
                                    name: 'MemeGenerator',
                                    URL: '',
                                    img: ''
                                }}
                    />
                </div> 
            </div>   
        </div>
    )
}