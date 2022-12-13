    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import profile from '../images/profile.png'


    const InstructorProfileDetails = ({ instructor }) => {

        let navigate = useNavigate();

        const routeChange = () =>{  
        let path = `/InstructorReportsPage/?id=${instructor._id}`; 
        navigate(path);
    }

    return (

        
        // <div className=" image d-flex flex-column justify-content-center align-items-center"> <button className="btn btn-secondary"> 
        // <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button>
        // <span className="name mt-3"><strong>Username:</strong></span>
        // <span className="name mt-3">{instructor.Username}</span>
        // <span className="name mt-3"><strong>{instructor.First_Name} {instructor.Last_Name}</strong></span>
        // <span className="idd">{instructor.Email}</span> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd">About:</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd1">{instructor.Bio}</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd"><strong>My Current Rating:</strong></span> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd1">{instructor.Rating}</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // </div>

        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd">My Ratings:</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd1">{instructor.Instructor_Ratings+" "}</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 

        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd">My Reviews:</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        // <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        // <span className="idd1">{instructor.Instructor_Reviews+" "}</span> 
        // <span><i className="fa fa-copy"></i></span> </div> 
        
        // {/* <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>  */}
        
        
        // </div> 

        <div>
    <div className="container py-5">
        <div className="row">
        <div className="col-lg-4">
            <div className="card mb-4">
            <div className="card-body text-center">
                <img src={profile} width="50" height="50" className="d-inline-block align-top" alt=""></img>
                <h5 className="my-3">{instructor.Username}</h5>
                <p className="text-muted mb-1">Certified Instructor</p>
                
        </div>
        </div>
        </div>
        </div>
        </div>

        {/* <div className="card-body text-center">
        <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Username</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{trainee.Username}</p>
                </div>
                </div>
                </div> */}
                
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Name</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{instructor.First_Name} {instructor.Last_Name}</p>
                </div>
                </div>
                <hr/>
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{instructor.Email}</p>
                </div>
                </div>
                <hr/>
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{instructor.Gender}</p>
                </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    
                </div>
                </div>
                <hr/>

                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    <label className="mb-0" onClick={routeChange}>My Problem Reports</label>
                </div>
                </div>
                <hr/>
    </div>
        
        

    )
    }

    export default InstructorProfileDetails