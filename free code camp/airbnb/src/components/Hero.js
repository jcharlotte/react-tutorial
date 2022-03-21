import React from "react"
import miniatures from "../img/miniatures.png"

export default function Hero() {
    return(
        <section className="container hero">
            <div className="row">
                <img
                src = {miniatures}
                alt = "Miniatures of different pictures."
                />
            </div>
            <article className="hero--text">
                <h2>Online Experiences</h2>
                <p>
                    Join a unique interactive activities led by one-of-a-kind
                    hosts-all without leaving home.
                </p>
            </article>
        </section>
    )
}