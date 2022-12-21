
//instructor current course page
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "../components/Navbar";
    import CourseDetails from "../components/CourseDetails";
    import StarRating from "../components/StarRating";
    import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
    import CurrentCoursePageDiscountDetails from "../components/CurrentCoursePageDiscountDetails";
    import CurrentCourseDiscountPage from "../components/CurrentCourseDiscountPage";
    import CurrentCourseSubtitlesPageTrainee from "./CurrentCourseSubtitlesPageTrainee";
    import RadioButtonsRateACourse from "../components/RadioButtonsRateACourse";
    import TraineeSubtitleTitlesPage from "./TraineeSubtitleTitlesPage";
import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
import CurrentNonRegisteredCoursePageDetailsTrainee from "../components/CurrentNonRegisteredCoursePageDetailsTrainee";
import CurrentNonRegisteredCoursePageDetailsCorporateTrainee from "../components/CurrentNonRegisteredCoursePageDetailsCorporateTrainee";
import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
    



    const CurrentNonRegisteredCoursePageCorporateTrainee = () => {
    const [course, setCourse] = useState(null)

    const [removebutton, setremovebutton] = useState(false)
    

    useEffect(() => {
        const fetchCourse = async () => {
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const traineeId = params.get('TraineeId');
        
        
        const response = await fetch(`/CurrentCourse/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log("res "+response)
        console.log( "json "+json)

        if (response.ok) {
            setCourse(json)
        }


        }


        fetchCourse()
    }, [])

    let navigate = useNavigate();

    const handleOnClick = async() => {
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        console.log(courseId)
        const traineeId =  queryParams.get('CorporateTraineeId');
        const response = await fetch(`/reqAccess?CourseId=${courseId}&CorporateTraineeId=${traineeId}`,  {
            method: 'POST'
        })
        const json = await response.json()
        console.log("REQUEST:" + json)
        setremovebutton(true)
    }


    return (
        <div>
        <CorporateTraineeProfileNavBar/>
        <Container >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">
                {/* <form className="course-details">
                    <button  onClick={routeChange}>Report a problem</button>
                </form> */}

                
                {course && course.map(course => (
                <CurrentNonRegisteredCoursePageDetailsCorporateTrainee course={course} key={course._id} />
                ))[0]}

                {/* <form className="course-details">
            <button >Request Access For The Course</button>
            </form> */}
            {!removebutton && <button onClick={handleOnClick}>Request Access For The Course</button>}
                
            </div>
            
        </div>
        
                
        </div>
        
        
        </Container>
        </div>
    )
    }

    export default CurrentNonRegisteredCoursePageCorporateTrainee