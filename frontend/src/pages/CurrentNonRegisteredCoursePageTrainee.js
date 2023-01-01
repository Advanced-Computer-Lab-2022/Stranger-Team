//sessions done
//styling done
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
    import PreviewCourseVideoPageDetails from "../components/PreviewCourseVideoTraineePageDetails";
    import styles from "../components/Guest/styles.module.css"
    import GuestCurrentCoursePageDetails from "../components/Guest/GuestCurrentCoursePageDetails";
    



    const CurrentNonRegisteredCoursePageTrainee = () => {
    const [course, setCourse] = useState(null)
    

    useEffect(() => {
        const fetchCourse = async () => {
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        // //const traineeId = params.get('TraineeId');
        
        
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
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        // let path = `/TraineeReportsPage/?TraineeId=${traineeId}`; 
        let path = `/TraineeReportsPage`; 
        navigate(path);
    }

    // window.location.href=`/RequestARefundPageTrainee/?CourseId=${courseId}`;
    

    const checkIfPaymentNeeded= async (e) =>{  
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId')
        const response = await fetch(`/isCourseFree/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log("res "+response)
        console.log( "json "+json)

        if (response.ok) {
            if(json == true)
            {
                const response2 = await fetch(`/indiviualTraineeRegisterCourse/?CourseId=${courseId}`)
                const json2 = await response2.json()
                console.log("json2"+json2)
                window.location.href=`/CurrentCoursePageTrainee/?CourseId=${courseId}`; 

            }
            else
            {
                window.location.href=`/ProceedToPaymentPageTrainee/?CourseId=${courseId}`; 
            }

        }

    }
    
    const routeChange1 = () =>{  
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId')
        //const traineeId = params.get('TraineeId');
        // let path = `/ProceedToPaymentPageTrainee/?TraineeId=${traineeId}&CourseId=${courseId}`; 
        let path = `/ProceedToPaymentPageTrainee/?CourseId=${courseId}`; 
        navigate(path);
    }

    return (
        // <div>
        // <TraineeProfileNavBar/>
        // <Container >

        // <div className="row gutters">
        // <div className="card h-100">
        //     <div className="card-body">
        //         {/* <FetchInstructorNameForTraineeCourseDetails/> */}
        //         {/* <form className="course-details">
        //             <button  onClick={routeChange}>Report a problem</button>
        //         </form> */}

                
        //         {course && course.map(course => (
        //         <CurrentNonRegisteredCoursePageDetailsTrainee course={course} key={course._id} />
        //         ))[0]}
        //         <PreviewCourseVideoPageDetails/>

        //         <form className="course-details">
        //     <button onClick={checkIfPaymentNeeded}>Register For The Course</button>
        //     </form>
                
        //     </div>
            
        // </div>
        
                
        // </div>
        
        
        // </Container>
        // </div>

        <div>
        <TraineeProfileNavBar/>
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
                <CurrentNonRegisteredCoursePageDetailsTrainee course={course} key={course._id} />
                
                
                </div>
            ))[0]}
            <PreviewCourseVideoPageDetails/>

                

                <form className="course-details">
            <Button onClick={routeChange1} className={styles.registerForCourseButton}>Register For The Course</Button>
            </form>
                
            </div>
            
        </div>
        </div>
        
        
        </Container>
        </div>


    )
    }

    export default CurrentNonRegisteredCoursePageTrainee