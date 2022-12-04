
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
    import CurrentCourseInstructorPageSubtitleDetails from "./CurrentCourseInstructorPageSubtitlesDetails"



    const CurrentCourseInstructorPageSubtitles = () => {
    
    const [subtitle,setSubtitle] = useState(null)
    

    useEffect(() => {
        const fetchSubtitles = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        console.log(courseId); 
        
        const response = await fetch(`/fetchSubtitlesByCourseId/?CourseId=${courseId}`)

        
        
        const json = await response.json()
        console.log("subtitles"+response)
        console.log( json)

        if (response.ok) {
            setSubtitle(json)
        }


        }


        fetchSubtitles()
    }, [])


    return (

        <div className="course-details">

        {/* <div class="container">
        <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body"> */}
                <h4>Available Course Subtitles:</h4>
                {subtitle && subtitle.map(subtitle => (
                <CurrentCourseInstructorPageSubtitleDetails subtitle={subtitle} key={subtitle._id} />
                ))}
            </div>

        // </div>
        // </div>
        // </div>
        
        // </div>
        // </div>
    )
    }

    export default CurrentCourseInstructorPageSubtitles