    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import profile from '../images/profile.png'
    import { FaStar,FaUserAlt } from 'react-icons/fa';
    import styles from '../components/Guest/styles.module.css';



    const   CurrentCourseInstructorProfileDetailsForTrainee= ({ instructor }) => {


    return (

        
        // <div className=" image d-flex flex-column justify-content-center align-items-center"> 
        // <img src={profile} width="50" height="50" className="d-inline-block align-top" alt=""></img>
        // <span className="name mt-3"><strong>Instructor Name:</strong></span>
        // <span className="name mt-3"><strong>{instructor.First_Name} {instructor.Last_Name}</strong></span>
        // <span className="idd">{instructor.Email}</span> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd">About:</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd1">{instructor.Bio}</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd"><strong>Instructor Current Rating:</strong></span> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd1">{instructor.Rating}</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // </div>

        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd">Instructor Reviews:</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd1">{instructor.Instructor_Reviews+" "}</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        
        
        
        // </div> 

        <div className={styles.currentCourseDetails}>
        
        <FaUserAlt  style={{ width: '100px',height:'100px',color:'#00008B'}}></FaUserAlt>
        <span ><strong>Instructor Name:</strong> {instructor.First_Name} {instructor.Last_Name}</span>
        <span ><strong>Instructor Email:</strong> {instructor.Email}</span>
        <div >
        <span ><strong>About: </strong> {instructor.Bio}</span> 
        </div> 
        <div >
        <span ><strong>Instructor Rating<FaStar></FaStar> : </strong></span> 
        <div >
        <span >{instructor.Rating}</span> 
        </div> 
        </div>

        <div >
        <span ><strong>Instructor Reviews: </strong></span> 
        <span><i ></i></span> </div> 
        <div >
        <span>{instructor.Instructor_Reviews+" "}</span> 
        <span><i ></i></span> </div> 
        {/* </div>  */}
        </div>
        
        

    )
    }

    export default CurrentCourseInstructorProfileDetailsForTrainee