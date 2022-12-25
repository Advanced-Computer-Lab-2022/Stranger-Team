
//instructor current course page
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "../components/Navbar";
    import CourseDetails from "../components/CourseDetails";
    import StarRating from "../components/StarRating";
    import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
    import CurrentCoursePageDiscountDetails from "../components/CurrentCoursePageDiscountDetails";
    import CurrentCourseDiscountPage from "../components/CurrentCourseDiscountPage";
    import CurrentCourseSubtitlesPageTrainee from "./CurrentCourseSubtitlesPageTrainee";
    import RadioButtonsRateACourse from "../components/RadioButtonsRateACourse";
    import TraineeSubtitleTitlesPage from "./TraineeSubtitleTitlesPage";
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import PreviewCourseVideoPageDetails from "../components/PreviewCourseVideoTraineePageDetails";
            
    import { Certificate } from "../components/Certificate";


    const CurrentCoursePageTrainee = () => {
    const [course, setCourse] = useState(null);
    const[error,setError] = useState('');
    const[enableRefundButton, setEnableRefundButton]=useState(false);
    

    useEffect(() => {
        const fetchCourse = async () => {
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const traineeId = params.get('TraineeId');
        
        
        const response = await fetch(`/CurrentCourse/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log("res "+response)
        console.log( "json "+json)

        if (response.ok) {
            setCourse(json)
        }


        }


        fetchCourse()
    }, [])

    let navigate = useNavigate();
        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const traineeId = params.get('TraineeId');
        // console.log(courseId); 
        let path = `/TraineeReportAProblemPage/?TraineeId=${traineeId}&CourseId=${courseId}`; 
        navigate(path);
        
    }



    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        // const corporateTraineeId = params.get('CorporateTraineeId');
        // console.log(corporateTraineeId); 
        let path = `/mainForQuiz/?CourseId=${courseId}`; 
        navigate(path);
    }



    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const traineeId = params.get('TraineeId');
        console.log(traineeId); 
        let path = `/RequestARefundPageTrainee/?TraineeId=${traineeId}&CourseId=${courseId}`; 
        navigate(path);
    }
    const routeChange3 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const corporateTraineeId = params.get('TraineeId');
        let path = `/TraineeCertificate/?CourseId=${courseId}&TraineeId=${corporateTraineeId}`; 
        navigate(path);
       <Certificate></Certificate>
    }
    const routeChange4 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const corporateTraineeId = params.get('TraineeId');
        let path = `/viewqwizanswers/?CourseId=${courseId}&CorporateTraineeId=${corporateTraineeId}`; 
        navigate(path);
       
    }


    const checkIfRefundEligible = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const traineeId = params.get('TraineeId');
        
        
        const response = await fetch(`/checkIfRefundEligible/?CourseId=${courseId}&TraineeId=${traineeId}`)
        
        
        const json = await response.json()
        console.log("res "+response)
        console.log( "json "+json)

        if(!response.ok)
        {
            setError(json.error);
        }

        if (response.ok) {
            if(json == true)
            {
                window.location.href=`/RequestARefundPageTrainee/?TraineeId=${traineeId}&CourseId=${courseId}`;
            }
            else
            {
                setError(json.error);
            }

            
        }


        }


    return (
        <div>
        <TraineeProfileNavBar/>
        <Container >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">
            <button  onClick={routeChange4}>Quiz Answer</button>
            <button  onClick={routeChange3}>My Certificate</button>

                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                <form className="course-details">
                    <button  onClick={routeChange}>Report a problem</button>
                    
                    
                </form>

                <form  className="course-details" onSubmit={checkIfRefundEligible}> 
                <button >Request A Refund</button>
                {error && <div className="error">{error}</div>}
                </form>

                {/* {error && <div className="error">{error}</div>} */}
                {course && course.map(course => (
                <CurrentCoursePageDetails course={course} key={course._id} />
                ))[0]}
                {/* <CurrentCourseDiscountPage/> */}
                <RadioButtonsRateACourse/>
                <PreviewCourseVideoPageDetails/>
                <TraineeSubtitleTitlesPage/>
                
                {/* <CurrentCourseSubtitlesPageTrainee/>  */}
                {/* <StarRating></StarRating>  */}
            </div>
            <form className="course-details">
                    <button  onClick={routeChange1}>Start Exam</button>
                </form>
        </div>
        </div>
        
        </Container>
        </div>
    )
    }

    export default CurrentCoursePageTrainee