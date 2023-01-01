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

const RefundsPage = () => {
    let navigate = useNavigate();
    const routePending = () =>{ 
    let path =  `/pendingRefunds`; 
    navigate(path);
}


const routeAccepted = () =>{ 
let path =  `/acceptedRefunds`; 
navigate(path);
}


const routeRejected = () =>{ 
let path =  `/rejectedRefunds`; 
navigate(path);
}


    return (
        <>
        <AdminNavbar/>
      
        <div className='adminhome'>
          

               {/* <Container> */}
          <button className="button-48" role="button" onClick={routePending}><span class="text">Pending Refunds</span></button>
          <button className="button-48" role="button" onClick={routeAccepted}><span class="text">Accepted Refunds</span></button>
          <button className="button-48" role="button" onClick={routeRejected}><span class="text">Rejected Refunds</span></button>

    {/* </Container> */}
           </div>
           </>
    )
}

export default RefundsPage