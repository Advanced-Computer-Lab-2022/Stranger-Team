
    
    import styles from "./styles.module.css";
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // import GuestNavBar from './GuestNavBar';
    import { useEffect, useState } from "react"
    import{Container} from 'react-bootstrap'
    import CourseDetails from "./CourseDetails"
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'
    import GuestCourseDetails from "./GuestCourseDetails";
    import { FaSignInAlt } from 'react-icons/fa';
    import { AiOutlineUserAdd } from "react-icons/ai";
import FilterCoursesGuestComponents from "./FilterCoursesGuestComponents";




    const GuestHomePage = () => {

    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("");
    const [mostViewedCourses, setmostViewedCourses] = useState(null)
    

    useEffect(() => {
        const fetchCourses = async () => {


        const response = await fetch(`/View_All_Courses/?q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        const fetchCourses2 = async () => {
        const params = new URLSearchParams(window.location.search);


        const response = await fetch(`/View_Most_Viewed/?q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setmostViewedCourses(json)
        
        }

        fetchCourses()
        fetchCourses2()
    }, [searchQuery,searchRateQuery])

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
        let path =  `/`; 
        navigate(path);
    }
    
    
    return (
        <>
            <div>
            <form className="signin">
               

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
                        onChange={(e)=>setSearchQuery(e.target.value)}
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
            
            </form>
            </div>
            <FilterCoursesGuestComponents/>

            <h4 className={styles.GuestHeading}>OUR POPULAR COURSES: </h4>

            <div className={styles.grid}>

            {mostViewedCourses && mostViewedCourses.map(course => (
                
            <div hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                
                onClick={() =>{
                    const params = new URLSearchParams(window.location.search);
                    window.location.href=`/GuestCurrentCoursePage/?CourseId=${course._id}`
                    }}
                key={course._id}>
                <GuestCourseDetails course={course} key={course.id} />
                
                
                </div>
            ))}

            </div>
            <h4 className={styles.GuestHeading}>ALL OUR COURSES: </h4>
            <div className={styles.grid}>
                {courses && courses.map(course => (
                
            <div  hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                
                onClick={() =>{
                    const params = new URLSearchParams(window.location.search);
                    window.location.href=`/GuestCurrentCoursePage/?CourseId=${course._id}`
                    }}
                key={course._id}>
                <GuestCourseDetails course={course} key={course.id} />
                
                
                </div>
            ))}
            </div>
        </>
    );
    }

    export default GuestHomePage