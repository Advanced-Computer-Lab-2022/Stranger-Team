
//REMOVED IDs' ====>>>>>DONE BUT CHECK THE INSTRUCTOR ID

import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate,useLocation  } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import styles from '../components/Guest/styles.module.css';


const CurrentCoursePageDetailsCorporateTrainee = ({ course }) => {
    
    const [instructorFirstName, setInstructorFirstName] = useState(null)
    const [instructorLastName, setInstructorLastName] = useState(null)
    const [currentInstructorId, setCurrentInstructorId] = useState(null)
    
    const fetchCurrentCourseInstructor = async () => {
    
    //getCurrentCourseInstructor
    const instructorId = course.Instructor;
   //console.log("instid "+instructorId); 

    //?id=${instructorId}
    
    const response = await fetch(`/getCurrentCourseInstructor/?id=${instructorId}`)
    
    
    const json = await response.json()
    const instructorAttributes = Object.entries(json);
    const firstName = JSON.stringify(instructorAttributes[1]);
    const firstNameString = firstName.split(",");
    const lastName = JSON.stringify(instructorAttributes[2]);
    const lastNameString = lastName.split(",");

    //removing the ] 
    const firstNameArray = firstNameString[1].split("]");
    //console.log("firstNameArray"+firstNameArray)

    // removing the , 
    const firstNameRemoveComma = firstNameArray[0].split(",");
    //console.log("firstNameRemoveComma"+firstNameRemoveComma[0])

    //removing the quotations
    const firstNameFinalArray = firstNameRemoveComma[0].split("\"");
    //console.log("firstNameFinalArray"+firstNameFinalArray[1])

    //removing the ] 
    const lastNameArray = lastNameString[1].split("]");
    //console.log("lastNameArray"+lastNameArray)

    // removing the , 
    const lastNameRemoveComma = lastNameArray[0].split(",");
    //console.log("lastNameRemoveComma"+lastNameRemoveComma[0])

    //removing the quotations
    const lastNameFinalArray = lastNameRemoveComma[0].split("\"");
    //console.log("lastNameFinalArray"+lastNameFinalArray[1])


    if (response.ok) {
        setInstructorFirstName(firstNameFinalArray[1]);
        setInstructorLastName(lastNameFinalArray[1]);
        setCurrentInstructorId(course.Instructor);
    }

    }
    fetchCurrentCourseInstructor();

    let navigate = useNavigate();

    const routeChange = () =>{ 
    const params = new URLSearchParams(window.location.search);
    //const traineeId = params.get('CorporateTraineeId');
    //?CorporateTraineeId=${traineeId}&

    let path = `/CurrentCourseInstructorPageCorporateTrainee/?id=${currentInstructorId}`; 
    navigate(path);
}
    
return (

    
    // <div className="course-details">
    // <h4>{course.Title}</h4>
    // <div className="course-details" onClick={routeChange}>
    //     <p><strong>Instructor Name: </strong>{instructorFirstName} {instructorLastName}</p> 
    // </div>
    // <p><strong>Subject: </strong>{course.Subject}</p>
    // <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
    // <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
    // <p><strong>Rating: </strong>{course.Rating}</p>
    // <p><strong>Course Description: </strong>{course.Course_Description}</p> 
    // </div>
    //-------------------------------------------------------------------------------
    <div className={styles.currentCourseDetails}>
        {/* <div className="course-details"> */}


        <h4><strong>{course.Title}</strong></h4>
        <div className={styles.currentInstructorCourseDetails} onClick={routeChange}>
            <p><strong>Instructor Name: </strong>{instructorFirstName} {instructorLastName}</p> 
        </div>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Rating<FaStar></FaStar> : </strong>{course.Rating}</p> 
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 

            
        
        
        {/* </div> */}
        </div>
)
}

export default CurrentCoursePageDetailsCorporateTrainee