//sessions done
import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";
// components

import 'bootstrap/dist/css/bootstrap.min.css'


import{Button, Alert, Container,Nav,Form,Navbar} from 'react-bootstrap'
// import Navbar from "../components/Navbar";

import styles from "./styles.module.css"
import GuestCourseDetails from "./GuestCourseDetails";
import { FaSignInAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";

import FilterCoursesGuestComponents from "./FilterCoursesGuestComponents";

const FilteredCoursesGuestPage = () => {
const [courses, setCourses] = useState(null)
const [searchQuery, setSearchQuery] = useState("")
const [searchRateQuery, setSearchRateQuery] = useState("");
const [currcourseid, setcurrcourseid] = useState("");
const [error, setError] = useState("");


useEffect(() => {
    const fetchCourses = async () => {

    const params = new URLSearchParams(window.location.search);
    const rating = params.get('Rating');
    const price = params.get('Price');
    const subject = params.get('Subject');

    var response;

    if(rating==null||rating=="")
    {
        if(subject==null||subject=="")
        {
            if(price==null||price=="")
            {
                response = await fetch(`/FilteredGuestCourses/?q=${searchQuery}`)
            }
            else
            {
                response = await fetch(`/FilteredGuestCourses/?Price=${price}&q=${searchQuery}`)
            }
        }
        else
        {
            if(price==null||price=="")
            {
                response = await fetch(`/FilteredGuestCourses/?Subject=${subject}&q=${searchQuery}`)
            }
            else
            {
                response = await fetch(`/FilteredGuestCourses/?Subject=${subject}&Price=${price}&q=${searchQuery}`)
            }
        }
    }
    else
    {
        if(subject==null||subject=="")
        {
            if(price==null||price=="")
            {
                response = await fetch(`/FilteredGuestCourses/?Rating=${rating}&q=${searchQuery}`)
            }
            else
            {
                response = await fetch(`/FilteredGuestCourses/?Rating=${rating}&Price=${price}&q=${searchQuery}`)
            }
        }
        else
        {
            if(price==null||price=="")
            {
                response = await fetch(`/FilteredGuestCourses/?Rating=${rating}&Subject=${subject}&q=${searchQuery}`)
            }
            else
            {
                response = await fetch(`/FilteredGuestCourses/?Rating=${rating}&Subject=${subject}&Price=${price}&q=${searchQuery}`)
            }
        }
    }

    // const response = await fetch(`/FilteredCourses/?Rating=${rating}&Subject=${subject}&Price=${price}`)
    console.log(response)

    const json = await response.json()


    console.log(json)

    if (!response.ok) {
    setError(json.error)
    
    }
    if (response.ok) {
    
    setError(null)
    // setRate('')
    // setSubject('')
    // setPrice('')
    setCourses(json)
    
    
    }
    
    }

    fetchCourses()
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

    
    //------------------------------------------------------------------------
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

        <h4 className={styles.GuestHeading}> OUR COURSES: </h4>
        <div className={styles.traineehomegrid}>
            {courses && courses.map(course => (
            
        <div  hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            
            onClick={() =>{window.location.href=`/GuestCurrentCoursePage/?CourseId=${course._id}`}}
            key={course._id}>
            <GuestCourseDetails course={course} key={course.id} />
            
            
            </div>
        ))}
        </div>
    
    </>
)
}

export default FilteredCoursesGuestPage