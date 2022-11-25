

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"


    const InstructorCoursePage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchPriceQuery, setSearchPriceQuery] = useState("")

    useEffect(() => {
        const fetchInstructor = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 

        const response = await fetch(`/MyCourses/${instructorId}/?q=${searchQuery}`)
        // if(searchPriceQuery == null)
        // {
        //     const response = await fetch(`/MyCourses/${instructorId}/?q=${searchQuery}`)
        // }
        // else
        // {
        //     const response = await fetch(`/MyCourses/${instructorId}/?q=${searchQuery}&p=${searchPriceQuery}`)
        // }
        
        
        console.log(searchQuery)
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setCourses(json)
        }
        }

        fetchInstructor()
    }, [searchQuery])


    // const searchMyCourses=  async () => {
        
    //     const params = new URLSearchParams(window.location.search);
    //     const instructorId = params.get('id');
    //     console.log(instructorId); 

    //     const response = await fetch(`/MyCourses/?id=${instructorId}`)
        
    //     const json = await response.json()
    //     console.log(response)
    //     console.log( json)

    //     if (response.ok) {
    //         setCourses(json)
    //     }

    // }

        let navigate = useNavigate();
        const routeChange = () =>{ 
        let path = '/InstructorAddCourse'; 
        navigate(path);
    }

    return (
        <div >
            <input type="text" placeholder="Search My Courses By Title,Subject..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
            <input type="text" placeholder="Search My Courses By Price..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
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