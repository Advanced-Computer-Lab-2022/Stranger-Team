    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import { FaWallet } from "react-icons/fa";
    import profile from '../images/profile.png'


    const TraineeProfileDetails = ({ trainee }) => {


        let navigate = useNavigate();

        const routeChange = () =>{  
        let path = `/TraineeReportsPage/?TraineeId=${trainee._id}`; 
        navigate(path);
    }
    
    const routeChange1 = () =>{  
        let path = `/MyWalletTraineePage/?TraineeId=${trainee._id}`; 
        navigate(path);
    }

    const routeChange2 = () =>{  
        let path = `/TraineeRefundRequestsPage/?TraineeId=${trainee._id}`; 
        navigate(path);
    }

    const routeChange3 = () =>{  
        let path = `/TraineeEditMyProfilePage/?TraineeId=${trainee._id}`; 
        navigate(path);
    }

    const routeChange4 = () =>{  
        let path = `/changePassword`; 
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
                <p className="text-muted mb-1">Individual Trainee</p>
                
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
                    <label className="mb-0" onClick={routeChange3}>Edit My Profile </label>
                </div>
                </div>
                <hr/>

                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    <label className="mb-0" onClick={routeChange4}>Change Password </label>
                </div>
                </div>
                <hr/>

                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    <label className="mb-0" onClick={routeChange1}>My Wallet <FaWallet></FaWallet></label>
                </div>
                </div>
                <hr/>

                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    <label className="mb-0" onClick={routeChange2}>My Refunded Requests</label>
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
        
        
        // <div className="container">
        // <div className="main-body">        
        
        //     <div className="row gutters-sm">

        //         <div className="col-md-4 mb-3">
        //         <div className="card">
        //             <div className="card-body">
        //             <div className="d-flex flex-column align-items-center text-center">
        //                 <img src={profile} alt="Admin" className="rounded-circle" width="150"/>
        //                 <div className="mt-3">
        //                 <h4>{trainee.First_Name} {trainee.Last_Name}</h4>
        //                 <p className="text-secondary mb-1">Individual Trainee</p>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //         </div>
                
        //         <div className="col-md-8">
        //         <div className="card mb-3">
        //             <div className="card-body">
        //             <div className="row">
        //                 <div className="col-sm-3">
        //                 <h6 className="mb-0">Username </h6>
        //                 </div>
        //                 <div className="col-sm-9 text-secondary">
        //                 {trainee.username}
        //                 </div>
        //             </div>

        //             <hr/>
        //             <div className="row">
        //                 <div className="col-sm-3">
        //                 <h6 className="mb-0">Email</h6>
        //                 </div>
        //                 <div className="col-sm-9 text-secondary">
        //                 {trainee.Email}
        //                 </div>
        //             </div>
        //             <hr/>
        //             <div className="row">
        //                 <div className="col-sm-3">
        //                 <h6 className="mb-0">Gender</h6>
        //                 </div>
        //                 <div className="col-sm-9 text-secondary">
        //                 {trainee.Gender}
        //                 </div>
        //             </div>


        //             </div>


        //         </div>
        //         </div>
                


        //     </div>
        //     </div>
        //     </div>

    )
    }

    export default TraineeProfileDetails