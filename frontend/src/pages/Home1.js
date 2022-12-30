
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

    import { FaWallet } from "react-icons/fa";
    import styles from "../components/Guest/styles.module.css"
    import GuestCourseDetails from "../components/Guest/GuestCourseDetails";

    const Home1 = () => {
    const [courses, setCourses] = useState(null)
    const [mostViewedCourses, setmostViewedCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchRateQuery, setSearchRateQuery] = useState("");
    const [isRegistered, setIsRegistered] = useState("");
    const [currcourseid, setcurrcourseid] = useState("");


    useEffect(() => {
        const fetchCourses = async () => {
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 


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

        fetchCourses()
        fetchCourses2()
    }, [searchQuery,searchRateQuery])


    let navigate = useNavigate();

    const handleSubmit = async (courseid) => {
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        const courseId= params.get('CourseId');
       // console.log(traineeId); 

        console.log("courseid"+courseid); 

        // const response = await fetch(`/isCurrentCourseRegistered/?TraineeId=${traineeId}&CourseId=${courseid}`)
        const response = await fetch(`/isCurrentCourseRegistered/?CourseId=${courseid}`)
        
        
        const json = await response.json()
        console.log(json)
        // if(json ==true || json=="true")
        // {

        // }
        
        setIsRegistered(json);
        console.log("isRegistered"+isRegistered)
        if(json===true||json==="true")
        {
            console.log("kk")
            const params = new URLSearchParams(window.location.search);
            //const traineeId = params.get('TraineeId');
            // window.location.href=`/FromCurrentNonRegisteredCoursePageTrainee/?CourseId=${courseid}&TraineeId=${traineeId}`;
            window.location.href=`/FromCurrentNonRegisteredCoursePageTrainee/?CourseId=${courseid}`;
        }
        else
        {
            const params = new URLSearchParams(window.location.search);
            //const traineeId = params.get('TraineeId');
            // window.location.href=`/CurrentNonRegisteredCoursePageTrainee?CourseId=${courseid}&TraineeId=${traineeId}`;
            window.location.href=`/CurrentNonRegisteredCoursePageTrainee?CourseId=${courseid}`;
        }
        
    }

    // () =>{
    //             const params = new URLSearchParams(window.location.search);
    //             const traineeId = params.get('TraineeId');
    //             window.location.href=`/CurrentNonRegisteredCoursePageTrainee?CourseId=${course._id}&TraineeId=${traineeId}`}

    return (

    //     <div >
    //         <TraineeProfileNavBar/>
    //         <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
    //         </input>

    //         {/* <div>
    //             <input type="number" placeholder="Filter By Rate..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
    //         </div> */}
    //         {/* <div>
    //             <button onClick={routeChange10}><FaWallet></FaWallet></button>
    //         </div> */}
            
    //         <div className="courses">
    //         <FilterCoursesByRateComponent/>


    //         {courses && courses.map(course => (
                
    //         <Container hover
    //             sx={{
    //                 "&:hover":{
    //                 cursor: "pointer",
    //                 backgroundColor: "#f5f5f5",
    //                 width: "100%"
    //                 }
    //             }}
                
    //             onClick={() =>{handleSubmit(course._id)}}
    //             key={course._id}>
    //             <CourseDetails course={course} key={course.id} />
    //             {/* <PreviewCourseVideoPageDetails course={course} key={course.id} /> */}
                
    //             </Container>
    //         ))}
    //     </div>

    //     <div>
            
    //         <form className="signin">
        
    //         {/* <button onClick={routeChange3}> Search By Title </button>
    //         <button onClick={routeChange4}> Search By Instructor Name </button>
    //         <button onClick={routeChange}> Filter By Subject </button> */}
    //         {/* <button onClick={routeChange2}> Filter By Rate </button>
    //         <button onClick={routeChange8}> Filter By Price </button>
    //         <button onClick={routeChange5}> Filter By Price And Subject </button>
    //         <button onClick={routeChange6}> Filter By Rating And Subject </button>
    //         <button onClick={routeChange7}> Filter By Subject And Rating And Price </button> */}
    //         </form>
    //     </div>
    // </div>

    <>

            <h4 className={styles.GuestHeading}>OUR POPULAR COURSES: </h4>

            <div className={styles.grid}>

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
                key={course._id}>
                <GuestCourseDetails course={course} key={course.id} />
                
                
                </div>
            ))}

            </div>
            <h4 className={styles.GuestHeading}>ALL OUR COURSES: </h4>
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
                
                onClick={() =>{handleSubmit(course._id)}}
                key={course._id}>
                <GuestCourseDetails course={course} key={course.id} />
                
                
                </div>
            ))}
            </div>
        </>

        
    )
    }

    export default Home1