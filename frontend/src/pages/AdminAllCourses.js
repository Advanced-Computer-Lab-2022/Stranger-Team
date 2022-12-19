
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'
    import FilterCoursesByRateComponent from "../components/FilterCoursesByRateComponent";
    

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import Navbar from "../components/Navbar";
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import FilterCoursesAdminComponent from "../components/FilterCoursesAdminComponent";
    import AdminNavBar from "../components/AdminNavbar"

    const AdminAllCourses = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("");


    useEffect(() => {
        const fetchCourses = async () => {
        const params = new URLSearchParams(window.location.search);


        const response = await fetch(`/View_All_Courses/?q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        fetchCourses()
    }, [searchQuery,searchRateQuery])


    let navigate = useNavigate();

        const routeChange = () =>{ 
        let path = '/DefineDiscountForAllCoursesAdminPage'; 
        navigate(path);
    }

    // const routeChange1 = () =>{ 
    //     let path = '/DefineDiscountForAllCoursesAdminPage'; 
    //     navigate(path);
    // }


    return (

        <div >
            <AdminNavBar/>
            <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
            </input>
            
            <div className="courses">
            <FilterCoursesAdminComponent/>
            <button onClick={routeChange}>Define Discount For All Courses</button>
            {/* <button onClick={routeChange1}>Define Discount For Selected Courses</button> */}


            {courses && courses.map(course => (
                
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                
                onClick={() =>{
                    window.location.href=`/AdminCurrentCoursePage?CourseId=${course._id}`;
                }}
                key={course._id}>
                <CourseDetails course={course} key={course.id} />
                {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
                
                </Container>
            ))}
        </div>

        
        </div>
    )
    }

    export default AdminAllCourses