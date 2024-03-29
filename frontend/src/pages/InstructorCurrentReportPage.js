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
import InstructorNavbar from "../components/InstructorNavbar";


    const InstructorCurrentReportPage = () => {
    const [problem, setProblem] = useState(null)
    
    

    useEffect(() => {
        const fetchProblem = async () => {
        const params = new URLSearchParams(window.location.search);
        // const instructorId = params.get('id');
        // console.log(instructorId); 
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


    return (
        <div>
        <InstructorNavbar/>
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
        </div>
    )
    }

    export default InstructorCurrentReportPage