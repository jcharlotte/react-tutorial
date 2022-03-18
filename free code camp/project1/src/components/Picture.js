import React from "react"
import pfp from "../img/pfp.jpg"

export default function Picture () {
    return(
        <img 
            src = { pfp }
            alt = "Charlotte J."
            className="pfp"
        />
    )
}