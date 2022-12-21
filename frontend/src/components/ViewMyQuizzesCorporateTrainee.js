import { useState,useEffect } from "react";
import React from 'react';
import "../styles/certificate.css"

var qq;

const MyQuizzes=() => {
    const [quiz,setQuiz]=useState([]);
   
    useEffect(() => {
   const fetchQuizzes = async () => {
           const params = new URLSearchParams(window.location.search);
           const corporateTraineeId = params.get('CorporateTraineeId');
           const courseId = params.get('CourseId');
          //console.log(subtitleId); 
           const response = await fetch(`/viewQuestions/?CourseId=${courseId}`)
           const json = await response.json()
           if (response.ok) {
           setQuiz([json])    
            console.log("MyQuizzes",quiz)
        }
        qq=quiz[0];
       // console.log("First Question")
        
       }    
           fetchQuizzes()
       },[]);
     return (
       <div className="MyQuizzes">
      <h3>My Quiz For Course :</h3>
      <div className="Q">
        {qq && qq.map(quiz)}

      </div>
         
       </div>
     );
   }
   
   export default MyQuizzes;