
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

    const TraineeRefundRequestsPage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("");

    useEffect(() => {
    }, [])

    let navigate = useNavigate();

    const routeChange1 = () =>{  
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        console.log(traineeId); 
        let path = `/TraineePendingRefundRequestsPage/?TraineeId=${traineeId}`; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        console.log(traineeId); 
        let path = `/TraineeResolvedReportsPage/?TraineeId=${traineeId}`; 
        navigate(path);
    }


    return (

        <div >
            <TraineeProfileNavBar/>

            <div className="course-details" onClick={routeChange1}>
            <p><strong>Pending Requests</strong></p> 
            </div>

            <div className="course-details" onClick={routeChange2}>
            <p><strong>Accepted Requests</strong></p> 
            </div>

            

        </div>
    )
    }

    export default TraineeRefundRequestsPage