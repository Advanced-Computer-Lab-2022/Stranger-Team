    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import styles from "./styles.module.css"; 
    import Card from 'react-bootstrap/Card';

    const GuestCourseDetails = ({ course }) => {

        const [discount, setDiscount] = useState(null)
        const [discountStart, setDiscountStart] = useState(null)
        const [discountEnd, setDiscountEnd] = useState(null)
        
        
        const fetchCourseDicountDetails = async () => {
        const courseId = course._id;
        
        
        const response = await fetch(`/isDiscountViable/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log(json.Discount)
        
        }
        fetchCourseDicountDetails();
        
    return (

        // <Card style={{ width: '18rem' }}>
        // <Card.Body>
        <div className={styles.courseDetails}>
        <h4>{course.Title}</h4>
        <p><strong>Course Instructor: </strong>{course.Instructor_Name}</p>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Price: </strong>{course.Price}</p>
        <p><strong>Discount: </strong>{course.Discount}</p> 
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        </div>
        // </Card.Body>
        // </Card>
    )
    }

    export default GuestCourseDetails