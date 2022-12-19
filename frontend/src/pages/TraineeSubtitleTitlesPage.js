
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
    import CurrentCourseSubtitlesPageDetailsTrainee from "../components/CurrentCourseSubtitlesPageDetailsTrainee";
    import TraineeSubtitleTitlesDetailsPage from "../components/TraineeSubtitleTitlesDetailsPage";



    const TraineeSubtitleTitlesPage = () => {
    
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
                <form className="course-details"> 
                <h3>Available Course Subtitles:</h3>
                {subtitle && subtitle.map(subtitle => (

                <form className="course-details" hover
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
                const courseId = params.get('CourseId');
                window.location.href=`/CurrentCourseSubtitlesPageTrainee?CourseId=${courseId}&SubtitleId=${subtitle._id}&TraineeId=${traineeId}`} }
                key={subtitle._id}>
                <TraineeSubtitleTitlesDetailsPage subtitle={subtitle} key={subtitle._id} />
            
            </form>
            ))}

                {/* <h3>Available Course Subtitles:</h3>
                {subtitle && subtitle.map(subtitle => (
                <TraineeSubtitleTitlesDetailsPage subtitle={subtitle} key={subtitle._id} />
                ))} */}

            </form>       
            </div> 

    )
    }

    export default TraineeSubtitleTitlesPage