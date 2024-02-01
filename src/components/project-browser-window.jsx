import React from "react";
import "./styling/project-bw.css";
import Logo from "../../public/assets/ReactLogo.png"

export default function BrowserWindow(props){
    const [openLink, setOpenLink] = React.useState(false)

    function showDialogue(){
        setOpenLink(true);
    }

    function hideDialogue(){
        setOpenLink(false)
    }


    return(
        <div className="container" onMouseOver={showDialogue} onMouseLeave={hideDialogue}>
            <div className="overlay-bw" style={openLink ? {display : 'flex'} : {display: 'none'}}>
                <a href={props.project.URL} target="_blank" className="open-project">
                        Open Project
                </a>
            </div>
            <div className="browser-window">
                <div className="title-bar-bw-l1">
                    <div className="c1">
                        <p>&#8964;</p>
                    </div>
                    <div className="c2">
                        <img src={Logo}></img>
                        <p>{props.project.name}</p>
                        <div>&#10006;</div>
                    </div>
                    <div className="c3">+</div>
                </div>
                <div className="title-bar-bw-l2">
                    <div className="left">
                        <div className="light-btn">&#8592;</div>
                        <div className="light-btn">
                        &#8594;</div>
                        <div className="bright-btn1">&#8635;</div>
                        <div className="bright-btn2">&#x2302;</div>
                    </div>
                    <div className="mid">
                        <p>Search</p>
                        <div>&#x1F50D;</div>
                    </div>
                    <div className="right">&#x22EE;</div>
                </div>
                <img src={`./public/assets/${props.project.img}`}  className="project-img"></img>
            </div>
        </div>
    )
}