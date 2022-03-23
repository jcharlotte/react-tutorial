import React from "react"
import Joke from "./Joke"
import "./style.css"

export default function App() {
    return (
        <div>
            <Joke
                punch="It’s hard to explain puns to kleptomaniacs because 
                they always take things literally."
            />
            <Joke
                setup="I got my daughter a fridge for her birthday."
                punch="- I can't wait to see her face light up when she opens it."
            />
            <Joke
                setup="How did the hacker escape the police?"
                punch="- He just ransomware!"
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punch="- Scurvy."
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punch="- Swarm."
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punch="- I don't know, but the flag is a big plus!"
            />
        </div>
    )
}