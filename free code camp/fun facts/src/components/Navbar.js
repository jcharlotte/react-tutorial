import React from "react"
import reactLogo from "../img/logo.png"
export default function Navbar() {
    return(
        <header className="header">
            <nav className="navbar container">
                <div className="nav-img">
                    <img 
                    src= {reactLogo} 
                    alt="React Logo."
                    />
                </div>
                <div className="nav-title">
                    <h4>React Course - Project 1</h4>
                </div>
            </nav>
        </header>
    )
}