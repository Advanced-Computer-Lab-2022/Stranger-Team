    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    

    const AdminCurrentCoursePageDetails = ({ course }) => {

        const [Discount, setDiscount] = useState(null);
        const [Discount_Start_Date, setDiscount_Start_Date] = useState(null);
        const [Discount_End_Date, setDiscount_End_Date] = useState(null);
        const [DiscountDisplay,setDiscountDisplay]= useState(null);
        

        const fetchCourseDicountDetails = async () => {
        const courseId = course._id;
        const response = await fetch(`/isDiscountViable/?CourseId=${courseId}`)
        const json = await response.json()

        
        
        
        }
        fetchCourseDicountDetails();

        const displayDiscount = async () => {
        const courseId = course._id;
        const response = await fetch(`/displayCourseDiscount/?CourseId=${courseId}`)
        const json = await response.json()

        console.log("json"+json)

        
        if(response.ok)
        {
            if(json == false)
            {
                setDiscount_Start_Date("");
                setDiscount_End_Date("");
                setDiscount("");
                
            }
            else
            {
                const courseStart = json.startDate.slice(0, 10);
                const courseEnd = json.endDate.slice(0, 10);
                setDiscount_Start_Date(courseStart);
                setDiscount_End_Date(courseEnd);
                setDiscount(course.Discount);
                console.log("start "+courseStart)
            }
        }
        
        }
        displayDiscount();
        
    return (

        
        <div className="course-details">

        <h4>{course.Title}</h4>
        <p><strong>Course Instructor: </strong>{course.Instructor_Name}</p> 
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Price: </strong>{course.Price}</p>
        <p><strong>Rating: </strong>{course.Rating}</p>
        <p><strong>Dicount: </strong>{Discount}</p>
        <p><strong>Dicount Start Date: </strong>{Discount_Start_Date}</p>
        <p><strong>Dicount End Date: </strong>{Discount_End_Date}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        </div>
    )
    }

    export default AdminCurrentCoursePageDetails