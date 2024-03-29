    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    const CourseDetails = ({ course }) => {

        const [discount, setDiscount] = useState(null)
        const [discountStart, setDiscountStart] = useState(null)
        const [discountEnd, setDiscountEnd] = useState(null)
        const [price, setPrice] = useState("")
        
        
        const fetchCourseDicountDetails = async () => {
        const courseId = course._id;
        
        
        const response = await fetch(`/isDiscountViable/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        //console.log(json.Discount)
        
        }
        fetchCourseDicountDetails();

        
        const fetchPrice = async () => {
        const courseId = course._id;
        
        
        const response = await fetch(`/isCourseFree/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        //console.log(json)
        if(response.ok)
        {
            if(json==true)
            {
                setPrice("Free");
            }
            else
            {
                setPrice(json);
            }
        }
        
        
        }
        fetchPrice();
        
    return (
        <div className="course-details">
        <h4>{course.Title}</h4>
        <p><strong>Course Instructor: </strong>{course.Instructor_Name}</p>
        <p><strong>Subject: </strong>{course.Subject}</p>
        {/* <p><strong>Subtitles: </strong>{course.Subtitles}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Exercises: </strong>{course.Exercises}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p> */}
        <p><strong>Price: </strong>{price}</p>
        <p><strong>Discount: </strong>{course.Discount}</p> 
        {/* <p><strong>Rating: </strong>{course.Rating}</p> */}
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        </div>
    )
    }

    export default CourseDetails