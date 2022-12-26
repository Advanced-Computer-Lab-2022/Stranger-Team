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
		// <div className={styles.main_container}>
		// 	<nav className={styles.navbar}>
        //     {/* <img src={logo} width="50" height="50" className="d-inline-block align-top" alt=""></img> */}
		// 		<h1>LearnEd</h1>
        //         <button className={styles.white_btn} onClick={routeChange1}>
		// 			Signup
		// 		</button>
		// 		<button type="button" className={styles.white_btn} onClick={routeChange}>
        //             Login
		// 		</button>
		// 	</nav>
        // </div>
        <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navbar}>
                <h1 onClick={routeChange2}>LearnEd</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Form className={styles.search_navbar}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    </Form>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link className={styles.navbar} onClick={routeChange1}>Signup</Nav.Link>
                    <Nav.Link className={styles.navbar} onClick={routeChange}>
                    Login
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
	);
};

export default GuestNavBar;