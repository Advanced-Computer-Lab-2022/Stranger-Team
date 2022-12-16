
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
    

    const AdminResponsesPageTrainee = () => {
    const [problems, setProblems] = useState(null)
    
    useEffect(() => {
        const fetchProblems = async () => {
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        const reportId = params.get('ReportId');
        console.log(traineeId); 


        const response = await fetch(`/checkIfAdminRespondedTrainee/?TraineeId=${traineeId}&ReportId=${reportId}`)
        
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
            <TraineeProfileNavBar/>

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
                    const traineeId = params.get('TraineeId');
                    console.log(traineeId);
                    window.location.href=`/AdminResponseCurrentReportPageTrainee?ReportId=${problem._id}&TraineeId=${traineeId}`}}
                key={problem._id}>
            <ReportHeadings problem={problem} key={problem.id} />
            
            </Container>
            ))}

            

        </div>
    )
    }

    export default AdminResponsesPageTrainee