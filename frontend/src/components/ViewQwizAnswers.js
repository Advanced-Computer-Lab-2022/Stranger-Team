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
    {/* {!corpTrainee && <Link className='btn' to={`/CurrentCoursePageTrainee/?CourseId=${courseId}`}>Back To Course</Link>}
    {corpTrainee && <Link className='btn' to={`/CurrentCoursePageCorporateTrainee/?CourseId=${courseId}`}>Back To Course</Link>}
     */}
    </>

    //----------------------------------------------
    // <>
        
    //     <form className="create" style={{marginTop:'20px',marginLeft:'10px'}}>
        

    //     <div className={styles.proceedToPayment}>
    //         <h4 ><strong>Report Title: </strong></h4> 
    //         <p>{problem.Report_Title}</p> 
    //     </div>

    //     <div className={styles.proceedToPayment}>
    //         <h4 ><strong>Reported Problem: </strong></h4> 
    //         <p>{problem.Reported_Problem}</p> 
    //     </div>
    //     <div className={styles.proceedToPayment}>
    //         <h4 ><strong>Report Type: </strong></h4> 
    //         <p>{problem.Report_Type}</p> 
    //     </div>
    //     <div className={styles.proceedToPayment}>
    //         <h4 ><strong>Report Status:</strong></h4> 
    //         <p>{problem.Status}</p> 
    //     </div>

    //     <div className={styles.proceedToPayment}>
    //         <h4 ><strong>Followups Sent:</strong></h4> 
    //         {
    //     problem.Followups.map((q, i) => (
    //     <p  id={`q${i}-option`} visible="false">FOLLOW-UP {i+1}: <strong>{problem.Followups[i]}</strong></p>
    //                     ))
    //     }
    //     </div>

        

    //     {/* {error && <div className="error">{error}</div>} */}
    //     </form>
    //     </>
    
    

)
}

export default Viewqwizanswers