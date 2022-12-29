
//sessions done
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
import CurrentReportPageAdminResponseDetailsTrainee from "../components/CurrentReportPageAdminResponseDetailsTrainee";


    const AdminResponseCurrentReportPageTrainee = () => {
    const [problem, setProblem] = useState(null)
    
    

    useEffect(() => {
        const fetchProblem = async () => {
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 
        const reportId = params.get('ReportId');
        //console.log(traineeId); 
        
        
        const response = await fetch(`/fetchProblem/?ReportId=${reportId}`)

        
        
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
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        const reportId= params.get('ReportId');
        //console.log(traineeId); 


        const response = await fetch(`/updateReportStatusFromPendingToResolvedTrainee/?ReportId=${reportId}`)
        
        
        const json = await response.json()
        console.log(json)
        

        if(response.ok)
        {
            const params = new URLSearchParams(window.location.search);
            //const traineeId = params.get('TraineeId');
            // window.location.href=`/TraineeReportsPage/?TraineeId=${traineeId}`;
            window.location.href=`/TraineeReportsPage`;
        }
        
    }


    return (
        <div>
        <TraineeProfileNavBar/>
        <form className="create">

        
        <div className="row gutters">
        
        <div className="card h-100">
            <div className="card-body">

                {problem && problem.map(problem => (
                <CurrentReportPageAdminResponseDetailsTrainee problem={problem} key={problem._id} />
                ))[0]}
                <form className="course-details">
                    <h3>Are you satisfied with the response?</h3>
                    <button onClick={handleSubmit}>Yes</button>
                    <button>No</button>
                </form>
                
            </div>
        </div>
        </div>
        </form>
        </div>
    )
    }

    export default AdminResponseCurrentReportPageTrainee