    //REMOVED IDs' ===>>>>>DONE

    
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container,Navbar,Form,Nav} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    // import Navbar from "../components/Navbar";
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
    import CourseDetailsCorporateTrainee from "../components/CourseDetailsCorporateTrainee";
    import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
    import FilterCoursesByRateComponent from "../components/FilterCoursesByRateComponent";
    import FilterCoursesCorporateTraineeComponent from "../components/FilterCoursesCorporateTraineeComponent";
    import styles from "../components/Guest/styles.module.css"
    import GuestCourseDetails from "../components/Guest/GuestCourseDetails";
    import { BsBookHalf,BsBook } from "react-icons/bs";
    import { ImProfile } from "react-icons/im"; 
    import { AiOutlineLogout } from "react-icons/ai"; 
import FilteredCoursesPageCorporateTrainee from "./FilteredCoursesPageCorporateTrainee";

    const CorporateHome = () => {
    const [courses, setCourses] = useState(null)
    const [mostViewedCourses, setmostViewedCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("")
    const [isRegistered, setIsRegistered] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
        const params = new URLSearchParams(window.location.search);
        //const corporateTraineeId = params.get('CorporateTraineeId');
        //console.log(corporateTraineeId); 

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

        fetchCourses2()

        fetchCourses()
    }, [searchQuery,searchRateQuery])

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

    


    const handleSubmit = async (courseid) => {
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('CorporateTraineeId');
        const courseId= params.get('CourseId');
        //console.log(traineeId); 

        console.log("courseid"+courseid); 
//?CorporateTraineeId=${traineeId}&
        const response = await fetch(`/isCurrentCourseRegistered/?CourseId=${courseid}`)
        
        
        const json = await response.json()
        console.log(json)
        if(json===true||json==="true")
        {
            console.log("kk")
            const params = new URLSearchParams(window.location.search);
            //const traineeId = params.get('CorporateTraineeId');
           // &CorporateTraineeId=${traineeId}
            window.location.href=`/FromCurrentNonRegisteredCoursePageCorporateTrainee/?CourseId=${courseid}`;
        }
        else
        {
            const params = new URLSearchParams(window.location.search);
            //const traineeId = params.get('CorporateTraineeId');
            //&CorporateTraineeId=${traineeId}
            window.location.href=`/CurrentNonRegisteredCoursepageCorporateTrainee?CourseId=${courseid}`;
        }
        
    }

    return (

        // <div >
        //     <CorporateTraineeProfileNavBar/>
        //     <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
        //     </input>

        //     {/* <div>
        //         <input type="number" placeholder="Filter By Rate..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
        //     </div> */}
        //     <div className="courses">
        //     <FilterCoursesCorporateTraineeComponent/>
        //     {courses && courses.map(course => (
        //     <Container hover
        //         sx={{
        //             "&:hover":{
        //             cursor: "pointer",
        //             backgroundColor: "#f5f5f5",
        //             width: "100%"
        //             }
        //         }}
        //         onClick={() =>{handleSubmit(course._id)}}
        //         key={course._id}>
        //     <CourseDetailsCorporateTrainee course={course} key={course.id} />
        //     {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
            
            
        //     </Container>
        //     ))}
        // </div>

        // <div>
            
        //     <form className="signin">
        
        //     {/* <button onClick={routeChange3}> Search By Title </button>
        //     <button onClick={routeChange4}> Search By Instructor Name </button>
        //     <button onClick={routeChange}> Filter By Subject </button> */}
        //     {/* <button onClick={routeChange2}> Filter By Rate </button>
        //     <button onClick={routeChange8}> Filter By Price </button>
        //     <button onClick={routeChange5}> Filter By Price And Subject </button>
        //     <button onClick={routeChange6}> Filter By Rating And Subject </button>
        //     <button onClick={routeChange7}> Filter By Subject And Rating And Price </button> */}
        //     </form>
        // </div>
        // </div>

        <>
        {/* <TraineeProfileNavBar/> */}
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
            </form>
            </div>
            
            <FilterCoursesCorporateTraineeComponent/>

            
            <h4 className={styles.GuestHeading}>OUR POPULAR COURSES: </h4>

            <div className={styles.traineehomegrid} style={{width:'500px'}}>
            {mostViewedCourses && mostViewedCourses.map(course => (
                
            <div hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                
                onClick={() =>{handleSubmit(course._id)}}
                key={course._id} style={{display:'inline'}}>
                <CourseDetailsCorporateTrainee course={course} key={course.id} />
                
                
                </div>
            ))}
            

            </div>
            
            <h4 className={styles.GuestHeading}>ALL OUR COURSES: </h4>
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
                
                onClick={() =>{handleSubmit(course._id)}}
                key={course._id}>
                <CourseDetailsCorporateTrainee course={course} key={course.id} />
                
                
                </div>
            ))}
            </div>
        </>
    )
    }

    export default CorporateHome