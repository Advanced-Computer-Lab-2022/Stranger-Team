    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    

    const InstructorCurrentCoursePageDetails = ({ course }) => {
        
    return (

        
        <div className="course-details">

        <h4>{course.Title}</h4>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Price: </strong>{course.Price}</p>
        <p><strong>Rating: </strong>{course.Rating}</p>
        <p><strong>Dicount: </strong>{course.Discount}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        </div>
    )
    }

    export default InstructorCurrentCoursePageDetails