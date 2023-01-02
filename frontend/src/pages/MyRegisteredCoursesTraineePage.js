    //sessions done
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'
    import{Button, Alert, Container, Nav,Form,Navbar} from 'react-bootstrap'
    // import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import 'bootstrap/dist/js/bootstrap.min.js'
    import styles from "../components/Guest/styles.module.css"
    import GuestCourseDetails from "../components/Guest/GuestCourseDetails";
    import { BsBookHalf,BsBook } from "react-icons/bs";
    import { ImProfile } from "react-icons/im"; 
    import { AiOutlineLogout } from "react-icons/ai"; 
    // import styles from "../components/Guest/styles.module.css";


    const MyRegisteredCoursesTraineePage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("")
    
    useEffect(() => {
        const fetchCourses = async () => {
        
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 
        

        // const response = await fetch(`/viewMyRegisteredCourses/?TraineeId=${traineeId}&q=${searchQuery}`)
        const response = await fetch(`/viewMyRegisteredCourses/?q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        fetchCourses()
    }, [searchQuery])

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

        // <div >
        //     <TraineeProfileNavBar/>

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
        //         // const traineeId = params.get('TraineeId');
        //         // console.log(traineeId);
        //         //window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}&TraineeId=${traineeId}`
        //     window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}`} }
        //         key={course._id}>
        //     <CourseDetails course={course} key={course.id} />
        //     {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
            
        //     </Container>
        //     ))}
        // </div>

        
        // </div>
        <>

        {/* <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navbar}>
                <h1 onClick={routeChange2}>LearnEd</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="#"></Nav.Link> */}
                    {/* <Form className={styles.search_navbar}>
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
                    {/* <Nav.Link className={styles.navbar} onClick={routeChange3} style={{marginRight:'50px',fontSize:'20px',width:'322px',height:'70px'}}>
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
            </Navbar> */} 

            {/* <TraineeProfileNavBar/> */}

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
                // const traineeId = params.get('TraineeId');
                // console.log(traineeId);
                //window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}&TraineeId=${traineeId}`
                window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}`} }
                key={course._id}>
                <GuestCourseDetails course={course} key={course.id} />
                
                
                </div>
            ))}
            </div>
            </>
    )
    }

    export default MyRegisteredCoursesTraineePage