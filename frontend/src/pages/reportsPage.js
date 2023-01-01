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

const ReportsPage = () => {
    let navigate = useNavigate();
    const routeUnopened = () =>{ 
    let path =  `/deliveredReports`; 
    navigate(path);
}


const routeOpened = () =>{ 
let path =  `/seenReports`; 
navigate(path);
}
    return (
        <>
        <AdminNavbar/>
      
        <div className='adminhome'>
          

               {/* <Container> */}
          <button className="button-48" role="button" onClick={routeUnopened}><span class="text">Unopened Reports</span></button>
          <button className="button-48" role="button" onClick={routeOpened}><span class="text">Opened Reports</span></button>
        

    {/* </Container> */}
           </div>
           </>
    )
}

export default ReportsPage