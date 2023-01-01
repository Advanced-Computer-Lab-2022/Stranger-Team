    import { useEffect, useState } from "react"
    import React from 'react';
    
    import Card from 'react-bootstrap/Card';
    import { FaStar } from 'react-icons/fa';  
    import styles from "../components/Guest/styles.module.css"
    
    
    
    const CourseDetailsCorporateTrainee = ({ course }) => {

    return (
        // <div className="course-details">
        // <h4>{course.Title}</h4>
        // <p><strong>Course Instructor: </strong>{course.Instructor_Name}</p>
        // <p><strong>Subject: </strong>{course.Subject}</p>
        // <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        // </div>
        <div className={styles.courseDetails} style={{paddingLeft:'0px'}}>
        <Card style={{ width: '24rem',padding:'15px',background:'#F8F8F8',heigh:'0px'}}>
        
        <h4>{course.Title}</h4>
        <p><strong>Course Instructor: </strong>{course.Instructor_Name}</p>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Rating<FaStar></FaStar> : </strong>{course.Rating}</p> 
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        
        {/* // </Card.Body> */}
        {/* // </Card> */}
        </Card>
        </div>
    )
    }

    export default CourseDetailsCorporateTrainee