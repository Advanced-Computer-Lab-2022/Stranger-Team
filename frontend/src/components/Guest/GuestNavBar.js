import styles from "./styles.module.css";

import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//import{Button, Alert, Container} from 'react-bootstrap'
import logo from './logo.jpg';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaSignInAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";



const GuestNavBar = () => {


	let navigate = useNavigate();
        const routeChange = () =>{ 
        let path =  `/login`; 
        navigate(path);
    }
    const routeChange1 = () =>{ 
        let path =  `/signup`; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        let path =  `/GuestHome`; 
        navigate(path);
    }

	return (
		
        <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navbar}>
                <h1 onClick={routeChange2}>LearnEd</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="#"></Nav.Link> */}
                    <Form className={styles.search_navbar}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link className={styles.navbar} onClick={routeChange1} style={{marginRight:'50px',fontSize:'20px'}}>Signup <AiOutlineUserAdd/></Nav.Link>
                    <Nav.Link className={styles.navbar} onClick={routeChange} style={{marginRight:'50px',fontSize:'20px'}}>
                    Login <FaSignInAlt/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
	);
};

export default GuestNavBar;