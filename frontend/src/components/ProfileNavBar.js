    import { Link } from 'react-router-dom'

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'

    import download1 from '../images/download1.png';
    import React from 'react';
    import { useNavigate } from "react-router-dom";



    const Navbar = () => {

        let navigate = useNavigate();
        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 
        let path =  `/MyProfile/?id=${instructorId}`; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 
        let path =  `/InstructorCoursePage/?id=${instructorId}`; 
        navigate(path);
    }

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={download1} width="50" height="50" className="d-inline-block align-top" alt=""></img>
        {/* <a className="navbar-brand" href="#">LearnEd</a> */}
        <label className="nav-item nav-link active" onClick={routeChange2} width="40" height="30">LearnEd</label> 
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <label className="nav-item nav-link active" onClick={routeChange}>My Profile</label> 
            {/* <a className="nav-item nav-link active" href={routeChange}> <span className="sr-only"></span></a> */}
            </div>
        </div>    
    </nav>

    )
    }

    export default Navbar