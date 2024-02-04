import React from "react";
import "./styling/projects.css";
import BrowserWindow from "./browserwindow";

export default function Projects(){
    return (
        <div className="mywork">
            <div className="projects-cn">
                <div className="heading">
                    PROJECTS : 
                </div>
                <BrowserWindow
                    project={{
                                name: 'Tenzies',
                                URL: 'https://abratm.github.io/Tenzies-Game/',
                                img: 'Tenzies.png'
                            }}
                />
                <div className="project-desc">
                    <h1>Tenzies</h1>
                    <div className="project-text">A fun little game.</div>
                    <a href="https://github.com/AbraTM/Tenzies-Game" target="_blank" className="sourcecode-link">
                        <button className="source-btn">
                            Source
                        </button>
                    </a>
                </div>


                <BrowserWindow
                    project={{
                                name: 'AirBnB',
                                URL: 'https://abratm.github.io/AirBnb-Clone/',
                                img: 'AirBnb-Clone.png'
                            }}
                />
                <div className="project-desc">
                    <h1>AirBnb Clone</h1>
                    <div className="project-text">Minimised version of a very famous site.</div>
                    <a href="https://github.com/AbraTM/AirBnb-Clone" target="_blank" className="sourcecode-link">
                        <button className="source-btn">
                            Source
                        </button>
                    </a>
                </div>

            </div>   
        </div>
    )
}