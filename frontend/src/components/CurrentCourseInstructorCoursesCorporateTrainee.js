//REMOVED IDs'-->>>> done

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
import CourseDetailsCorporateTrainee from "./CourseDetailsCorporateTrainee";
import styles from "../components/Guest/styles.module.css"
// import FetchInstructorNameForTraineeCourseDetails from "../components/FetchInstructorNameForTraineeCourseDetails";




const CurrentCourseInstructorCoursesCorporateTrainee = () => {
const [courses, setCourse] = useState(null)
const [discount,setDiscount] = useState(null)


useEffect(() => {
    const fetchCourse = async () => {
    const params = new URLSearchParams(window.location.search);
    const instructorId = params.get('id');
    //const traineeId = params.get('CorporateTraineeId');
    console.log("instructorId"+instructorId); 
    
    //?CorporateTraineeId=${traineeId}&

    //const response = await fetch(`/fetchCurrentCourseInstructorCoursesByInstructorId/?id=${instructorId}`)
    const response = await fetch(`/fetchNonRegisteredCorporateTraineeCoursesForInstructor/?id=${instructorId}`)
    
    
    const json = await response.json()
    console.log("res "+response)
    console.log( "json "+json)

    if (response.ok) {
        setCourse(json)
        console.log("courses"+courses);
    }


    }


    fetchCourse()
}, [])


return (
    // <div>

    // <div className="row gutters">
    //     <div className="courses">
    //     {courses && courses.map(course => (
    //     <Container hover
    //         sx={{
    //             "&:hover":{
    //             cursor: "pointer",
    //             backgroundColor: "#f5f5f5",
    //             width: "100%"
    //             }
    //         }}
    //         //onClick={() => window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}`}
    //         onClick={() =>{
    //         const params = new URLSearchParams(window.location.search);
    //         //const traineeId = params.get('CorporateTraineeId');
    //         //console.log(traineeId);

    //         //&CorporateTraineeId=${traineeId}
    //         window.location.href=`/CurrentNonRegisteredCoursePageCorporateTrainee?CourseId=${course._id}`} }
    //         key={course._id}>
    //     <CourseDetails course={course} key={course.id} />
    //     {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
        
        
    //     </Container>
    //     ))}
    // </div>
        
    // </div>
    // </div>
    //--------------------------------------------------------------------

    <>
    {courses && <h3>Explore More of The Instructor's Courses:</h3>}
    {!courses && <h3>You are registered in all of this instructor's courses!</h3>}
    
    <div className={styles.instructorCoursesGrid}>
                {courses && courses.map(course => (
                
            <div  className={styles.instructorCourseDetails} hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                onClick={() =>{
            window.location.href=`/CurrentNonRegisteredCoursePageCorporateTrainee?CourseId=${course._id}`} }
                key={course._id}>
            <CourseDetailsCorporateTrainee course={course} key={course.id} />  
                
                
                </div>
            ))}
            </div>
            </>
)
}

export default CurrentCourseInstructorCoursesCorporateTrainee