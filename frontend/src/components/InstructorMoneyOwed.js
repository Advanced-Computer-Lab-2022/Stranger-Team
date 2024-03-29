
//ViewQswizAnswers
import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate,useLocation  } from "react-router-dom";
// components
import{Button, Alert, Container, Nav} from 'react-bootstrap'
import Navbar from "../components/Navbar";
var p;
const ViewMoney = () => {
// const [questionN,setQuestionN] = useState(0)
const [money,setMoney] = useState(0)
// const [answers, setanswers] = useState([])
// const [correctAnswer,setCorrectAnswer]=useState(0);

useEffect(() => {
    const fetchMoney = async () => {
    const params = new URLSearchParams(window.location.search);
    // const instructorId = params.get('id');
    // const response = await fetch(`/allMoneyOwed/?id=${instructorId}`)
    const response = await fetch(`/allMoneyOwed`)
    const json = await response.json();
    if (response.ok) {
        setMoney(json)
    }
    }        
   
    fetchMoney();
},[])
// console.log("Money",money.Money)
// p=money.Money;
return (
                <>    

                <hr/>
                <div className="row">
                    <p className="mb-0">Money Owed:</p>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{money}</p>
                </div>
                </div>
                <hr/>

    {/* <Container >
    <div className="row gutters">
    <div className="card h-100" style={{width:"300px"}}>
        <div>
        <h4>Money Owed:</h4>
        <div> {p}</div>
            </div>
            </div>
    </div>

    
    </Container> */}
            </>

)
}

export default ViewMoney