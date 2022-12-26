    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import CurrentNonRegisteredCoursePageDetailsTrainee from "../../components/CurrentNonRegisteredCoursePageDetailsTrainee";
    import PreviewCourseVideoPageDetails from '../../components/PreviewCourseVideoTraineePageDetails'
    import GuestNavBar from "./GuestNavBar";




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
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                {/* <form className="course-details">
                    <button  onClick={routeChange}>Report a problem</button>
                </form> */}

                
                {/* {course && course.map(course => (
                <CurrentNonRegisteredCoursePageDetailsTrainee course={course} key={course._id} />
                ))[0]} */}

                {course && course.map(course => (
                
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                key={course._id}>
                <CurrentNonRegisteredCoursePageDetailsTrainee course={course} key={course._id} />
                
                
                </Container>
            ))[0]}
            <PreviewCourseVideoPageDetails/>

                

                <form className="course-details">
            <button onClick={routeChange}>Register For The Course</button>
            </form>
                
            </div>
            
        </div>
        </div>
        
        
        </Container>
        </div>
    )
    }

    export default GuestCurrentCoursePage