
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import Navbar from "../components/Navbar";
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
import FilterMyRegisteredCoursesTraineeComponent from "../components/FilterMyRegisteredCoursesTraineeComponent";

    const MyRegisteredCoursesTraineePage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("")
    
    useEffect(() => {
        const fetchCourses = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        console.log(traineeId); 
        

        const response = await fetch(`/viewMyRegisteredCourses/?TraineeId=${traineeId}&q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        fetchCourses()
    }, [searchQuery])

    return (

        <div >
            <TraineeProfileNavBar/>
            <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
            </input>

            <FilterMyRegisteredCoursesTraineeComponent/>
            
            <div className="courses">
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
                const params = new URLSearchParams(window.location.search);
                const traineeId = params.get('TraineeId');
                console.log(traineeId);
                window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}&TraineeId=${traineeId}`} }
                key={course._id}>
            <CourseDetails course={course} key={course.id} />
            <PreviewCourseVideoPageDetails course={course} key={course.id} />
            
            </Container>
            ))}
        </div>

        
        </div>
    )
    }

    export default MyRegisteredCoursesTraineePage