//REMOVED IDs' ===>>>>>DONE
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
import CorporateTraineeSubtitleTitlesDetailsPage from "../components/CorporateTraineeSubtitleTitlesDetailsPage";
import styles from '../components/Guest/styles.module.css';



const CorporateTraineeSubtitleTitlesPage = () => {

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

    //     <div className="course-details">
    //         <form className="course-details"> 
    //         <h3>Available Course Subtitles:</h3>
    //         {subtitle && subtitle.map(subtitle => (

    //         <form className="course-details" hover
    //         sx={{
    //             "&:hover":{
    //             cursor: "pointer",
    //             backgroundColor: "#f5f5f5",
    //             width: "100%"
    //             }
    //         }}
    //         onClick={() =>{

    //         const params = new URLSearchParams(window.location.search);
    //        // const corporateTraineeId = params.get('CorporateTraineeId');
    //         const courseId = params.get('CourseId');
    //         // window.location.href=`/CurrentCourseSubtitlesPageTrainee?CourseId=${courseId}&SubtitleId=${subtitle._id}&CorporateTraineeId=${corporateTraineeId}`
    //     //he should reference

    //     //&CorporateTraineeId=${corporateTraineeId}
    //     window.location.href=`/CurrentCourseSubtitlesPageCorporateTrainee?CourseId=${courseId}&SubtitleId=${subtitle._id}`
    // } }
    //         key={subtitle._id}>
    //         <CorporateTraineeSubtitleTitlesDetailsPage subtitle={subtitle} key={subtitle._id} />
        
    //     </form>
    //     ))}

    //     </form>       
    //     </div> 
    //------------------------------------------------------------------------------------
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
                const courseId = params.get('CourseId');
                window.location.href=`/CurrentCourseSubtitlesPageCorporateTrainee?CourseId=${courseId}&SubtitleId=${subtitle._id}`} }
                key={subtitle._id}>
                <CorporateTraineeSubtitleTitlesDetailsPage subtitle={subtitle} key={subtitle._id} />
            
            </form>
            ))}

            </form>       
            </div> 

)
}

export default CorporateTraineeSubtitleTitlesPage