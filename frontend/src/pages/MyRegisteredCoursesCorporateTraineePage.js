
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
import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";

    const MyRegisteredCoursesCorporateTraineePage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("")
    
    useEffect(() => {
        const fetchCourses = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const corporateTraineeId = params.get('CorporateTraineeId');
        console.log(corporateTraineeId); 
        

        const response = await fetch(`/corporateViewMyRegisteredCourses/?CorporateTraineeId=${corporateTraineeId}`)
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        fetchCourses()
    }, [])

    return (

        <div >
            <CorporateTraineeProfileNavBar/>
            
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
                const corporateTraineeId = params.get('CorporateTraineeId');
                window.location.href=`/CurrentCoursePageCorporateTrainee?CourseId=${course._id}&CorporateTraineeId=${corporateTraineeId}`} }
                key={course._id}>
            <CourseDetails course={course} key={course.id} />
            <PreviewCourseVideoPageDetails course={course} key={course.id} />
            
            </Container>
            ))}
        </div>

        
        </div>
    )
    }

    export default MyRegisteredCoursesCorporateTraineePage