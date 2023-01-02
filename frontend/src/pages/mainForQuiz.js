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
            <ol> <strong>
                <li><strong>You will be asked a few questions.</strong></li>
                <li><strong>One point will be awarded for each correct answer.</strong></li>
                <li><strong>You are only allowed to choose one option.</strong></li>
                <li><strong>You're allowed to change your answers if you feel the need to do so.</strong></li>
                <li><strong>Your result will be declared at the end of the exam.</strong></li>
                </strong>
            </ol>

            <div style={{marginRight:'310px', marginTop:'30px'}} >
            <button className="button-48" role="button"><span class="text" onClick={routeChange} >Start</span></button>
            </div>
            </div>
    )
}