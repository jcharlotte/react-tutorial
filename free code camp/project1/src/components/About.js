import React from "react"

export default function About() {
    return(
        <div className="about">
            <div className="about--bg">
                <h4 className="about--title">About</h4>
                <p className="about--p">
                    I am a fullstack developer with a particular interest in the backend technologies. <br />
                    I have worked with <span>PHP</span>, using <span>Symfony</span> as a framework. I also have basic notions of <span>Python</span>.
                </p>
                <p className="about--p"> 
                    In term of frontend, I know how to work with <span>HTML</span>, <span>CSS</span> and <span>JS</span>. I'm currently learning to use <span className="react">React</span>. I'll be updating that page while I am learning more about it. 
                </p>
            </div>
        </div>
    )
}