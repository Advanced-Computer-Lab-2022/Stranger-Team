
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import Navbar from "../components/Navbar";
    import StarRating from "../components/StarRating";
    import PreviewCourseVideoPageDetails from '../components/PreviewCourseVideoTraineePageDetails'

    const Home1 = () => {
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("")
    var TraineeID= "";

    useEffect(() => {
        const fetchCourses = async () => {
        //const response = await fetch('/View_All_Courses')
        ///Filter_By_Rate/
        //const response = await fetch(`/View_All_Courses/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('traineeId');
        console.log(traineeId); 
        TraineeID = params.get('traineeId');
        console.log("TraineeID"+traineeId); 

        const response = await fetch(`/View_All_Courses/?q=${searchQuery}`)

        // if(setSearchQuery == null && setSearchRateQuery == null)
        // {
        //     console.log("jjj")
        //    response = await fetch(`/View_All_Courses/?q=`)
        //}
        // if(setSearchRateQuery != null)
        // {
        
        //     response = await fetch(`/Filter_By_Rate/?q=${searchRateQuery}`)
        // }
        // else if(setSearchQuery!= null)
        // {
        //     response = await fetch(`/View_All_Courses/?q=${searchQuery}`)
        // }
        
        
        
        
        const json = await response.json()
        console.log(json)
        
        setCourses(json)
        
        }

        fetchCourses()
    }, [searchQuery,searchRateQuery])

    let navigate = useNavigate();
    //     const routeChange = () =>{ 
    //     let path = '/CoursesFilterBySubject'; 
    //     navigate(path);
    // }

        const routeChange1 = () =>{ 
        let path = '/CoursesFilterByPrice'; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        let path = '/CourseFilterByRate'; 
        navigate(path);
    }

    // const routeChange3 = () =>{ 
    //     let path = '/CourseSearchByTitle'; 
    //     navigate(path);
    // }

    // const routeChange4 = () =>{ 
    //     let path = '/CourseSearchByInstructorName'; 
    //     navigate(path);
    // }

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

    

    return (

        <div >
            <Navbar/>
            <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
            </input>

            <div>
                <input type="number" placeholder="Filter By Rate..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
            </div>
            <div className="courses">
            {courses && courses.map(course => (
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                onClick={() => window.location.href=`/CurrentCoursePageTrainee?CourseId=${course._id}&traineeId=${TraineeID}`}
                key={course._id}>
            <CourseDetails course={course} key={course._id} />
            <PreviewCourseVideoPageDetails course={course} key={course._id} />
            
            
            </Container>
            ))}
        </div>

        <div>
            
            <form className="signin">
        
            {/* <button onClick={routeChange3}> Search By Title </button>
            <button onClick={routeChange4}> Search By Instructor Name </button>
            <button onClick={routeChange}> Filter By Subject </button> */}
            <button onClick={routeChange2}> Filter By Rate </button>
            <button onClick={routeChange8}> Filter By Price </button>
            <button onClick={routeChange5}> Filter By Price And Subject </button>
            <button onClick={routeChange6}> Filter By Rating And Subject </button>
            <button onClick={routeChange7}> Filter By Subject And Rating And Price </button>
            </form>
        </div>
        </div>
    )
    }

    export default Home1