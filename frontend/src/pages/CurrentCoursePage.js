
//instructor current course page
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "../components/Navbar";
    import ProfileNavBar from "../components/ProfileNavBar"

    import CourseDetails from "../components/CourseDetails";
    import StarRating from "../components/StarRating";
    import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
    import CurrentCourseDiscountPage from "../components/CurrentCourseDiscountPage";
    import InstructorAddNewSubtitleForm from "../components/InstructorAddNewSubtitleForm";
    import CurrentCourseInstructorPageSubtitles from "../components/CurrentCourseInstructorPageSubtitles"
    import InstructorCurrentCoursePageDetails from "../components/InstructorCurrentCoursePageDetails";


    const CurrentCoursePage = () => {
    const [course, setCourse] = useState(null)
    
    

    useEffect(() => {
        const fetchCourse = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        console.log(courseId); 
        
        
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
        // console.log(courseId); 
        let path = `/DefineACourseDiscountInstructorPage/?CourseId=${courseId}`; 
        console.log("CourseId"+courseId)
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        // console.log(courseId); 
        let path = `/AddANewSubtitle/?CourseId=${courseId}`; 
        console.log("CourseId"+courseId)
        navigate(path);
    }


    return (
        <div>
        <ProfileNavBar/>
        <form className="create">

        {/* <div class="container"> */}
        <div class="row gutters">
        {/* <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"> */}
        <div class="card h-100">
            <div class="card-body">
                {course && course.map(course => (
                <InstructorCurrentCoursePageDetails course={course} key={course._id} />
                ))[0]}
                {/* <CurrentCourseDiscountPage/> */}
                <CurrentCourseInstructorPageSubtitles/>

                <button onClick={routeChange}>Define A New Course Discount</button>
                <button onClick={routeChange2}>Define A New Course Subtitle</button>
            </div>
            
            
            
        </div>
        {/* </div> */}
        </div>
        {/* </div> */}
        
        </form>
        </div>
    )
    }

    export default CurrentCoursePage