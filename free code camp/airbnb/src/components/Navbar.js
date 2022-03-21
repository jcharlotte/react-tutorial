import React from "react"
import airbnblogo from "../img/airbnb-logo.png"

export default function Navbar () {
    return(
        <nav className="nav container-fluid shadow">
            <img 
                src= {airbnblogo}
                alt = "Airbnb logo."
                className="nav--logo"
            />
        </nav>
    )
}