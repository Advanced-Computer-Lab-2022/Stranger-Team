//sessions done



    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import FilterMyCoursesInstructorComponent from "../components/FilterMyCoursesInstructorComponent";


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

    return (
        <Container >
            <ProfileNavBar/>
            <input type="text" placeholder="Search My Courses By Title,Subject..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
            {/* <input type="text" placeholder="Search My Courses By Price..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input> */}
            <FilterMyCoursesInstructorComponent/>
        <div className="courses">
            <h1>My Courses</h1>
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
        
            <Button onClick={routeChange2}> Add A Course </Button>
            </form>
        </div>

        
        
        </Container>
    )
    }

    export default FilteredCoursesInstructorPage