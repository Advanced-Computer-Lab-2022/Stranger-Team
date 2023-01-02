    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import styles from '../components/Guest/styles.module.css';
    import Card from 'react-bootstrap/Card';

    const CorporateTraineeCurrentCourseInstructorCourseDetails = ({ course }) => {
    
    return (

        // <Card style={{ width: '30rem'}}>
        // <Card.Body>
        <div className={styles.instructorCourseDetails}>
        <Card style={{ width: '22rem',padding:'10px',background:'#F8F8F8'}}>
        
        <h4>{course.Title}</h4>
        <p><strong>Course Instructor: </strong>{course.Instructor_Name}</p>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        {/* // </Card.Body> */}
        {/* // </Card> */}
        </Card>
        </div>
    )
    }

    export default CorporateTraineeCurrentCourseInstructorCourseDetails