import React from "react"
import Picture from "./Picture"
import phone from "../img/phone-icon.svg"

export default function Info() {
    return (
        <div className="info">
            <Picture />
            <div className="info--bg">
                <h1 className="info--title">Charlotte Janis</h1>
                <h3 className="info--details">Fullstack Developer</h3>
                <div className="email--button">
                    <img
                        src={phone}
                        className="button--icon"
                    />
                    <a href="+33760059907">Phone</a>
                </div>
            </div>
        </div>
    )
}