
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
import PreviewCourseVideoPageDetails from "../components/PreviewCourseVideoTraineePageDetails";
    



    const FromCurrentNonRegisteredCoursePageTrainee = () => {
    const [course, setCourse] = useState(null)
    

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
        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        const courseId= params.get('CourseId');
        console.log(traineeId); 

        let path = `/CurrentCoursePageTrainee?CourseId=${courseId}&TraineeId=${traineeId}`; 
        navigate(path);
    }

    return (
        <div>
        <TraineeProfileNavBar/>
        <Container >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body" onClick={routeChange}>
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                {/* <form className="course-details">
                    <button  onClick={routeChange}>Report a problem</button>
                </form> */}
                <h3>You are registered in this course!</h3>
                
                {/* {course && course.map(course => (
                
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                onClick={() =>{
                const params = new URLSearchParams(window.location.search);
                const traineeId = params.get('TraineeId');
                console.log(traineeId);
                window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}&TraineeId=${traineeId}`}}
                key={course._id}>
            
            </Container> 
            ))[0]}*/}
            {course && course.map(course => (
                <CurrentNonRegisteredCoursePageDetailsTrainee course={course} key={course._id} />
                ))[0]}
            <PreviewCourseVideoPageDetails/>
                
            </div>
            
        </div>
        
                
        </div>
        
        
        </Container>
        </div>
    )
    }

    export default FromCurrentNonRegisteredCoursePageTrainee