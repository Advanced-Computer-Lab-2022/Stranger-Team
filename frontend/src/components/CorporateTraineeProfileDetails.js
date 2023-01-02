    //ROMOVED ID done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import profile from '../images/profile.png'
    import { FaWallet,FaUserAlt } from "react-icons/fa";


    const CorporateTraineeProfileDetails = ({ trainee }) => {


        let navigate = useNavigate();

        const routeChange = () =>{  
        //?CorporateTraineeId=${trainee._id}
        let path = `/CorporateTraineeReportsPage`; 
        navigate(path);
    }

    const routeChange1 = () =>{  
        //?CorporateTraineeId=${trainee._id}
        let path = `/CorporateTraineeEditMyProfilePage`; 
        navigate(path);
    }

    const routeChange4 = () =>{  
        let path = `/changePassword`; 
        navigate(path);
    }


    return (

    //         <div>
    // <div className="container py-5">
    //     <div className="row">
    //     <div className="col-lg-4">
    //         <div className="card mb-4">
    //         <div className="card-body text-center">
    //             <img src={profile} width="50" height="50" className="d-inline-block align-top" alt=""></img>
    //             <h5 className="my-3">{trainee.Username}</h5>
    //             <p className="text-muted mb-1">Corporate Trainee</p>
    //             <p className="text-muted mb-1">{trainee.Corporate}</p>
                
    //     </div>
    //     </div>
    //     </div>
    //     </div>
    //     </div>
                
    //             <div className="row">
    //             <div className="col-sm-3">
    //                 <p className="mb-0">Name</p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <p className="text-muted mb-0">{trainee.First_Name} {trainee.Last_Name}</p>
    //             </div>
    //             </div>
    //             <hr/>
    //             <div className="row">
    //             <div className="col-sm-3">
    //                 <p className="mb-0">Email</p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <p className="text-muted mb-0">{trainee.Email}</p>
    //             </div>
    //             </div>
    //             <hr/>
    //             <div className="row">
    //             <div className="col-sm-3">
    //                 <p className="mb-0">Gender</p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <p className="text-muted mb-0">{trainee.Gender}</p>
    //             </div>
    //             </div>

    //             <div className="row">
    //                 <div className="col-sm-3">
    //                 <p className="mb-0"></p>
    //             </div>
    //             <div className="col-sm-9">
                    
    //             </div>
    //             </div>
    //             <hr/>

    //             <hr/>
    //             <div className="row">
    //                 <div className="col-sm-3">
    //                 <p className="mb-0"></p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <label className="mb-0" onClick={routeChange1}>Edit My Profile</label>
    //             </div>
    //             </div>
    //             <hr/>

    //             <hr/>
    //             <div className="row">
    //                 <div className="col-sm-3">
    //                 <p className="mb-0"></p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <label className="mb-0" onClick={routeChange4}>Change Password </label>
    //             </div>
    //             </div>
    //             <hr/>

    //             <hr/>
    //             <div className="row">
    //                 <div className="col-sm-3">
    //                 <p className="mb-0"></p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <label className="mb-0" onClick={routeChange}>My Problem Reports</label>
    //             </div>
    //             </div>
    //             <hr/>
    // </div>
    //---------------------------------------------------------------------
    <div>
                {/* <div className={styles.currentCourseDetails}>
        
        <FaUserAlt  style={{ width: '100px',height:'100px',color:'#00008B'}}></FaUserAlt>
        <span ><strong> Name:</strong> {trainee.First_Name} {trainee.Last_Name}</span>
        <span ><strong> Email:</strong> {trainee.Email}</span>

        {/* </div>  */}
        {/* </div> */} 

    <div className="container py-5">
        <div className="row">
        <div className="col-lg-4" style={{paddingLeft:'200px'}}>
            <div className="card mb-4" style={{width:'300px'}}>
            <div className="card-body text-center" >
                <FaUserAlt  style={{ width: '100px',height:'100px',color:'#00008B'}}></FaUserAlt>
                <h5 className="my-3">{trainee.Username}</h5>
                <p className="text-muted mb-1">Corporate Trainee</p>
                
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

                <hr/>
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Country</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{trainee.Country}</p>
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
                    <label className="mb-0" onClick={routeChange1}>Edit My Profile </label>
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
                    <label className="mb-0" onClick={routeChange}>My Problem Reports</label>
                </div>
                </div>
                <hr/>
                
    </div>
        

    )
    }

    export default CorporateTraineeProfileDetails