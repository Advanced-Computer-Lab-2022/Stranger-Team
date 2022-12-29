//sessions done
import 'bootstrap/dist/css/bootstrap.min.css'

import{Button, Alert, Container, Nav} from 'react-bootstrap'
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"


const Viewqwizanswers = ({ questions }) => {
return (

    <div className="course-details">
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
    
    

)
}

export default Viewqwizanswers