//sessions done
import 'bootstrap/dist/css/bootstrap.min.css'

import{Button, Alert, Container, Nav} from 'react-bootstrap'
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import styles from "../components/Guest/styles.module.css"




const Viewqwizanswers = ({ questions }) => {
    const [corpTrainee, setCorpTrainee] = useState(false)
    



    const checkTrainee = async() => {
    
        // const response = await fetch(`/routeCheck?CourseId=${courseId}&TraineeId=${traineeId}&CorporateTraineeId=${ctrainee}`,  {
        //     method: 'GET'
        // })
         const response = await fetch('/routeCheck?',  {
            method: 'GET'
        })
        const json = await response.json()
        console.log(json)
        if (response.ok) {
            setCorpTrainee(true)
            console.log("OK" + corpTrainee)
        }

        if (!response.ok) {
            console.log("NOT OK" + corpTrainee)
        }

    }
    checkTrainee();
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('CourseId');
    //const traineeId = params.get('TraineeId');
    //const ctrainee = params.get('CorporateTraineeId');
    console.log(courseId); 

return (
    <>

    <div className={styles.proceedToPayment}>
    <h4><strong>Question Number: </strong></h4>
    <p style={{fontsize:"20px"}}>{questions.QNumber}</p>
    <hr/>
    <h4><strong>Question: </strong></h4>
    <ol>
    <p>{questions.Q}</p>
    <hr/>
    <li>{questions.Answers[0]}</li>
    <li>{questions.Answers[1]}</li>
    <li>{questions.Answers[2]}</li>
    <li>{questions.Answers[3]}</li>
    <hr/>
    </ol>
    <h4><strong>Correct Answer :</strong></h4>
    {/* <p>{questions.correctAnswer +1}</p> */}
    <p>
    {questions.Answers[questions.correctAnswer]}
    </p>

    
    </div>
   
    </>

   

)
}

export default Viewqwizanswers