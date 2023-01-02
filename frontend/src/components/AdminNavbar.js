import { Link } from 'react-router-dom'

import styles from '../components/Guest/styles.module.css'
import React from 'react';
import { useNavigate } from "react-router-dom";
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
import { AiOutlineUserAdd, AiFillHome} from "react-icons/ai";
import { ImProfile } from "react-icons/im"; 
    import { AiOutlineLogout } from "react-icons/ai"; 
    



const AdminNavbar = () => {


    let navigate = useNavigate();
        const routeReports = () =>{ 
        let path =  `/reports`; 
        navigate(path);
    }


        const routeHome = () =>{ 
        let path =  `/adminHome`; 
        navigate(path);
    }


    const routeRefunds = () =>{ 
        let path =  `/refunds`; 
        navigate(path);
    }
    const handleLogout = () => {
		localStorage.removeItem("token");
		// window.location.reload();
        window.location.href=`/GuestHome`; 
	};

return (
//     <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navbar}>
//     <h1>LearnEd</h1>
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav>
//         <Nav.Link className={styles.navbar} onClick={routeHome} style={{marginRight:'50px',fontSize:'20px', }}>Home</Nav.Link>
//         <Nav.Link className={styles.navbar} onClick={routeReports} style={{marginRight:'50px',fontSize:'20px',  right:'70px'}}>Reports</Nav.Link>
//         <Nav.Link className={styles.navbar} onClick={routeRefunds} style={{marginRight:'50px',fontSize:'20px',  right:'70px'}}>Refunds </Nav.Link>
//     </Nav>
//     <h3>Welcome, Admin</h3>
//     </Navbar.Collapse>
// </Navbar>
//------------------------------------------
<Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navbar}>
                <h1 style={{width:'400px'}}>Welcome Admin</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="#"></Nav.Link> */}
                    <Form className={styles.search_navbar} style={{marginRight:'50px'}}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    </Form>
                </Nav>
                <Nav>
                
                    <Nav.Link className={styles.navbar} onClick={routeHome} style={{marginRight:'50px',fontSize:'20px',width:'322px',height:'70px',paddingTop:'20px'}}>
                    Home 
                    </Nav.Link>
                    <Nav.Link className={styles.navbar} onClick={routeReports} style={{marginRight:'50px',fontSize:'20px',width:'322px',height:'70px',paddingTop:'20px'}}>
                    My Reports 
                    </Nav.Link>
                    <Nav.Link className={styles.navbar} onClick={routeRefunds} style={{marginRight:'20px',fontSize:'20px',paddingTop:'20px'}}>
                    Refunds<ImProfile/>
                    </Nav.Link>
                    <Nav.Link className={styles.navbar} onClick={handleLogout} style={{marginRight:'-125px',fontSize:'20px',paddingTop:'20px'}}>
                    Logout <AiOutlineLogout/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    
)
}

export default AdminNavbar