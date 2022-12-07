
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
    // import FetchInstructorNameForTraineeCourseDetails from "../components/FetchInstructorNameForTraineeCourseDetails";




    const CurrentCoursePageTrainee = () => {
    const [course, setCourse] = useState(null)
    const [discount,setDiscount] = useState(null)
    

    useEffect(() => {
        const fetchCourse = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //console.log(courseId); 
        const traineeId = params.get('traineeId');
        //console.log("traineeId "+traineeId);
        
        
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


    return (
        <div>
        <Navbar/>
        <Container >

        <div class="row gutters">
        <div class="card h-100">
            <div class="card-body">
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                {course && course.map(course => (
                <CurrentCoursePageDetails course={course} key={course._id} />
                ))[0]}
                {/* <CurrentCourseDiscountPage/> */}
                <CurrentCourseSubtitlesPageTrainee/>
                <StarRating></StarRating> 
            </div>
            
        </div>
        </div>
        
        </Container>
        </div>
    )
    }

    export default CurrentCoursePageTrainee