
//sessions done 
    import { useEffect, useState } from "react"
    import React from 'react';
    import styles from "./styles.module.css"; 
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import GuestCurrentCourseInstructorDetails from "./GuestCurrentCourseInstructorDetails";
    import GuestCurrentCourseInstructorCourses from "./GuestCurrentCourseInstructorCourses";
    import GuestNavBar from "./GuestNavBar";


    const GuestCurrentCourseInstructorPage = () => {
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
        
        // <>
        // <GuestNavBar/>
        // {/* <Container > */}
        

        // <form className="create"> 
        // <div className="container">
        // <div className="row gutters">
        // <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        // <div className="card h-100">
        //     <Container className={styles.currentCourseContainer}>
        //         {instructors && instructors.map(instructor => (
        //         <GuestCurrentCourseInstructorDetails instructor={instructor} key={instructor._id} />
        //         ))[0]}
        //     </Container>
        // </div>
        // </div>
        // </div>
        // </div>
        // <h3>Instructor Available Courses:</h3>
        // <GuestCurrentCourseInstructorCourses/>

        
        // </form>
        // {/* </Container> */}
        // </>

        <div>
        <GuestNavBar/>
        <Container >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">

                {instructors && instructors.map(instructor => (
                
            <Container  className={styles.currentCourseContainer} 
                key={instructor._id}>
                <GuestCurrentCourseInstructorDetails instructor={instructor} key={instructor._id} />
                
                </Container>
            ))[0]}

        

                
            </div>
            
        </div>
        </div>
        <div></div>
        <hr/>
        <h3>Instructor Available Courses:</h3>
        <GuestCurrentCourseInstructorCourses/>
        
        
        </Container>
        </div>
    )
    }

    export default GuestCurrentCourseInstructorPage