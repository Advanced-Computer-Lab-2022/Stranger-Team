import styles from "./styles.module.css";

import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";
import CourseDetails from "../CourseDetails"
import 'bootstrap/dist/css/bootstrap.min.css'
import{Button, Alert, Container} from 'react-bootstrap'
import PreviewCourseVideoPageDetails from '../PreviewCourseVideoTraineePageDetails'
import FilterCoursesByRateComponent from "../FilterCoursesByRateComponent";


const Main = () => {

	const [mostViewedCourses, setmostViewedCourses] = useState(null)
    const [courses, setCourses] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	useEffect(() => {
        const fetchCourses = async () => {
        const params = new URLSearchParams(window.location.search);


        const response = await fetch(`/View_Most_Viewed/?q=${searchQuery}`)
        
        const json = await response.json()
        console.log(json)
        
        setmostViewedCourses(json)
        
        }
        const fetchCourses2 = async () => {
            const params = new URLSearchParams(window.location.search);
    
    
            const response = await fetch(`/View_All_Courses/?q=${searchQuery}`)
            
            const json = await response.json()
            console.log(json)
            
            setCourses(json)
            
            }

        fetchCourses()
        fetchCourses2()
    }, [searchQuery])

	const handleSubmit = async (courseid) => {
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        const courseId= params.get('CourseId');
        console.log(traineeId); 

        console.log("courseid"+courseid); 

        const response = await fetch(`/isCurrentCourseRegistered/?CourseId=${courseid}`)
        
        
        const json = await response.json()
        console.log(json)
        
        
        if(json===true||json==="true")
        {
            const params = new URLSearchParams(window.location.search);
            const traineeId = params.get('TraineeId');
            window.location.href=`/FromCurrentNonRegisteredCoursePageTrainee/?CourseId=${courseid}`;
        }
        else
        {
            const params = new URLSearchParams(window.location.search);
            const traineeId = params.get('TraineeId');
            window.location.href=`/CurrentNonRegisteredCoursePageTrainee?CourseId=${courseid}&TraineeId=${traineeId}`;
        }
        
    }

	let navigate = useNavigate();
        const routeChange = () =>{ 
        let path =  `/MyRegisteredCoursesTrainee`; 
        navigate(path);
    }

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Stranger Team</h1>
				<button className={styles.white_btn} onClick={routeChange}>
					My Courses
				</button>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
{/*
			<div className="courses">

			<input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
            </input>

            <div>
                <input type="number" placeholder="Filter By Rate..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
            </div>
			<div>
<h1>OUR MOST POPULAR COURSES</h1>
</div>

                
            {mostViewedCourses && mostViewedCourses.map(course => (
                
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
                <PreviewCourseVideoPageDetails course={course} key={course.id} />
                
                </Container>
            ))}
            			<div>
<h1>ALL OUR COURSES</h1>
</div>
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
                    <PreviewCourseVideoPageDetails course={course} key={course.id} />
                    
                    </Container>
                ))}
        </div> */}
		</div>
	);
};

export default Main;