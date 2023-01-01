    import {Link, useNavigate} from 'react-router-dom'
    import AdminNavbar from '../components/AdminNavbar'
    import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaSignInAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";
import '../styles/admin.css'

import styles from '../components/Guest/styles.module.css'
import React from 'react';

    const HomeAdmin = () => {


        let navigate = useNavigate();
        const routeAdmins = () =>{ 
        let path =  `/admins`; 
        navigate(path);
    }


    const routeInstructors = () =>{ 
    let path =  `/instructors`; 
    navigate(path);
}


const routeCT = () =>{ 
    let path =  `/corporateTrainees`; 
    navigate(path);
}

const routeCourseReq = () =>{ 
    let path =  `/courseRequests`; 
    navigate(path);
}


const routeAllCourses = () =>{ 
    let path =  `/AdminAllCourses`; 
    navigate(path);
}

        return (
            <>
            <AdminNavbar/>
          
            <div className='adminhome'>
              

                   {/* <Container> */}
              <button className="button-48" role="button" onClick={routeAdmins}><span class="text">Admins</span></button>
              <button className="button-48" role="button" onClick={routeInstructors}><span class="text">Instructors</span></button>
              <button className="button-48" role="button" onClick={routeCT}><span class="text">Corporate Trainees</span></button>
              <button className="button-48" role="button" onClick={routeCourseReq}><span class="text">Course Requests</span></button>
              <button className="button-48" role="button" onClick={routeAllCourses}><span class="text">Courses</span></button>
        {/* </Container> */}
               </div>
               </>
                
               
                
               
                
              
                
        )
    }

    export default HomeAdmin