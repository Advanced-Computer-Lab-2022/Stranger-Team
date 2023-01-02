    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import styles from "./styles.module.css";

    const CourseDetails = ({ course }) => {

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
        <div className={styles.courseDetails}>
        <h4>{course.Title}</h4>
        <br/>
        <strong>Course Instructor: </strong>{course.Instructor_Name}
        <br/>
        <strong>Subject: </strong>{course.Subject}
        <br/>
        <strong>Price: </strong>{course.Price}
        <br/>
        <strong>Discount: </strong>{course.Discount}
        <br/>
        <strong>Course Description: </strong>{course.Course_Description}
        
        </div>
    )
    }

    export default CourseDetails