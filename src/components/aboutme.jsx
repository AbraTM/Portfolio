import React from "react";
import "./styling/aboutme.css";
import Extra from "../../public/assets/aboutme-extra.jpg"
import HTML from "../../public/assets/html.png";
import CSS from "../../public/assets/css.png";
import JS from "../../public/assets/javascript.png";
import ReactLogo from "../../public/assets/ReactLogo.png";
import CPP from "../../public/assets/c++.png"

export default function AboutMe(){
    return(
        <div className="aboutme-cn">
            <div className="aboutme">
                <h1>About Me</h1>
                <img src={Extra} className="extra"></img>
                
                <div className="below-am">
                    <p>
                        I am certain that my degree will become my ticket to a better tomorrow. I want to become a renowned lawyer in the field of employment legislation. I study hard and devote my free time to reading scholarly reviews and watching interviews with recognized specialists in the field.
                    </p>
                    <p>
                        Fortunately, my thirst for knowledge did not come to an end when I was at school. I was passionate about history and science. This passion helped me gain a profound knowledge of these areas, and I was admitted to the college of my dreams. Today, I am a student at a law school, and I feel very happy about it.
                    </p>
                </div>

                <div className="skill">MY SKILLS :</div>
                <div className="experience">
                    <div className="tech">
                        <img src={HTML} className="tech-logo"></img>
                        <div className="teach-name">HTML</div>
                    </div>

                    <div className="tech">
                        <img src={CSS} className="tech-logo"></img>
                        <div className="tech-name">CSS</div>
                    </div>

                    <div className="tech">
                        <img src={JS}
                        className="tech-logo"></img>
                        <div
                        className="tech-name">JAVASCRIPT</div>
                    </div>

                    <div className="tech">
                        <img src={ReactLogo}
                        className="tech-logo"></img>
                        <div
                        className="tech-name">REACT</div>
                    </div>

                    <div className="tech">
                        <img src={CPP}
                        className="tech-logo"></img>
                        <div
                        className="tech-name">C++</div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

