import React from "react";
import { Link } from "react-router-dom";
import '../styles/StyleForQuiz.css';
import '../styles/MainForQuiz.css';
import {useNavigate} from "react-router-dom";

export default function Main() {

    let navigate = useNavigate();
    const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
       // const traineeId = params.get('TraineeId');
       // const ctrainee = params.get('CorporateTraineeId');
        console.log(courseId); 
      //  let path =  `/quiz/?CourseId=${courseId}&TraineeId=${traineeId}&CorporateTraineeId=${ctrainee}`; 
        let path =  `/quiz/?CourseId=${courseId}`; 
        navigate(path);
    }
    return (
        <div className="container">
            {/* <h1>Exercise 1</h1> */}
            <ol>
                <li>You will be asked a few questions.</li>
                <li>One point will be awarded for each correct answer.</li>
                <li> You are only allowed to choose one option.</li>
                <li>You're allowed to change your answers if you feel the need to do so.</li>
                <li>Your result will be declared at the end of the exam.</li>
                <h4>Best of luck!</h4>
            </ol>

            <div className="start">
            <button className="create" onClick={routeChange}>Start</button>
            </div>
            </div>
    )
}