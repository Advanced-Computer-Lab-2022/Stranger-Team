    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import profile from '../images/profile.png'
    import ViewMoney from "../components/InstructorMoneyOwed";
    import { FaWallet,FaUserAlt } from "react-icons/fa";



    const InstructorProfileDetails = ({ instructor }) => {

        let navigate = useNavigate();

        const routeChange = () =>{  
        // let path = `/InstructorReportsPage/?id=${instructor._id}`; 
        let path = `/InstructorReportsPage`; 
        navigate(path);
    }

    const routeChange1 = () =>{  
        let path = `/changePassword`; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        // const instructorId = params.get('id');
        // console.log(instructorId); 
        // let path = `/InstructorEditMyProfilePage/?id=${instructor._id}`; 
        let path = `/InstructorEditMyProfilePage`; 
        navigate(path);
    }

    return (

        <div>
    <div className="container py-5">
        <div className="row">
        <div className="col-lg-4" style={{paddingLeft:'200px'}}>
            <div className="card mb-4" style={{width:'300px'}}>
            <div className="card-body text-center" >
                <FaUserAlt  style={{ width: '100px',height:'100px',color:'#00008B'}}></FaUserAlt>
                <h5 className="my-3">{instructor.Username}</h5>
                <p className="text-muted mb-1">Certified Instructor</p>
                
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
                    <p className="text-muted mb-0">{instructor.First_Name} {instructor.Last_Name}</p>
                </div>
                </div>
                <hr/>


                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">About</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{instructor.Bio}</p>
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

                <ViewMoney/>
               

                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    
                </div>
                </div>
                

                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    <label className="mb-0" onClick={routeChange2}>Edit My Profile </label>
                </div>
                </div>
                <hr/>
               
                
                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    <label className="mb-0" onClick={routeChange1}>Change Password</label>
                </div>
                </div>
                



                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                    <p className="mb-0"></p>
                </div>
                <div className="col-sm-9">
                    <label className="mb-0" onClick={routeChange}>My Reports</label>
                </div>
                </div>
                <hr/>
    </div>
  
          
  //     <div>
    //     <div className="container py-5">
    //         <div className="row">
    //         <div className="col-lg-4">
    //             <div className="card mb-4">
    //             <div className="card-body text-center">
    //                 <img src={profile} width="50" height="50" className="d-inline-block align-top" alt=""></img>
    //                 <h5 className="my-3">{instructor.Username}</h5>
    //                 <p className="text-muted mb-1">Certified Instructor</p>
                    
    //         </div>
    //         </div>
    //         </div>
    //         </div>
    //         </div>

                
    //             <div className="row">
    //             <div className="col-sm-3">
    //                 <p className="mb-0">Name</p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <p className="text-muted mb-0">{instructor.First_Name} {instructor.Last_Name}</p>
    //             </div>
    //             </div>
    //             <hr/>
    //             <div className="row">
    //             <div className="col-sm-3">
    //                 <p className="mb-0">About</p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <p className="text-muted mb-0">{instructor.Bio}</p>
    //             </div>
    //             </div>
    //             <hr/>
    //             <div className="row">
    //             <div className="col-sm-3">
    //                 <p className="mb-0">Email</p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <p className="text-muted mb-0">{instructor.Email}</p>
    //             </div>
    //             </div>
    //             <hr/>
    //             <div className="row">
    //             <div className="col-sm-3">
    //                 <p className="mb-0">Gender</p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <p className="text-muted mb-0">{instructor.Gender}</p>
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


    //             <ViewMoney/>
                

    //             <hr/>
    //             <div className="row">
    //                 <div className="col-sm-3">
    //                 <p className="mb-0"></p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <label className="mb-0" onClick={routeChange2}>Edit My Profile</label>
    //             </div>
    //             </div>
    //             <hr/>


    //             <hr/>
    //             <div className="row">
    //                 <div className="col-sm-3">
    //                 <p className="mb-0"></p>
    //             </div>
    //             <div className="col-sm-9">
    //                 <label className="mb-0" onClick={routeChange1}>Change Password </label>
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
        
        

    )
    }

    export default InstructorProfileDetails