
// //instructor current course page
//     import { useEffect, useState } from "react"
//     import React from 'react';
//     import { useNavigate,useLocation  } from "react-router-dom";

//     // components
//     import MyCourses from "./MyCourses"
//     import 'bootstrap/dist/css/bootstrap.min.css'

//     import{Button, Alert, Container, Nav} from 'react-bootstrap'
//     import Navbar from "./Navbar";

    
//     import InstructorNameDetails from "./InstructorNameDetails";



//     const FetchInstructorNameForTraineeCourseDetails = () => {
    
//     const [instructor,setInstructor] = useState(null)
    

//     useEffect(() => {
//         const fetchInstructor = async () => {
        
//         const params = new URLSearchParams(window.location.search);
//         const instructorId = params.get('id');
//         console.log(instructorId); 
        
//         const response = await fetch(`/fetchInstructorById/?id=${instructorId}`)

        
        
//         const json = await response.json()
//         console.log("instructor"+response)
//         console.log( json)

//         if (response.ok) {
//             setInstructor(json)
//         }


//         }


//         fetchInstructor()
//     }, [])


//     return (

//         <div className="course-details">

//         {/* <div class="container">
//         <div class="row gutters">
//         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
//         <div class="card h-100">
//             <div class="card-body"> */}
//                 <h4><strong>Course Instructor:</strong></h4>
//                 {instructor && instructor.map(instructor => (
//                 <InstructorNameDetails instructor={instructor} key={instructor._id} />
//                 ))}
//             </div>

//         // </div>
//         // </div>
//         // </div>
        
//         // </div>
//         // </div>
//     )
//     }

//     export default FetchInstructorNameForTraineeCourseDetails