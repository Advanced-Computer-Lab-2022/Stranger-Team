    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import profile from '../images/profile.png'


    const AdminProfileDetails = ({ admin }) => {

        console.log(admin._id)
        console.log(admin.Username)


    let navigate = useNavigate();

    const routeChange3 = () =>{  
        let path = `/AdminEditMyProfilePage/?AdminId=${admin._id}`; 
        navigate(path);
    }

    const routeChange = () =>{  
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
                {/* <h5 className="my-3">{admin.Username}</h5> */}
                <p className="text-muted mb-1">Adminstrator</p>
                
        </div>
        </div>
        </div>
        </div>
        </div>
                
                <hr/>
                <div className="row">
                    {/* <div className="col-sm-3">
                    <p className="mb-0">Username</p>
                </div> */}
                <div className="col-sm-9">
                    <label className="mb-0">Username  {admin.Username}</label>
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
                    <label className="mb-0" onClick={routeChange}>Change Password </label>
                </div>
                </div>
                <hr/>

                
                
    </div>

    )
    }

    export default AdminProfileDetails