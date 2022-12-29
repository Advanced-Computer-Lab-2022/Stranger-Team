//sessions done
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import Navbar from "../components/Navbar";
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";

    const InstructorReportsPage = () => {

    useEffect(() => {
        
    }, [])

    let navigate = useNavigate();

        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const instructorId = params.get('id');
        //console.log(instructorId); 
        // let path = `/InstructorDeliveredReportsPage/?id=${instructorId}`; 
        let path = `/InstructorDeliveredReportsPage`; 
        navigate(path);
    }

    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const instructorId = params.get('id');
        //console.log(instructorId); 
        // let path = `/InstructorPendingReportsPage/?id=${instructorId}`; 
        let path = `/InstructorPendingReportsPage`; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const instructorId = params.get('id');
        //console.log(instructorId); 
        // let path = `/InstructorResolvedReportsPage/?id=${instructorId}`; 
        let path = `/InstructorResolvedReportsPage`; 
        navigate(path);
    }


    return (

        <div >
            <ProfileNavBar/>

            <div className="course-details" onClick={routeChange}>
            <p><strong>Delivered Reports</strong></p> 
            </div>

            <div className="course-details" onClick={routeChange1}>
            <p><strong>Pending Reports</strong></p> 
            </div>

            <div className="course-details" onClick={routeChange2}>
            <p><strong>Resolved Reports</strong></p> 
            </div>

            

        </div>
    )
    }

    export default InstructorReportsPage