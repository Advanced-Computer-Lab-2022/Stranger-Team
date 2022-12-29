//sessions done
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'
    import FilterCoursesByRateComponent from "../components/FilterCoursesByRateComponent";
    

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import Navbar from "../components/Navbar";
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import FilterMyCoursesInstructorComponent from "../components/FilterMyCoursesInstructorComponent";

    const FilteredCoursesPageTrainee = () => {
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
                    response = await fetch(`/FilteredCourses/?q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCourses/?Price=${price}&q=${searchQuery}`)
                }
            }
            else
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilteredCourses/?Subject=${subject}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCourses/?Subject=${subject}&Price=${price}&q=${searchQuery}`)
                }
            }
        }
        else
        {
            if(subject==null||subject=="")
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilteredCourses/?Rating=${rating}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCourses/?Rating=${rating}&Price=${price}&q=${searchQuery}`)
                }
            }
            else
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilteredCourses/?Rating=${rating}&Subject=${subject}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCourses/?Rating=${rating}&Subject=${subject}&Price=${price}&q=${searchQuery}`)
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

    

    const handleSubmit = async (courseid) => {
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        const courseId= params.get('CourseId');
        //console.log(traineeId); 

        console.log("courseid"+courseid); 

        // const response = await fetch(`/isCurrentCourseRegistered/?TraineeId=${traineeId}&CourseId=${courseid}`)
        const response = await fetch(`/isCurrentCourseRegistered/?CourseId=${courseid}`)
        
        
        const json = await response.json()
        console.log(json)
        // if(json ==true || json=="true")
        // {

        // }
        
        if(json===true||json==="true")
        {
            
            const params = new URLSearchParams(window.location.search);
            // const traineeId = params.get('TraineeId');
            // window.location.href=`/FromCurrentNonRegisteredCoursePageTrainee/?CourseId=${courseid}&TraineeId=${traineeId}`;
            window.location.href=`/FromCurrentNonRegisteredCoursePageTrainee/?CourseId=${courseid}`;
        }
        else
        {
            const params = new URLSearchParams(window.location.search);
            // const traineeId = params.get('TraineeId');
            // window.location.href=`/CurrentNonRegisteredCoursePageTrainee?CourseId=${courseid}&TraineeId=${traineeId}`;
            window.location.href=`/CurrentNonRegisteredCoursePageTrainee?CourseId=${courseid}`;
        }
        
    }


    return (

        <div >
            <TraineeProfileNavBar/>
            <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
            </input>

            {/* <div>
                <input type="number" placeholder="Filter By Rate..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
            </div> */}
            
            <div className="courses">
            <FilterCoursesByRateComponent/>


            {courses && courses.map(course => (
                
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                
                onClick={() =>{handleSubmit(course._id)}}
                key={course._id}>
                <CourseDetails course={course} key={course.id} />
                {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
                
                </Container>
            ))}
        </div>

        <div>
            
            <form className="signin">
            </form>
        </div>
        </div>
    )
    }

    export default FilteredCoursesPageTrainee