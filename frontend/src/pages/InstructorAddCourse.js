

    import { useEffect } from "react"
    import React from 'react';

    // components
    import CourseDetails from "../components/CourseDetails"
    import CourseForm from "../components/CourseForm"

    import { useCourseContext } from "../hooks/useCoursesContext";

    

    const InstructorAddCourse = () => {
        const {courses,dispatch} = useCourseContext();

        useEffect(() => {
        const fetchCourses = async () => {

        const response = await fetch(`/View_All_Courses/?q=`)
        const json = await response.json()

        if (response.ok) {
            dispatch({type:'SET_COURSE' ,payload:json})
        } 
        }

        fetchCourses()
    }, [])



    return (
        <div className="home">
        <div className="courses">
            <h1>Courses</h1>
            {courses && courses.map(course => (
            <CourseDetails course={course} key={course._id} />
            ))}
        </div>
        <CourseForm/>
        
        </div>
    )
    }

    export default InstructorAddCourse