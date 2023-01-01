    //sessions done
    //styling done
    import { Link } from 'react-router-dom'

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav,Form} from 'react-bootstrap'

    import download1 from '../images/download1.png';
    import React from 'react';
    import Navbar from 'react-bootstrap/Navbar';
    import { useNavigate } from "react-router-dom";
    import { BsBookHalf,BsBook } from "react-icons/bs";
    import { ImProfile } from "react-icons/im"; 
    import { AiOutlineLogout } from "react-icons/ai"; 
    import styles from "../components/Guest/styles.module.css"




    const TraineeProfileNavBar = () => {

        let navigate = useNavigate();
        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 
        // let path =  `/TraineeProfilePage/?TraineeId=${traineeId}`; 
        let path =  `/TraineeProfilePage`; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 
        let path =  `/Home`; 
        navigate(path);
    }

    const routeChange3 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 
        // let path =  `/MyRegisteredCoursesTrainee/?TraineeId=${traineeId}`; 
        let path =  `/MyRegisteredCoursesTrainee`; 
        navigate(path);
    }

    const handleLogout = () => {
		localStorage.removeItem("token");
		// window.location.reload();
        window.location.href=`/GuestHome`; 
	};

    return (
        
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         <img src={download1} width="50" height="50" className="d-inline-block align-top" alt=""></img>
    //     {/* <a className="navbar-brand" href="#">LearnEd</a> */}
    //     <label className="nav-item nav-link active" onClick={routeChange2} width="40" height="30">LearnEd</label> 
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div className="navbar-nav">
    //         <label className="nav-item nav-link active" onClick={routeChange3}>My Registered Courses</label> 
    //         <p></p>

    //         <label className="nav-item nav-link active" onClick={routeChange}>My Profile</label> 
    //         {/* <a className="nav-item nav-link active" href={routeChange}> <span className="sr-only"></span></a> */}
    //         </div>
    //     </div>    
    // </nav>

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
                    {/* <Nav.Link className={styles.navbar} onClick={routeChange1} style={{marginRight:'50px',fontSize:'20px'}}>Signup <AiOutlineUserAdd/></Nav.Link> */}
                    <Nav.Link className={styles.navbar} onClick={routeChange3} style={{marginRight:'50px',fontSize:'20px',width:'322px',height:'70px'}}>
                    My Courses <BsBookHalf/>
                    </Nav.Link>
                    <Nav.Link className={styles.navbar} onClick={routeChange} style={{marginRight:'20px',fontSize:'20px'}}>
                    My Profile<ImProfile/>
                    </Nav.Link>
                    <Nav.Link className={styles.navbar} onClick={handleLogout} style={{marginRight:'-125px',fontSize:'20px'}}>
                    Logout <AiOutlineLogout/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

    )
    }

    export default TraineeProfileNavBar