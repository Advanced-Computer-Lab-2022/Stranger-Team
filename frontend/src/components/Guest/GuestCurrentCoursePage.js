    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    import styles from "./styles.module.css"; 

    // components
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import CurrentNonRegisteredCoursePageDetailsTrainee from "../../components/CurrentNonRegisteredCoursePageDetailsTrainee";
    import PreviewCourseVideoPageDetails from '../../components/PreviewCourseVideoTraineePageDetails'
    import GuestNavBar from "./GuestNavBar";
    import GuestCurrentCoursePageDetails from "./GuestCurrentCoursePageDetails";




    const GuestCurrentCoursePage = () => {
    const [course, setCourse] = useState(null)
    

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
    }, [])

    let navigate = useNavigate();

        const routeChange = () =>{ 
        let path = `/signup`; 
        navigate(path);
    }

    return (
        <div>
        <GuestNavBar/>
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
                <GuestCurrentCoursePageDetails course={course} key={course._id} />
                
                
                </div>
            ))[0]}
            <PreviewCourseVideoPageDetails/>

                

                <form className="course-details">
            <Button onClick={routeChange} className={styles.registerForCourseButton}>Register For The Course</Button>
            </form>
                
            </div>
            
        </div>
        </div>
        
        
        </Container>
        </div>
    )
    }

    export default GuestCurrentCoursePage