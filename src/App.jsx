import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import Footer from "./components/footer";
import "./App.css";

export default function App(){
  return (
    <div >
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  )
}
