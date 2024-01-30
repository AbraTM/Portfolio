import React from "react";
import "./styling/projects.css";
import BrowserWindow from "./project-browser-window";

export default function Projects(){
    return (
        <div>
            <div>This is some of my work :</div>
            <BrowserWindow
                project={{
                            name: 'Tenzies',
                            URL: 'https://abratm.github.io/Tenzies-Game/',
                            img: 'Tenzies.png'
                        }}
            />
            <BrowserWindow
                project={{
                            name: 'MemeGenerator',
                            URL: '',
                            img: ''
                        }}
            />
        </div>
    )
}