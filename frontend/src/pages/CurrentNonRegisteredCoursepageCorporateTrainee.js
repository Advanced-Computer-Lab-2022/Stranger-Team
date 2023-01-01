//REMOVED IDs'===>>>>>DONE


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
import PreviewCourseVideoPageDetails from "../components/PreviewCourseVideoTraineePageDetails";
import styles from "../components/Guest/styles.module.css"




const CurrentNonRegisteredCoursePageCorporateTrainee = () => {
const [course, setCourse] = useState(null)
const [accessLabel, setAccessLabel] = useState(false)

const [removebutton, setremovebutton] = useState(false)


useEffect(() => {
    const fetchCourse = async () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('CourseId');
    //const traineeId = params.get('TraineeId');
    
    
    const response = await fetch(`/CurrentCourse/?CourseId=${courseId}`)
    
    
    const json = await response.json()
    console.log("res "+response)
    console.log( "json "+json)

    if (response.ok) {
        setCourse(json)
    }


    }


    fetchCourse()
    handleOnClick()
}, [])

let navigate = useNavigate();

const handleOnClick = async() => {
    const queryParams = new URLSearchParams(window.location.search);
    const courseId = queryParams.get('CourseId');
    console.log(courseId)
    //const traineeId =  queryParams.get('CorporateTraineeId');

    //&CorporateTraineeId=${traineeId}
    const response = await fetch(`/req?CourseId=${courseId}`,  {
        method: 'GET'
    })
    const json = await response.json()
    if (response.ok) {

    }
    if (!response.ok) {
        setAccessLabel(true)
    }
}

const checkAccess = async() => {
    const queryParams = new URLSearchParams(window.location.search);
    const courseId = queryParams.get('CourseId');
    console.log(courseId)
    //const traineeId =  queryParams.get('CorporateTraineeId');
    //&CorporateTraineeId=${traineeId}
    const response = await fetch(`/req?CourseId=${courseId}`,  {
        method: 'GET'
    })
    const json = await response.json()
    console.log(json)
    if (response.ok) {
        //&CorporateTraineeId=${traineeId}
        const response1 = await fetch(`/reqAccess?CourseId=${courseId}`,  {
            method: 'POST'
        })
        const json1 = await response1.json()
        console.log(accessLabel)
        setAccessLabel(true)
    }

    if (!response.ok) {
        setAccessLabel(true)
    }

   
    
}


return (
    // <div>
    // <CorporateTraineeProfileNavBar/>
    // <Container >

    // <div className="row gutters">
    // <div className="card h-100">
    //     <div className="card-body">
    //         {/* <form className="course-details">
    //             <button  onClick={routeChange}>Report a problem</button>
    //         </form> */}

            
    //         {course && course.map(course => (
    //         <CurrentNonRegisteredCoursePageDetailsCorporateTrainee course={course} key={course._id} />
    //         ))[0]}
    //         <PreviewCourseVideoPageDetails/>

    //         {/* <form className="course-details">
    //     <button >Request Access For The Course</button>
    //     </form> */}
    //     {/* {!removebutton && <button onClick={handleOnClick}>Request Access For The Course</button>} */}

    //     {!accessLabel && <button onClick={checkAccess}>Request Access For The Course</button>}

    //     {accessLabel && <label><strong>You've requested access to this course.</strong></label>}
            
    //     </div>
        
    // </div>
    
            
    // </div>
    
    
    // </Container>
    // </div>
    //-------------------------------------------------------------------

    <div>
        <CorporateTraineeProfileNavBar/>
        <Container >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">

                {course && course.map(course => (
                
            <div  className={styles.currentCourseContainer} hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                key={course._id}>
                <CurrentNonRegisteredCoursePageDetailsCorporateTrainee course={course} key={course._id} />
                
                
                </div>
            ))[0]}
            <PreviewCourseVideoPageDetails/>

                

        {!accessLabel && <button className={styles.blueButton} onClick={checkAccess}>Request Access For The Course</button>}

        {accessLabel && <label><strong>You've requested access to this course.</strong></label>}
                
            </div>
            
        </div>
        </div>
        
        
        </Container>
        </div>
)
}

export default CurrentNonRegisteredCoursePageCorporateTrainee