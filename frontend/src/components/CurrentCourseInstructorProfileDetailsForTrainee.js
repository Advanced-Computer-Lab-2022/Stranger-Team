    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import profile from '../images/profile.png'



    const   CurrentCourseInstructorProfileDetailsForTrainee= ({ instructor }) => {


    return (

        
        <div className=" image d-flex flex-column justify-content-center align-items-center"> 
        <img src={profile} width="50" height="50" className="d-inline-block align-top" alt=""></img>
        <span className="name mt-3"><strong>Instructor Name:</strong></span>
        <span className="name mt-3"><strong>{instructor.First_Name} {instructor.Last_Name}</strong></span>
        <span className="idd">{instructor.Email}</span> 
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <span className="idd">About:</span> 
        <span><i className="fa fa-copy"></i></span> </div> 
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <span className="idd1">{instructor.Bio}</span> 
        <span><i className="fa fa-copy"></i></span> </div> 
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <span className="idd"><strong>Instructor Current Rating:</strong></span> 
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <span className="idd1">{instructor.Rating}</span> 
        <span><i className="fa fa-copy"></i></span> </div> 
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <span className="idd">Instructor Reviews:</span> 
        <span><i className="fa fa-copy"></i></span> </div> 
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <span className="idd1">{instructor.Instructor_Reviews+" "}</span> 
        <span><i className="fa fa-copy"></i></span> </div> 
        
        {/* <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>  */}
        
        
        </div> 
        
        

    )
    }

    export default CurrentCourseInstructorProfileDetailsForTrainee