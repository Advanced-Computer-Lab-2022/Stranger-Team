
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
import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
import FilterCoursesCorporateTraineeComponent from "../components/FilterCoursesCorporateTraineeComponent";
import CourseDetailsCorporateTrainee from "../components/CourseDetailsCorporateTrainee";

    const FilteredCoursesPageCorporateTrainee = () => {
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
        setCourses(json)
        
        
        }
        
        }

        fetchCourses()
    }, [searchQuery,searchRateQuery])


    let navigate = useNavigate();

        const routeChange1 = () =>{ 
        let path = '/CoursesFilterByPrice'; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        let path = '/CourseFilterByRate'; 
        navigate(path);
    }

    const routeChange5 = () =>{ 
        let path = '/CourseFilterBySubjectAndPrice'; 
        navigate(path);
    }

    const routeChange6 = () =>{ 
        let path = '/CourseFilterBySubjectAndRating'; 
        navigate(path);
    }

    const routeChange7 = () =>{ 
        let path = '/CourseFilterBySubjectAndRatingAndPrice'; 
        navigate(path);
    }

    const routeChange8 = () =>{ 
        let path = '/CourseFilterByPrice'; 
        navigate(path);
    }

    

    const routeChange9 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        console.log(traineeId);
        
        let path = '/CourseFilterByPrice'; 
        navigate(path);
    }

    const handleSubmit = async (courseid) => {
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('CorporateTraineeId');
        const courseId= params.get('CourseId');
        console.log(traineeId); 

        console.log("courseid"+courseid); 

        const response = await fetch(`/isCurrentCourseRegistered/?CorporateTraineeId=${traineeId}&CourseId=${courseid}`)
        
        
        const json = await response.json()
        console.log(json)

        
    
        if(json===true||json==="true")
        {
            console.log("kk")
            const params = new URLSearchParams(window.location.search);
            const traineeId = params.get('CorporateTraineeId');
            window.location.href=`/FromCurrentNonRegisteredCoursePageCorporateTrainee/?CourseId=${courseid}&CorporateTraineeId=${traineeId}`;
        }
        else
        {
            const params = new URLSearchParams(window.location.search);
            const traineeId = params.get('CorporateTraineeId');
            window.location.href=`/CurrentNonRegisteredCoursepageCorporateTrainee?CourseId=${courseid}&CorporateTraineeId=${traineeId}`;
        }
        
    }


    return (

        <div >
            <CorporateTraineeProfileNavBar/>
            <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
            </input>

            {/* <div>
                <input type="number" placeholder="Filter By Rate..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
            </div> */}
            
            <div className="courses">
            <FilterCoursesCorporateTraineeComponent/>


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
            <CourseDetailsCorporateTrainee course={course} key={course.id} />
            <PreviewCourseVideoPageDetails course={course} key={course.id} />
            
            
            </Container>
            ))}
        </div>

        <div>
            
            <form className="signin">
        
            {/* <button onClick={routeChange3}> Search By Title </button>
            <button onClick={routeChange4}> Search By Instructor Name </button>
            <button onClick={routeChange}> Filter By Subject </button> */}
            {/* <button onClick={routeChange2}> Filter By Rate </button>
            <button onClick={routeChange8}> Filter By Price </button>
            <button onClick={routeChange5}> Filter By Price And Subject </button>
            <button onClick={routeChange6}> Filter By Rating And Subject </button>
            <button onClick={routeChange7}> Filter By Subject And Rating And Price </button> */}
            </form>
        </div>
        </div>
    )
    }

    export default FilteredCoursesPageCorporateTrainee