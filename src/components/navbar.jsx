import React from "react";
import "./styling/navbar.css"
import { Link } from "react-scroll";

export default function Navbar(){
    const [navMenu, setNavMenu] = React.useState(false)

    function handleChange(event){
        if(!event.target.checked){
            setNavMenu(false)
        }else{
            setNavMenu(true)
        }
    }

    return (
        <nav>
            <div className="portfolio">
                PORTFOLIO
            </div>
            <div className="nav-menu">
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="option"
                >    
                    Home
                </Link >
                <Link to="aboutme" spy={true} smooth={true} offset={-100} duration={500} className="option"
                >
                    About
                </Link >
                <Link to="projects" spy={true} smooth={true} offset={100} duration={500} className="option"
                >
                    Projects
                </Link >
                <Link to="footer" spy={true} smooth={true} offset={100} duration={500} className="option"
                >
                   Contact
                </Link >
            </div>
        </nav>
    )
}