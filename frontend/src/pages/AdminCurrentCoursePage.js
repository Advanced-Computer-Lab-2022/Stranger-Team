
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
import AdminCurrentCoursePageDetails from "../components/AdminCurrentCoursePageDetails";
import PreviewCourseVideoPageDetails from "../components/PreviewCourseVideoTraineePageDetails";


    const AdminCurrentCoursePage = () => {
    const [course, setCourse] = useState(null)
    
    

    useEffect(() => {
        const fetchCourse = async () => {

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
        let path = `/DefineACourseDiscountAdminPage/?CourseId=${courseId}`; 
        console.log("CourseId"+courseId)
        navigate(path);
    }


    return (
        <div>
        <form className="create">

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">
                <form className="course-details">
                <button onClick={routeChange}>Define A New Course Discount</button>
                </form>
                {course && course.map(course => (
                <AdminCurrentCoursePageDetails course={course} key={course._id} />
                ))[0]}
                <PreviewCourseVideoPageDetails/>

                


                
            </div>
            
            
            
        </div>
        </div>
        
        </form>
        </div>
    )
    }

    export default AdminCurrentCoursePage