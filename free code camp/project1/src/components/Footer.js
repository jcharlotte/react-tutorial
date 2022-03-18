import React from "react"
import linkedin from "../img/linkedin-icon.png"
import github from "../img/github-icon.png"

export default function Footer () {
    return(
        <div className="footer">
            <div className="footer--bg">
                    <a href="https://www.linkedin.com/in/charlotte-janis/" target="_blank">
                        <img 
                            src = {linkedin}
                            alt = "LinkdIn icon."
                        />
                    </a>
                <a href="https://github.com/jcharlotte" target="_blank">
                    <img 
                        src = {github}
                        alt = "Github icon."
                    />
                </a>
            </div>
        </div>
    )
}