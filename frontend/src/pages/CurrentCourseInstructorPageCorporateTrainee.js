

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container,Card} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorProfileDetails from "../components/InstructorProfileDetails";
    import CurrentCourseInstructorCoursesComponent from "../components/CurrentCourseInstructorCourses";
    import StarRating from "../components/StarRating";
    import RadioButtonsRateAnInstructor from "../components/RadioButtonsRateAnInstructor";
    import CurrentCourseInstructorProfileDetailsForTrainee from "../components/CurrentCourseInstructorProfileDetailsForTrainee";
    import CurrentCourseInstructorCoursesCorporateTrainee from "../components/CurrentCourseInstructorCoursesCorporateTrainee";
    import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
    import TraineeReviewAnInstructor from "../components/TraineeReviewAnInstructor";
    import styles from '../components/Guest/styles.module.css';


    const CurrentCourseInstructorPageCorporateTrainee = () => {
    const [instructors, setInstructor] = useState(null)

    useEffect(() => {
        const fetchInstructor = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 
        
        
        const response = await fetch(`/fetchCurrentCourseInstructorByInstructorId/?id=${instructorId}`)
        
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
        const instructorId = params.get('id');
        let path = `/RadioButtonsRateAnInstructor/?id=${instructorId}`; 
        navigate(path);
    }

    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        let path = `/TraineeReviewAnInstructor/?id=${instructorId}`; 
        navigate(path);
    }

    return (
        

        // <div>
        // <CorporateTraineeProfileNavBar/>
        // <Container >

        // <div className="row gutters">
        // <div className="card h-100">
        //     <div className="card-body">
        //         {/* <FetchInstructorNameForTraineeCourseDetails/> */}
        //         {/* {error && <div className="error">{error}</div>} */}
        //         {instructors && instructors.map(instructor => (
        //         <CurrentCourseInstructorProfileDetailsForTrainee instructor={instructor} key={instructor._id} />
        //         ))[0]}
                
            
        //         {/* <button onClick={routeChange1}>Review Instructor</button> */}
        //     </div>
                    
        //     <form className="course-details">
        //             <RadioButtonsRateAnInstructor/>
        //     </form>

        //     <form className="course-details">
        //             <TraineeReviewAnInstructor/>
        //     </form>

        //     <form className="course-details">
        //         <h3>Explore More of The Instructor's Courses:</h3>
        //         <CurrentCourseInstructorCoursesCorporateTrainee/>
        //     </form>

        // </div>
        // </div>
        
        // </Container>
        // </div>
        //-----------------------------------------------------------
        <div>
        <CorporateTraineeProfileNavBar/>
        <Container >

        <div className="row gutters">
        <Card style={{height:'686px'}}>
            <div className="card-body" >

                {instructors && instructors.map(instructor => (
                
            <Container  className={styles.currentCourseContainer} 
                key={instructor._id}>
                <CurrentCourseInstructorProfileDetailsForTrainee instructor={instructor} key={instructor._id} />
                
                </Container>
            ))[0]}

        

                
            </div>
            
        </Card>
        </div>
        <div></div>
        <hr/>
        <div className="course-details">
                
                    <RadioButtonsRateAnInstructor/>
                </div>
            <div className="course-details">
                    <TraineeReviewAnInstructor/>
            </div>

            {/* <form className="course-details"> */}
            <hr/>
            {/* <h3>Explore More of The Instructor's Courses:</h3> */}
            <CurrentCourseInstructorCoursesCorporateTrainee/>
            {/* </form> */}

        
        </Container>
        </div>


    
    )
    }

    export default CurrentCourseInstructorPageCorporateTrainee