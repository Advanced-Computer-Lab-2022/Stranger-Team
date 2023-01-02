//REMOVED IDs'===>>>>DONE

//ViewQswizAnswers
import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate,useLocation  } from "react-router-dom";
// components
import{Button, Alert, Container, Nav} from 'react-bootstrap'
import Navbar from "../components/Navbar";
import Viewqwizanswers from "../components/ViewQwizAnswers";
import { Link } from 'react-router-dom';
import TraineeProfileNavBar from '../components/TraineeProfilNavBar'
import CorporateTraineeProfileNavBar from '../components/CorporateTraineeProfileNavBar'
var p;
var f;


const ViewQuestionsWizAnswers = () => {

// const [questionN,setQuestionN] = useState(0)
const [questions,setQuestions] = useState([])
const [finished,setFinished] = useState(false)
const [corpTrainee, setCorpTrainee] = useState(false)

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
    

    const fetchStatus=async()=>{
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
       // const TraineeId=params.get('CorporateTraineeId')
       //&TraineeId=${TraineeId}
        const response = await fetch(`/checkCourseFinished/?CourseId=${courseId}`)
        const json = await response.json()
       // console.log("----------------->>>>>>>>>>>>>>>>>>>",json)
        if(response.ok){
        setFinished(json)
        }
    }
    f=finished;
    console.log("----------------->>>>>>>>>>>>>>>>>>>",f)

    p=questions;
    fetchStatus()  
    fetchQ();
})
console.log(p)


const params = new URLSearchParams(window.location.search);
const courseId = params.get('CourseId');
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
return (
 <div>    
    {/* <div className="start" style={{marginRight:'350px'}}> */}
            {!corpTrainee &&  <TraineeProfileNavBar></TraineeProfileNavBar>}
            {corpTrainee && <CorporateTraineeProfileNavBar></CorporateTraineeProfileNavBar>}           
             {/* </div> */}
    <Container >
    <div className="row gutters">
    <div className="card h-100">
        <div className="card-body">
        <div>{f==true ? <div className="card-body">
            {questions && questions.map(questions => (
            <Viewqwizanswers questions={questions} key={questions._id} />
            ))
            }</div>:<div> <p> You didn't Take The Exam Yet</p></div> }
            </div>
        </div>
    </div>
    </div>
    
    </Container>
    <div className="start" style={{marginRight:'730px'}}>
            {!corpTrainee && <Link className='button-48' style={{marginTop:'20px'}} to={`/CurrentCoursePageTrainee/?CourseId=${courseId}`}>Back To Course</Link>}
            {corpTrainee && <Link className='button-48'style={{marginTop:'20px'}} to={`/CurrentCoursePageCorporateTrainee/?CourseId=${courseId}`}>Back To Course</Link>}           
             </div>
    </div>

)
}

export default ViewQuestionsWizAnswers