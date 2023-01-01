
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"
    import styles from '../components/Guest/styles.module.css'

    import 'bootstrap/dist/css/bootstrap.min.css'
    import FilterCoursesByRateComponent from "../components/FilterCoursesByRateComponent";
    import{Nav,Form,Navbar} from 'react-bootstrap'
    import { ImProfile } from "react-icons/im"; 
    import { AiOutlineLogout } from "react-icons/ai"; 
    

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import FilterCoursesAdminComponent from "../components/FilterCoursesAdminComponent";
    import AdminNavBar from "../components/AdminNavbar"

    const AdminAllCourses = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("");


    useEffect(() => {
        const fetchCourses = async () => {
        const params = new URLSearchParams(window.location.search);


        const response = await fetch(`/View_All_Courses/?q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        fetchCourses()
    }, [searchQuery,searchRateQuery])


    let navigate = useNavigate();

        const routeChange = () =>{ 
        let path = '/DefineDiscountForAllCoursesAdminPage'; 
        navigate(path);
    }

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

    // const routeChange1 = () =>{ 
    //     let path = '/DefineDiscountForAllCoursesAdminPage'; 
    //     navigate(path);
    // }


    return (

        <div >
            {/* <AdminNavBar/> */}

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
                        onChange={(e)=>setSearchQuery(e.target.value)}
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




            {/* <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            </input> */}
            
            <div className="courses">
            <FilterCoursesAdminComponent/>
            <button className="button-44" role="button" onClick={routeChange}><span class="text">Define Discount For All Courses</span></button>
            {/* <button onClick={routeChange}>Define Discount For All Courses</button> */}
            {/* <button onClick={routeChange1}>Define Discount For Selected Courses</button> */}

            <div className={styles.adminCoursegrid}>
            {courses && courses.map(course => (
                
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                
                onClick={() =>{
                    window.location.href=`/AdminCurrentCoursePage?CourseId=${course._id}`;
                }}
                key={course._id}>
                <CourseDetails course={course} key={course.id} />
                {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
                
                </Container>
            ))}
              </div>
        </div>

      
        </div>
    )
    }

    export default AdminAllCourses