
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
    import CurrentCourseInstructorPageSubtitleDetails from "../components/CurrentCourseInstructorPageSubtitlesDetails"
    import CurrentCoursePageSubtitleDetails from "../components/CurrentCourseInstructorPageSubtitlesDetails";



    const CurrentCourseSubtitlesPageTrainee = () => {
    
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

                <h4>Available Course Subtitles:</h4>
                {subtitle && subtitle.map(subtitle => (
                <CurrentCoursePageSubtitleDetails subtitle={subtitle} key={subtitle._id} />
                ))}
            </div>

    )
    }

    export default CurrentCourseSubtitlesPageTrainee