
//instructor current course page
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "../components/Navbar";
    import ProfileNavBar from "../components/ProfileNavBar"

    import CourseDetails from "../components/CourseDetails";
    import StarRating from "../components/StarRating";
    import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
    import CurrentCourseDiscountPage from "../components/CurrentCourseDiscountPage";
    import InstructorAddNewSubtitleForm from "../components/InstructorAddNewSubtitleForm";
    import CurrentCourseInstructorPageSubtitles from "../components/CurrentCourseInstructorPageSubtitles"
    import InstructorCurrentCoursePageDetails from "../components/InstructorCurrentCoursePageDetails";
    import CurrentReportPageDetails from "../components/CurrentReportPageDetails";
import TraineeProfileNavBar from "../components/TraineeProfilNavBar";


    const InstructorCurrentPendingReportPage = () => {
    const [problem, setProblem] = useState(null)
    
    const [Followup, setFollowup] = useState(null)
    
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProblem = async () => {
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 
        const reportId = params.get('ReportId');
        
        
        const response = await fetch(`/fetchInstructorProblem/?ReportId=${reportId}`)

        
        
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setProblem([json])
        }
        }

        fetchProblem()
    }, [])

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const reportId = queryParams.get('ReportId');
        const instructorId = queryParams.get('id');
        console.log(reportId);
        


        const report = {Followup};
        console.log(report)

        const response = await fetch(`/instructorSendFollowup/?ReportId=${reportId}`, {
        method: 'POST',
        body: JSON.stringify(report),
        headers: {
            'Content-Type': 'application/json'
        }
        })


        const json = await response.json()
        console.log(response)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        setError(null)
        setFollowup('')
        
        console.log('report sent:', json)
        window.location=`http://localhost:3000/InstructorDeliveredReportsPage?id=${instructorId}`
        }

    }


    return (
        <div>
        <ProfileNavBar/>
        <form className="create">

        
        <div className="row gutters">
        
        <div className="card h-100">
            <div className="card-body">

                {problem && problem.map(problem => (
                <CurrentReportPageDetails problem={problem} key={problem._id} />
                ))[0]}
            </div>

            
        </div>
        </div>
        </form>

        
        <div className="row gutters">
        
        <div className="card h-100">
            <div className="card-body">

                <form className="create" onSubmit={handleSubmit}>
                <h4>If you wish to send a follow up so we are able to tend to your needs better:</h4>
                <input 
                className='course'
                type="text" 
                onChange={(e) => setFollowup(e.target.value)} 
                value={Followup}
                />
                <button>Send Followup</button>
                </form>
            </div>

            
        </div>
        </div>
                
                
            
            
        </div>
    )
    }

    export default InstructorCurrentPendingReportPage