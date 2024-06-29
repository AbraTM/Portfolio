import React from "react";
import "./projects.css"
import BrowserWindow from "./browser-window";
import { motion } from "framer-motion";

export default function Projects(){

    const [viewMore, setViewMore] = React.useState(false)

    const show = {
        opacity: 1,
        display: "flex"
    }

    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    }
    
    return(
        <div className="projects-section" style={{height: viewMore? "540vh" : "200vh"}}>
            <div className="projects-txt"></div>
            <div className="projects-grid">


                <div className="project-cn">
                    <BrowserWindow
                        project={{
                            name: 'VanLife',
                            URL: 'https://van-life-tm.netlify.app/',
                            img: 'VanLife.png'
                        }}
                    />
                    <div className="project-desc">
                        <h1>VanLife</h1>
                        <div className="project-text">A E-Commerce site.</div>
                        <a href="https://github.com/AbraTM/VanLife" target="_blank" className="sourcecode-link">
                            <button className="source-btn">
                                Source
                            </button>
                        </a>
                    </div>
                </div>

                <div className="project-cn">    
                <BrowserWindow
                    project={{
                        name: 'Energy',
                        URL: 'https://abratm.github.io/EnergyDrink-WebPage/',
                        img: 'Energy.png'
                    }}
                />
                <div className="project-desc">
                    <h1>Energy</h1>
                    <div className="project-text">An Energy Drink website.</div>
                    <a href="https://github.com/AbraTM/EnergyDrink-WebPage" target="_blank" className="sourcecode-link">
                        <button className="source-btn">
                            Source
                        </button>
                    </a>
                </div>
            </div>
                
                <motion.div className="project-cn" animate={viewMore ? show : hide}>       
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
                </motion.div>

                <motion.div className="project-cn" animate={viewMore ? show : hide}>
                    <BrowserWindow
                            project={{
                                        name: 'MemeGenerator',
                                        URL: 'https://abratm.github.io/MemeGenerator/',
                                        img: 'MemeGenerator.png'
                                    }}
                    />
                    <div className="project-desc">
                        <h1>Meme Generator</h1>
                        <div className="project-text">An interactive Meme Generator.</div>
                        <a href="https://github.com/AbraTM/MemeGenerator" target="_blank" className="sourcecode-link">
                            <button className="source-btn">
                                Source
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div className="project-cn" animate={viewMore ? show : hide}>
                    <BrowserWindow
                            project={{
                                        name: 'TravelJournal',
                                        URL: 'https://abratm.github.io/Travel-Journal/',
                                        img: 'TravelJournal.png'
                                    }}
                    />
                    <div className="project-desc">
                        <h1>Travel Journal</h1>
                        <div className="project-text">A simple travel journal.</div>
                        <a href="https://github.com/AbraTM/Travel-Journal" target="_blank" className="sourcecode-link">
                            <button className="source-btn">
                                Source
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div className="project-cn" animate={viewMore ? show : hide}>
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
                </motion.div>
                

                <div className="control">
                    <motion.button whileTap={{scale: 0.95}} onClick={() => setViewMore(!viewMore)}>
                            {viewMore ? "View Less" : "View More"}
                    </motion.button>
                </div>

            </div>
        </div>
    )
}