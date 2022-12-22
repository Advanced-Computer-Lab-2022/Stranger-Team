
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
import ReportHeadings from "../components/ReportHeadings";
    

    const InstructorPendingReportsPage = () => {
    const [problems, setProblems] = useState(null)
    
    useEffect(() => {
        const fetchProblems = async () => {
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 


        const response = await fetch(`/fetchInstructorPendingReports/?id=${instructorId}`)
        
        const json = await response.json()
        console.log(json)
        
        setProblems(json)
        
        }

        fetchProblems()
    }, [])

    let navigate = useNavigate();

        const routeChange1 = () =>{ 
        let path = '/CoursesFilterByPrice'; 
        navigate(path);
    }



    return (

        <div >
            <ProfileNavBar/>

            {problems && problems.map(problem => (
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                onClick={() => {
                    const params = new URLSearchParams(window.location.search);
                    const instructorId = params.get('id'); 
                    console.log(instructorId);
                    window.location.href=`/InstructorCurrentPendingReportPage?ReportId=${problem._id}&id=${instructorId}`}}
                key={problem._id}>
            <ReportHeadings problem={problem} key={problem.id} />
            
            </Container>
            ))}

            

        </div>
    )
    }

    export default InstructorPendingReportsPage