
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




    const CurrentCoursePageCorporateTrainee = () => {
    const [course, setCourse] = useState(null)
    

    useEffect(() => {
        const fetchCourse = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const corporateTraineeId = params.get('CorporateTraineeId');
        console.log(corporateTraineeId); 

        
        
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
        const corporateTraineeId = params.get('CorporateTraineeId');
        console.log(corporateTraineeId); 
        let path = `/CorporateTraineeReportAProblemPage/?CorporateTraineeId=${corporateTraineeId}&CourseId=${courseId}`; 
        navigate(path);
    }


    return (
        <div>
        <Navbar/>
        <Container >

        <div class="row gutters">
        <div class="card h-100">
            <div class="card-body">
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                <form className="course-details">
                    <button  onClick={routeChange}>Report a problem</button>
                </form>
                {course && course.map(course => (
                <CurrentCoursePageDetailsCorporateTrainee course={course} key={course._id} />
                ))[0]}
                <RadioButtonsRateACourse/>
                {/* <CurrentCourseDiscountPage/> */}
                {/* <CurrentCourseSubtitlesPageTrainee/> */}
                <CorporateTraineeSubtitleTitlesPage/>
                {/* <StarRating></StarRating>  */}
            </div>
            
        </div>
        </div>
        
        </Container>
        </div>
    )
    }

    export default CurrentCoursePageCorporateTrainee