    //REMOVED IDs' ===>>>>>>DONE

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

    const CorporateTraineeReportsPage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("");

    useEffect(() => {
        // const fetchCourses = async () => {
        // const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 


        // const response = await fetch(`/View_All_Courses/?q=${searchQuery}`)
        
        // const json = await response.json()
        // console.log(json)
        
        // setCourses(json)
        
        // }

        // fetchCourses()
    }, [])

    let navigate = useNavigate();

        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
       // const traineeId = params.get('CorporateTraineeId');
        //console.log(traineeId); 
        //?CorporateTraineeId=${traineeId}
        let path = '/CorporateTraineeDeliveredReportsPage'; 
        navigate(path);
    }

    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('CorporateTraineeId');
        //console.log(traineeId); 
        ///?CorporateTraineeId=${traineeId}
        let path = '/CorporateTraineePendingReportsPage'; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
       // const traineeId = params.get('CorporateTraineeId');
        //console.log(traineeId); 
///?CorporateTraineeId=${traineeId}
        let path = '/CorporateTraineeResolvedReportsPage'; 
        navigate(path);
    }


    return (

        <div >
            <TraineeProfileNavBar/>

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

    export default CorporateTraineeReportsPage