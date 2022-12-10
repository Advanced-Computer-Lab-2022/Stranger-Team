    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"


    const InstructorProfileDetails = ({ instructor }) => {


    return (

        
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> 
        <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button>
        <span class="name mt-3"><strong>Username:</strong></span>
        <span class="name mt-3">{instructor.Username}</span>
        <span class="name mt-3"><strong>{instructor.First_Name} {instructor.Last_Name}</strong></span>
        <span class="idd">{instructor.Email}</span> 
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd">About:</span> 
        <span><i class="fa fa-copy"></i></span> </div> 
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd1">{instructor.Bio}</span> 
        <span><i class="fa fa-copy"></i></span> </div> 
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd"><strong>My Current Rating:</strong></span> 
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd1">{instructor.Rating}</span> 
        <span><i class="fa fa-copy"></i></span> </div> 
        </div>

        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd">My Ratings:</span> 
        <span><i class="fa fa-copy"></i></span> </div> 
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd1">{instructor.Instructor_Ratings+" "}</span> 
        <span><i class="fa fa-copy"></i></span> </div> 

        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd">My Reviews:</span> 
        <span><i class="fa fa-copy"></i></span> </div> 
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
        <span class="idd1">{instructor.Instructor_Reviews+" "}</span> 
        <span><i class="fa fa-copy"></i></span> </div> 
        
        {/* <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>  */}
        
        
        </div> 
        
        

    )
    }

    export default InstructorProfileDetails