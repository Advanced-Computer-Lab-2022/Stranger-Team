//sessions done



    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container,Nav,Navbar,Form} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import FilterMyCoursesInstructorComponent from "../components/FilterMyCoursesInstructorComponent";
    import { ImProfile } from "react-icons/im"; 
    import { AiOutlineLogout } from "react-icons/ai"; 
    import styles from "../components/Guest/styles.module.css"


    const FilteredCoursesInstructorPage = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchPriceQuery, setSearchPriceQuery] = useState("")

    useEffect(() => {
        const fetchInstructor = async () => {
        
        const params = new URLSearchParams(window.location.search);
        // const instructorId = params.get('id');
        const rating = params.get('Rating');
        const price = params.get('Price');
        const subject = params.get('Subject');
        //console.log(instructorId); 

        var response;

        if(rating==null||rating=="")
        {
            if(subject==null||subject=="")
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilterMyCourses/?q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilterMyCourses/?Price=${price}&q=${searchQuery}`)
                }
            }
            else
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilterMyCourses/?Subject=${subject}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilterMyCourses/?Subject=${subject}&Price=${price}&q=${searchQuery}`)
                }
            }
        }
        else
        {
            if(subject==null||subject=="")
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilterMyCourses/?Rating=${rating}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilterMyCourses/?Rating=${rating}&Price=${price}&q=${searchQuery}`)
                }
            }
            else
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilterMyCourses/?Rating=${rating}&Subject=${subject}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilterMyCourses/?Rating=${rating}&Subject=${subject}&Price=${price}&q=${searchQuery}`)
                }
            }
        }
        
        
        console.log(searchQuery)
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setCourses(json)
        }
        }

        fetchInstructor()
    }, [searchQuery])


    

        let navigate = useNavigate();
        const routeChange = () =>{ 
        let path = '/InstructorAddCourse'; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        // const instructorId = params.get('id');
        // let path = `/InstructorAddANewCoursePage/?id=${instructorId}`; 
        let path = `/InstructorAddANewCoursePage`; 
        navigate(path);
    }
    
    const routeProfile = () =>{ 
        let path =  `/MyProfile`; 
        navigate(path);
    }


        const routeHome = () =>{ 
        let path =  `/InstructorCoursePage`; 
        navigate(path);
    }

    const handleLogout = () => {
		localStorage.removeItem("token");
		// window.location.reload();
        window.location.href=`/GuestHome`; 
	};

    return (
        <>

<div>
        <form className="signin">
            <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navbar} style={{width:'1350px'}}>
                <h1 onClick={routeHome}>LearnEd</h1>
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
                <Nav.Link className={styles.navbar}  style={{marginRight:'50px',fontSize:'20px',width:'322px',height:'70px'}}>
                    
                    </Nav.Link>
                    <Nav.Link className={styles.navbar}  style={{marginRight:'20px',fontSize:'20px'}} onClick={routeProfile}>
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
        <Container >
    
            <FilterMyCoursesInstructorComponent/>
        <div className="courses">
        <h1><strong>My Courses</strong></h1>
        <button className="button-2" role="button" onClick={routeChange2}><span>Add A Course</span></button>
            {courses && courses.map(course => (
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                onClick={
                    
                    () =>{
                        const params = new URLSearchParams(window.location.search);
                        //const instructorId = params.get('id'); 
                        // window.location.href=`/CurrentCourse/?id=${instructorId}&CourseId=${course._id}`
                    window.location.href=`/CurrentCourse/?CourseId=${course._id}`}}
                key={course._id}>
            <MyCourses course={course} key={course._id} />
            </Container>
            ))}
        </div>
        
        <div>
            
            <form className="signin">
        
            {/* <Button onClick={routeChange2}> Add A Course </Button> */}
            </form>
        </div>

        
        
        </Container>
        </>
    )
    }

    export default FilteredCoursesInstructorPage