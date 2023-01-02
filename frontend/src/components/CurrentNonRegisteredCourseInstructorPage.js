
//sessions done 
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
    import CorporateTraineeProfileNavBar from "./CorporateTraineeProfileNavBar";
    import GuestCurrentCourseInstructorDetails from "./Guest/GuestCurrentCourseInstructorDetails";
    import TraineeProfileNavBar from "./TraineeProfilNavBar";
    import styles from '../components/Guest/styles.module.css';


    const CurrentNonRegisteredCourseInstructorPage = () => {
    const [instructors, setInstructor] = useState(null)

    useEffect(() => {
        const fetchInstructor = async () => {
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

    return (

        <div>
        <TraineeProfileNavBar/>
        <Container >

        <div className="row gutters">
        <Card style={{height:'686px'}}>
            <div className="card-body" >

                {instructors && instructors.map(instructor => (
                
            <Container  className={styles.currentCourseContainer} 
                key={instructor._id}>
                <GuestCurrentCourseInstructorDetails instructor={instructor} key={instructor._id} />
                
                </Container>
            ))[0]}

        

                
            </div>
            
        </Card>
        </div>
        <div></div>
        <hr/>
        <h3>Instructor Available Courses:</h3>
        <CurrentCourseInstructorCoursesComponent/>
        
        
        </Container>
        </div>
        
        
        
        // <Container >
        

        // <form className="create"> 
        // <div className="container">
        // <div className="row gutters">
        // <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        // <div className="card h-100">
        //     <div className="card-body">
        //         {instructors && instructors.map(instructor => (
        //         <GuestCurrentCourseInstructorDetails instructor={instructor} key={instructor._id} />
        //         ))[0]}
        //     </div>
        // </div>
        // </div>
        // </div>
        // </div>
        // <h3>Instructor Available Courses:</h3>
        // <CurrentCourseInstructorCoursesComponent/>

        
        // </form>
        // </Container>
    )
    }

    export default CurrentNonRegisteredCourseInstructorPage