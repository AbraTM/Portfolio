import React from "react";
import "./App.css"
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Projects from "./sections/projects/projects";
import Footer from "./sections/footer/footer";

export default function App(){
    return (
       <div>
            <Hero/>
            <About/>
            <Projects/>
            <Footer/>
       </div>
    )
}