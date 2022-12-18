
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
import FilterCoursesAdminComponent from "../components/FilterCoursesAdminComponent";

    const FilteredCoursesAdminPageAdmin = () => {
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
                    response = await fetch(`/FilteredCoursesAdmin/?q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCoursesAdmin/?Price=${price}&q=${searchQuery}`)
                }
            }
            else
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilteredCoursesAdmin/?Subject=${subject}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCoursesAdmin/?Subject=${subject}&Price=${price}&q=${searchQuery}`)
                }
            }
        }
        else
        {
            if(subject==null||subject=="")
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilteredCoursesAdmin/?Rating=${rating}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCoursesAdmin/?Rating=${rating}&Price=${price}&q=${searchQuery}`)
                }
            }
            else
            {
                if(price==null||price=="")
                {
                    response = await fetch(`/FilteredCoursesAdmin/?Rating=${rating}&Subject=${subject}&q=${searchQuery}`)
                }
                else
                {
                    response = await fetch(`/FilteredCoursesAdmin/?Rating=${rating}&Subject=${subject}&Price=${price}&q=${searchQuery}`)
                }
            }
        }

        // const response = await fetch(`/FilteredCoursesAdmin/?Rating=${rating}&Subject=${subject}&Price=${price}`)
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



    return (

        <div >
            
            <input type="text" placeholder="Search By Course Title,Subject,Instructor..." className="search" onChange={(e)=>setSearchQuery(e.target.value)}>
            
            </input>

            
            <div className="courses">
            <FilterCoursesAdminComponent/>


            {courses && courses.map(course => (
            <Container hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                    }
                }}
                onClick={() =>{window.location.href=`/AdminCurrentCoursePage?CourseId=${course._id}`;}}
                key={course._id}>
                <CourseDetails course={course} key={course.id} />
            
            
            </Container>
            ))}
        </div>

        </div>
    )
    }

    export default FilteredCoursesAdminPageAdmin