import React from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"
import "./style.css"


export default function App () {
    return(
        <main className="main">
            <Info />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}