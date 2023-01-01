//REMOVED IDs'=====>>>>>DONE

import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container,Nav,Navbar,Form} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
    import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
    import styles from "../components/Guest/styles.module.css"
    import CourseDetailsCorporateTrainee from "../components/CourseDetailsCorporateTrainee";
    import { BsBookHalf,BsBook } from "react-icons/bs";
    import { ImProfile } from "react-icons/im"; 
    import { AiOutlineLogout } from "react-icons/ai"; 

    const MyRegisteredCoursesCorporateTraineePage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("")
    
    useEffect(() => {
        const fetchCourses = async () => {
        
        const params = new URLSearchParams(window.location.search);
        //const corporateTraineeId = params.get('CorporateTraineeId');
        //console.log(corporateTraineeId); 
        //CorporateTraineeId=${corporateTraineeId}&

        const response = await fetch(`/corporateViewMyRegisteredCourses/?q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        fetchCourses()
    }, [searchQuery])

    let navigate = useNavigate();

    const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('CorporateTraineeId');
        //console.log(traineeId); 
        //?CorporateTraineeId=${traineeId}
        let path =  `/CorporateTraineeProfilePage`; 
        navigate(path);
    }


    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const corporateTraineeId = params.get('CorporateTraineeId');
        //?CorporateTraineeId=${corporateTraineeId}
        let path =  `/corporateTraineeHome/`; 
        navigate(path);
    }

    const routeChange3 = () =>{ 
        const params = new URLSearchParams(window.location.search);
      //const corporateTraineeId = params.get('CorporateTraineeId');
      //?CorporateTraineeId=${corporateTraineeId}
        let path =  `/MyRegisteredCoursesCorporateTraineePage/`; 
        navigate(path);
    }

    const handleLogout = () => {
		localStorage.removeItem("token");
		// window.location.reload();
        window.location.href=`/GuestHome`; 
	};

    return (

        // <div >
        //     <CorporateTraineeProfileNavBar/>
        //     <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
        //     </input>
            
        //     <div className="courses">
        //     {courses && courses.map(course => (
                
        //     <Container hover
        //         sx={{
        //             "&:hover":{
        //             cursor: "pointer",
        //             backgroundColor: "#f5f5f5",
        //             width: "100%"
        //             }
        //         }}
        //         onClick={() =>{
        //         const params = new URLSearchParams(window.location.search);
        //         //const corporateTraineeId = params.get('CorporateTraineeId');
        //         //&CorporateTraineeId=${corporateTraineeId}
        //         window.location.href=`/CurrentCoursePageCorporateTrainee?CourseId=${course._id}`} }
        //         key={course._id}>
        //     <CourseDetails course={course} key={course.id} />
        //     {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
            
        //     </Container>
        //     ))}
        // </div>

        
        // </div>
        //---------------------------------------------------------------------
        <>
        
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
                    {/* <Nav.Link className={styles.navbar} onClick={routeChange1} style={{marginRight:'50px',fontSize:'20px'}}>Signup <AiOutlineUserAdd/></Nav.Link> */}
                    <Nav.Link className={styles.navbar}  style={{marginRight:'50px',fontSize:'20px',width:'322px',height:'70px'}} onClick={routeChange3}>
                    My Courses <BsBookHalf/>
                    </Nav.Link>
                    <Nav.Link className={styles.navbar}  style={{marginRight:'20px',fontSize:'20px'}} onClick={routeChange}>
                    My Profile<ImProfile/>
                    </Nav.Link>
                    <Nav.Link className={styles.navbar} style={{marginRight:'-125px',fontSize:'20px'}} onClick={handleLogout}>
                    Logout <AiOutlineLogout/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>


        

        <h4 className={styles.GuestHeading}>YOUR COURSES: </h4>
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
                
                window.location.href=`/CurrentCoursePageCorporateTrainee?CourseId=${course._id}`} }
                key={course._id}>
                <CourseDetailsCorporateTrainee course={course} key={course.id} />
                
                
                </div>
            ))}
            </div>
        
        </>
    )
    }

    export default MyRegisteredCoursesCorporateTraineePage