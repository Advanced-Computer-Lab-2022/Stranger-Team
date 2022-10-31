

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"


    const InstructorCoursePage = () => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        const fetchInstructor = async () => {
        const response = await fetch('/View_My_Courses/Layla')
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setCourses(json)
        }
        }

        fetchInstructor()
    }, [])

        let navigate = useNavigate();
        const routeChange = () =>{ 
        let path = '/InstructorAddCourse'; 
        navigate(path);
    }

    return (
        <div className="home1">
        <div className="courses">
            <h1>My Courses</h1>
            {courses && courses.map(course => (
            <MyCourses course={course} key={course._id} />
            ))}
        </div>
        
        <div>
            
            <form className="signin">
        
            <button onClick={routeChange}> Add A Course </button>
            </form>
        </div>

        
        
        </div>
    )
    }

    export default InstructorCoursePage