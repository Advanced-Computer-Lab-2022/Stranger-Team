import React from "react";
import { Link } from "react-router-dom";
import '../styles/StyleForQuiz.css';
import '../styles/MainForQuiz.css';

export default function Main() {
    return (
        <div className="container">
            {/* <h1>Exercise 1</h1> */}
            <ol>
                <li>You will be asked a few questions.</li>
                <li>One point will be awarded for each correct answer.</li>
                <li> You are only allowed to choose one option.</li>
                <li>You're allowed to change your answers if you feel the need to do so.</li>
                <li>Your result will be declared at the end of the exercise.</li>
                <h4>Best of luck!</h4>
            </ol>

            <div className="start">
                <Link className="btn" to='/quiz'>Start exercise</Link>
            </div>
            </div>
    )
}