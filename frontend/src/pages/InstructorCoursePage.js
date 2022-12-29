

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import FilterMyCoursesInstructorComponent from "../components/FilterMyCoursesInstructorComponent";


    const InstructorCoursePage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchPriceQuery, setSearchPriceQuery] = useState("")

    useEffect(() => {
        const fetchInstructor = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        // const instructorId = params.get('id');
        // console.log("instructorId"+instructorId); 

        // const response = await fetch(`/MyCourses/${instructorId}/?q=${searchQuery}`)
        const response = await fetch(`/MyCourses/?q=${searchQuery}`)
        
        
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
    //     const routeChange = () =>{ 
    //     let path = '/InstructorAddCourse'; 
    //     navigate(path);
    // }

    // const routeChange2 = () =>{ 
    //     const params = new URLSearchParams(window.location.search);
    //     const instructorId = params.get('id');
    //     let path = `/InstructorAddANewCoursePage/?id=${instructorId}`; 
    //     navigate(path);
    // }
    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const instructorId = params.get('id');
        //let path = `/InstructorAddANewCoursePage/?id=${instructorId}`; 
        // let path = `/InstructorContract/?id=${instructorId}`; 
        let path = `/InstructorContract`; 
        navigate(path);
    }

    return (
        <Container >
            <ProfileNavBar/>
            <input type="text" placeholder="Search My Courses By Title,Subject..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
            {/* <input type="text" placeholder="Search My Courses By Price..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input> */}
            {/* <div>
            
            <form className="signin">
        
            <Button onClick={routeChange2}> Add A Course </Button>
            </form>
        </div> */}
            <FilterMyCoursesInstructorComponent/>
            

        <div className="courses">
            <h1>My Courses</h1>
            <button onClick={routeChange2}>Add A Course</button>
            {courses && courses.map(course => (
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                onClick={
                    
                    () =>{
                        const params = new URLSearchParams(window.location.search);
                        //const instructorId = params.get('id'); 
                        // window.location.href=`/CurrentCourse/?id=${instructorId}&CourseId=${course._id}`
                        console.log(course._id)
                        window.location.href=`/CurrentCourse/?CourseId=${course._id}`}}
                key={course._id}>
            <MyCourses course={course} key={course._id} />
            </Container>
            ))}
        </div>
        
        

        
        
        </Container>
    )
    }

    export default InstructorCoursePage