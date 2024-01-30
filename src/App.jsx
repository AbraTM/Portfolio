import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import "./App.css";

export default function App(){
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
    </div>
  )
}
