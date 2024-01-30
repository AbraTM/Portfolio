import React from "react";
import "./styling/navbar.css"

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
                <label className="hamburger-menu" onClick={handleChange}>
                    <input type="checkbox"></input>
                </label>
                {navMenu && <div className="option">Home</div>}
                {navMenu && <div className="option">About</div>}
                {navMenu && <div className="option">Contact</div>}
                <div></div>
            </div>
        </nav>
    )
}