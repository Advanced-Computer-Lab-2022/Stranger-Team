    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import profile from '../images/profile.png'


    const CorporateTraineeProfileDetails = ({ trainee }) => {


        let navigate = useNavigate();

        const routeChange = () =>{  
        let path = `/CorporateTraineeReportsPage/?CorporateTraineeId=${trainee._id}`; 
        navigate(path);
    }


    return (

            <div>
    <div className="container py-5">
        <div className="row">
        <div className="col-lg-4">
            <div className="card mb-4">
            <div className="card-body text-center">
                <img src={profile} width="50" height="50" className="d-inline-block align-top" alt=""></img>
                <h5 className="my-3">{trainee.Username}</h5>
                <p className="text-muted mb-1">Corporate Trainee</p>
                <p className="text-muted mb-1">{trainee.Corporate}</p>
                
        </div>
        </div>
        </div>
        </div>
        </div>
                
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Name</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{trainee.First_Name} {trainee.Last_Name}</p>
                </div>
                </div>
                <hr/>
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{trainee.Email}</p>
                </div>
                </div>
                <hr/>
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{trainee.Gender}</p>
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

    export default CorporateTraineeProfileDetails