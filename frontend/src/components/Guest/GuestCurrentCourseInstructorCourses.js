//sessions done
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    import styles from "./styles.module.css"; 

    // components
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import GuestCourseDetails from "./GuestCourseDetails";
    import GuestCurrentCourseinstructorCourseDetails from "./GuestCurrentCourseinstructorCourseDetails";
    // import FetchInstructorNameForTraineeCourseDetails from "../components/FetchInstructorNameForTraineeCourseDetails";




    const GuestCurrentCourseInstructorCourses = () => {
    const [courses, setCourse] = useState(null)
    const [discount,setDiscount] = useState(null)
    

    useEffect(() => {
        const fetchCourse = async () => {
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        //const traineeId = params.get('TraineeId');
        //console.log(courseId); 
        
        
        //const response = await fetch(`/fetchCurrentCourseInstructorCoursesByInstructorId/?id=${instructorId}`)
        // const response = await fetch(`/fetchNonRegisteredTraineeCoursesForInstructor/?TraineeId=${traineeId}&id=${instructorId}`)
        const response = await fetch(`/fetchInstructorCoursesByIdForGuest/?id=${instructorId}`)
        
        
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
            window.location.href=`/GuestCurrentCoursePage?CourseId=${course._id}`} }
                key={course._id}>
            <GuestCurrentCourseinstructorCourseDetails course={course} key={course.id} />  
                
                
                </div>
            ))}
            </div>

        
    )
    }

    export default GuestCurrentCourseInstructorCourses