import React from "react";
import "./browser-window.css"
import BW from "./assets/bw.png"
import RL from "./assets/ReactLogo.png";

export default function BrowserWindow(props){

    const [openLink, setOpenLink] = React.useState(false)

    function showOpenProject(){
        setOpenLink(true)
    }

    function hideOpenProject(){
        setOpenLink(false)
    }

    return(
        <div className="bw-container" onMouseEnter={showOpenProject} onMouseLeave={hideOpenProject}>

            <div className="open-project" style={openLink ? {display : "flex"} : {display : "none"}}>
                <a href={props.project.URL} target="_blank" className="link-text">Open Project</a>
            </div>

            <div className="browserWindow">
                <div className="title-bar-l1">
                    <div className="c1">
                        <img src={BW}></img>
                    </div>

                    <div className="c2">
                        <img src={RL}></img>
                        <div className="title-bw">{props.project.name}</div>
                        <div className="cross">&#10006;</div>
                    </div>

                    <div className="c3">
                        <div>+</div>
                    </div>

                    <div className="c4">
                        <div>&#8212;</div>
                        <div>&#9723;</div>
                        <div>&#10006;</div>
                    </div>
                </div>

                <div className="title-bar-l2">
                    <div className="left">
                        <div className="grey-btn">&#8592;</div>
                        <div className="grey-btn">&#8594;</div>
                        <div className="reload">&#8635;</div>
                        <div className="bright-btn">&#x2302;</div>
                    </div>

                    <div className="mid">
                        <div className="mid-text">Search</div>
                        <div className="search-btn">&#x1F50D;</div>
                    </div>

                    <div className="right">
                        <div>&#x22EE;</div>
                    </div>
                </div>

                <div className="title-bar-l3">
                    <img src={`./${props.project.img}`} className="project-img"></img>
                </div>
            </div>
        </div>
    )
}