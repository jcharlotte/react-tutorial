import React from "react"


export default function Joke(props) {
    return (
        <div>
            <div style={{ display: props.setup ? "block" : "none" }} className="container joke border rounded mt-5 shadow">
                <div className="row justify-content-center setup">
                    <div className="col-7"><p>{props.setup}</p></div>
                </div>
                <div className="row justify-content-center punch">
                    <div className="col-6"><p>{props.punch}</p></div>
                </div>
            </div>

            <div style={{ display: props.setup ? "none" : "block" }} className="container joke border rounded mt-5 shadow">
                <div className="row justify-content-center setup">
                    <div className="col-6"><p>{props.punch}</p></div>
                </div>
            </div>
        </div>
    )
}