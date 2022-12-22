
//instructor current course page
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "./MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "./Navbar";
    import CourseDetails from "./CourseDetails";
    import StarRating from "./StarRating";
    import CurrentCoursePageDetails from "./CurrentCoursePageDetails";
    import CurrentCoursePageDiscountDetails from "./CurrentCoursePageDiscountDetails";
    import CurrentCourseDiscountPage from "./CurrentCourseDiscountPage";
    import PreviewCourseVideoPageDetails from "./PreviewCourseVideoTraineePageDetails";
    // import FetchInstructorNameForTraineeCourseDetails from "../components/FetchInstructorNameForTraineeCourseDetails";




    const CurrentCourseInstructorCoursesComponent = () => {
    const [courses, setCourse] = useState(null)
    const [discount,setDiscount] = useState(null)
    

    useEffect(() => {
        const fetchCourse = async () => {
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        const traineeId = params.get('TraineeId');
        //console.log(courseId); 
        
        
        //const response = await fetch(`/fetchCurrentCourseInstructorCoursesByInstructorId/?id=${instructorId}`)
        const response = await fetch(`/fetchNonRegisteredTraineeCoursesForInstructor/?TraineeId=${traineeId}&id=${instructorId}`)
        
        
        const json = await response.json()
        console.log("res "+response)
        console.log( "json "+json)

        if (response.ok) {
            setCourse(json)
        }


        }


        fetchCourse()
    }, [])


    return (
        <div>

        <div className="row gutters">
            <div className="courses">
            {courses && courses.map(course => (
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                //onClick={() => window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}`}
                onClick={() =>{
                const params = new URLSearchParams(window.location.search);
                const traineeId = params.get('TraineeId');
                console.log(traineeId);
                window.location.href=`/CurrentNonRegisteredCoursePageTrainee?CourseId=${course._id}&TraineeId=${traineeId}`} }
                key={course._id}>
            <CourseDetails course={course} key={course.id} />
            <PreviewCourseVideoPageDetails course={course} key={course.id} />
            
            
            </Container>
            ))}
        </div>
            
        </div>
        </div>
    )
    }

    export default CurrentCourseInstructorCoursesComponent