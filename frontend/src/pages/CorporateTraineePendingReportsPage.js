
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
import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
    

    const CorporateTraineePendingReportsPage = () => {
    const [problems, setProblems] = useState(null)
    
    useEffect(() => {
        const fetchProblems = async () => {
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('CorporateTraineeId');
        console.log(traineeId); 


        const response = await fetch(`/fetchCorporateTraineePendingReports/?CorporateTraineeId=${traineeId}`)
        
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
            <CorporateTraineeProfileNavBar/>

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
                    const traineeId = params.get('CorporateTraineeId');
                    console.log(traineeId);
                    window.location.href=`/CorporateTraineeCurrentPendingReportPage?ReportId=${problem._id}&CorporateTraineeId=${traineeId}`}}
                key={problem._id}>
            <ReportHeadings problem={problem} key={problem.id} />
            
            </Container>
            ))}

            

        </div>
    )
    }

    export default CorporateTraineePendingReportsPage