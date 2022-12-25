
//ViewQswizAnswers
import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate,useLocation  } from "react-router-dom";
// components
import{Button, Alert, Container, Nav} from 'react-bootstrap'
import Navbar from "../components/Navbar";
import Viewqwizanswers from "../components/ViewQwizAnswers";
var p;



const ViewQuestionsWizAnswers = () => {

// const [questionN,setQuestionN] = useState(0)
const [questions,setQuestions] = useState([])
// const [answers, setanswers] = useState([])
// const [correctAnswer,setCorrectAnswer]=useState(0);

useEffect(() => {
    const fetchQ = async () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('CourseId');
    const response = await fetch(`/viewAllQuestions/?CourseId=${courseId}`)
    const json = await response.json()
     console.log(" Q1' " + json[0].Q)
     console.log("array of Qs' " + json[0].Answers)
     console.log("array of Qs' " + json[0].correctAnswer)
     console.log("array of Qs' " + json)

    if (response.ok) {
        setQuestions(json)
    }
    }        
    p=questions;
    fetchQ();
},[])
console.log(p)
return (
 <div>    
    <Container >
    <div className="row gutters">
    <div className="card h-100">
        <div className="card-body">
        <div>
            {questions && questions.map(questions => (
            <Viewqwizanswers questions={questions} key={questions._id} />
            ))
            }
            </div>
        </div>
    </div>
    </div>
    
    </Container>
    </div>

)
}

export default ViewQuestionsWizAnswers