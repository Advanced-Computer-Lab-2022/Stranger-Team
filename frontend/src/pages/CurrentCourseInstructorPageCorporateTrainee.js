
//REMOVED IDs' ===>>>>>DONE

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorProfileDetails from "../components/InstructorProfileDetails";
    import CurrentCourseInstructorCoursesComponent from "../components/CurrentCourseInstructorCourses";
    import StarRating from "../components/StarRating";
    import RadioButtonsRateAnInstructor from "../components/RadioButtonsRateAnInstructor";
    import CurrentCourseInstructorProfileDetailsForTrainee from "../components/CurrentCourseInstructorProfileDetailsForTrainee";
    import CurrentCourseInstructorCoursesCorporateTrainee from "../components/CurrentCourseInstructorCoursesCorporateTrainee";
    import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
import TraineeReviewAnInstructor from "../components/TraineeReviewAnInstructor";


    const CurrentCourseInstructorPageCorporateTrainee = () => {
    const [instructors, setInstructor] = useState(null)

    useEffect(() => {
        const fetchInstructor = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
       // const instructorId = params.get('id');
        //console.log(instructorId); 
        
        //?id=${instructorId}
        const response = await fetch('/fetchCurrentCourseInstructorByInstructorId')
        
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setInstructor(json)
        }
        }

        fetchInstructor()
    }, [])

    
    let navigate = useNavigate();

        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
       // const instructorId = params.get('id');
       //?id=${instructorId}

        let path = '/RadioButtonsRateAnInstructor'; 
        navigate(path);
    }

    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
       // const instructorId = params.get('id');
       ///?id=${instructorId}
        let path = '/TraineeReviewAnInstructor'; 
        navigate(path);
    }

    return (
        

        <div>
        <CorporateTraineeProfileNavBar/>
        <Container >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                {/* {error && <div className="error">{error}</div>} */}
                {instructors && instructors.map(instructor => (
                <CurrentCourseInstructorProfileDetailsForTrainee instructor={instructor} key={instructor._id} />
                ))[0]}
                
            
                {/* <button onClick={routeChange1}>Review Instructor</button> */}
            </div>
                    
            <form className="course-details">
                    <RadioButtonsRateAnInstructor/>
            </form>

            <form className="course-details">
                    <TraineeReviewAnInstructor/>
            </form>

            <form className="course-details">
                <h3>Explore More of The Instructor's Courses:</h3>
                <CurrentCourseInstructorCoursesCorporateTrainee/>
            </form>

        </div>
        </div>
        
        </Container>
        </div>

        
        // <Container >
        // <CorporateTraineeProfileNavBar/>
        // <form className="create"> 
        // <div className="container">
        // <div className="row gutters">
        // <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        // <div className="card h-100">
        //     <div className="card-body">
        //         {instructors && instructors.map(instructor => (
        //         <CurrentCourseInstructorProfileDetailsForTrainee instructor={instructor} key={instructor._id} />
        //         ))[0]}
        //     </div>
        // </div>
        // </div>
        // </div>
        // </div>
        // <button onClick={routeChange}>Rate Instructor</button>
        // <button onClick={routeChange1}>Review Instructor</button>
        // {/* <RadioButtonsRateAnInstructor/> */}
        // {/* <StarRating/> */}
        // <h3>Instructor Available Courses:</h3>
        // <CurrentCourseInstructorCoursesCorporateTrainee/>

        
        // </form>
        // </Container>
    )
    }

    export default CurrentCourseInstructorPageCorporateTrainee