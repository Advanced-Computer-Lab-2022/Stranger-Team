

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



    

    //     let navigate = useNavigate();
    //     const routeChange = () =>{ 
    //     let path = '/EditMyProfile'; 
    //     navigate(path);
    // }

    return (
        <div>
        <Navbar/>
        <Container >

        <div class="container">
        <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                {course && course.map(course => (
                <CourseDetails course={course} key={course._id} />
                ))[0]}
                <StarRating></StarRating>
            </div>
        </div>
        </div>
        </div>
        </div>
        
        </Container>
        </div>
    )
    }

    export default CurrentCoursePage