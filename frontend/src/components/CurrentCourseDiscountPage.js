
//instructor current course page
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "./MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "./Navbar";

    import CourseDetails from "./CourseDetails";
    import StarRating from "./StarRating";
    import CurrentCoursePageDetails from "./CurrentCoursePageDetails";
    import CurrentCoursePageDiscountDetails from "./CurrentCoursePageDiscountDetails";



    const CurrentCourseDiscountPage = () => {
    const [course, setCourse] = useState(null)
    const [discount,setDiscount] = useState(null)
    

    useEffect(() => {
        const fetchDiscount = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        console.log(courseId); 
        
        const response = await fetch(`/fetchCourseDiscounts/?CourseId=${courseId}`)

        
        
        const json = await response.json()
        console.log("discount"+response)
        console.log( json)

        if (response.ok) {
            setDiscount(json)
        }


        }


        fetchDiscount()
    }, [])


    return (

        <div className="course-details">

        {/* <div class="container">
        <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body"> */}
                <h4>Available Course Discount:</h4>
                {discount && discount.map(discount => (
                <CurrentCoursePageDiscountDetails discount={discount} key={discount._id} />
                ))[0]}
            </div>

        // </div>
        // </div>
        // </div>
        
        // </div>
        // </div>
    )
    }

    export default CurrentCourseDiscountPage