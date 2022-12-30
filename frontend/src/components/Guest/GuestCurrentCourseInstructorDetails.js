    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import styles from "./styles.module.css"; 
    import Card from 'react-bootstrap/Card';
    import { FaUserAlt,FaStar } from 'react-icons/fa';
    

    // import profile from '../images/profile.png'
    import profile from '../../images/profile.png'
    import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';




    const   GuestCurrentCourseInstructorDetails= ({ instructor }) => {


    return (

        <div className={styles.currentCourseDetails}>
        
        <FaUserAlt  style={{ width: '100px',height:'100px',color:'#00008B'}}></FaUserAlt>
        <span ><strong>Instructor Name:</strong> {instructor.First_Name} {instructor.Last_Name}</span>
        <span ><strong>Instructor Email:</strong> {instructor.Email}</span>
        <div >
        <span ><strong>About: </strong> {instructor.Bio}</span> 
        </div> 
        <div >
        <span ><strong>Instructor Rating<FaStar></FaStar> : </strong></span> 
        <div >
        <span >{instructor.Rating}</span> 
        </div> 
        </div>

        <div >
        <span ><strong>Instructor Reviews: </strong></span> 
        <span><i ></i></span> </div> 
        <div >
        <span>{instructor.Instructor_Reviews+" "}</span> 
        <span><i ></i></span> </div> 
        {/* </div>  */}
        </div>
        

    )
    }

    export default GuestCurrentCourseInstructorDetails