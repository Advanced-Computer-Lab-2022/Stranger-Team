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
    import CurrentCourseDiscountPage from "../components/CurrentCourseDiscountPage";
    import CurrentCourseSubtitlesPageTrainee from "./CurrentCourseSubtitlesPageTrainee";
    import CurrentCoursePageDetailsCorporateTrainee from "../components/CurrentCoursePageDetailsCorporateTrainee"
    import RadioButtonsRateACourse from "../components/RadioButtonsRateACourse";
    import CorporateTraineeSubtitleTitlesPage from "./CorporateTraineeSubtitleTitlesPage";
    import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
    import { Certificate } from "../components/Certificate";
import PreviewCourseVideoPageDetails from "../components/PreviewCourseVideoTraineePageDetails";




    const CurrentCoursePageCorporateTrainee = () => {
    const [course, setCourse] = useState(null)
    

    useEffect(() => {
        const fetchCourse = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
       // const corporateTraineeId = params.get('CorporateTraineeId');
       // console.log(corporateTraineeId); 

        
        
        const response = await fetch(`/CurrentCourse/?CourseId=${courseId}`)

        
        
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setCourse(json)
        }


        }


        fetchCourse()
    }, [])

    let navigate = useNavigate();
        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
       // const corporateTraineeId = params.get('CorporateTraineeId');
        //console.log(corporateTraineeId); 
        //?CorporateTraineeId=${corporateTraineeId}
        let path = `/CorporateTraineeReportAProblemPage/?CourseId=${courseId}`; 
        navigate(path);
    }


    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const corporateTraineeId = params.get('CorporateTraineeId');
        //console.log(corporateTraineeId); 
        //CorporateTraineeId=${corporateTraineeId}&
        let path = `/mainForQuiz/?CourseId=${courseId}`; 
        navigate(path);
    }
    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const corporateTraineeId = params.get('CorporateTraineeId');
        //&CorporateTraineeId=${corporateTraineeId}
        let path = `/CorporateTraineeCertificate/?CourseId=${courseId}`; 
        navigate(path);
       <Certificate></Certificate>
    }
    const routeChange3 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const corporateTraineeId = params.get('CorporateTraineeId');
        //&CorporateTraineeId=${corporateTraineeId}
        let path = `/viewqwizanswers/?CourseId=${courseId}`; 
        navigate(path);
       
    }


    return (
        <div>
        <CorporateTraineeProfileNavBar/>
        <Container >

        <div class="row gutters">
        <div class="card h-100">
            <div class="card-body">
            <button className="course-details" onClick={routeChange3}>Quiz Answer</button>
            <button className="course-details" onClick={routeChange2}>My Certificate</button>
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                <form className="course-details">
                    <button  onClick={routeChange}>Report a problem</button>
                </form>
                {course && course.map(course => (
                <CurrentCoursePageDetailsCorporateTrainee course={course} key={course._id} />
                ))[0]}
                <RadioButtonsRateACourse/>
                <PreviewCourseVideoPageDetails/>
                {/* <CurrentCourseDiscountPage/> */}
                {/* <CurrentCourseSubtitlesPageTrainee/> */}
                <CorporateTraineeSubtitleTitlesPage/>
                {/* <StarRating></StarRating>  */}
            </div>
            <form className="course-details">
                    <button  onClick={routeChange1}>Start Exam</button>
                </form>
            
        </div>
        </div>
        
        </Container>
        </div>
    )
    }

    export default CurrentCoursePageCorporateTrainee