
//instructor current course page
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "../components/Navbar";
    import SubtitleQuestionComponent from "../components/SubtitleQuestionComponent";

    import CourseDetails from "../components/CourseDetails";
    import StarRating from "../components/StarRating";
    import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
    import CurrentCoursePageDiscountDetails from "../components/CurrentCoursePageDiscountDetails";
    import CurrentCourseInstructorPageSubtitleDetails from "../components/CurrentCourseInstructorPageSubtitlesDetails"
    import CurrentCoursePageSubtitleDetails from "../components/CurrentCourseInstructorPageSubtitlesDetails";
    import CurrentCourseSubtitlesPageDetailsTrainee from "../components/CurrentCourseSubtitlesPageDetailsTrainee";



    const CurrentCourseSubtitlesPageTrainee = () => {
    
    const [subtitle,setSubtitle] = useState([])
     const [subtitleQuestion, setSubtitleQuestion] = useState(null)

    useEffect(() => {
        const fetchSubtitles = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const subtitleId = params.get('SubtitleId');
        console.log(subtitleId); 
        
        const response = await fetch(`/fetchTheSubtitleBySubtitleId/?SubtitleId=${subtitleId}`)
        const response1 = await fetch(`/getSubQ/?SubtitleId=${subtitleId}`)

        const json = await response.json()
         const json1 = await response1.json()
        console.log( json)
         console.log("SUB QUESTION AHO: " + json1)

        if (response.ok) {
            setSubtitle([json])
        }

        if(response1.ok) {
            setSubtitleQuestion(json1)
        }


        }


        fetchSubtitles()
    }, [])


    return (

            // <div classNameName="course-details">

            //     <h4>Available Course Videos:</h4>
            //     {subtitle && subtitle.map(subtitle => (
            //     <CurrentCourseSubtitlesPageDetailsTrainee subtitle={subtitle} key={subtitle._id} />
            //     ))[0]}
            // </div> 

            <div>
        
        <Container >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                {subtitle && subtitle.map(subtitle => (
                <CurrentCourseSubtitlesPageDetailsTrainee subtitle={subtitle} key={subtitle._id} />
                ))[0]}


               {subtitleQuestion && subtitleQuestion.map(subtitleQuestion => (
                <SubtitleQuestionComponent subtitleQuestion={subtitleQuestion} key={subtitleQuestion._id} />
                ))[0]}
                
                
            </div>
            
        </div>
        </div>
        
        </Container>
        </div>

    )
    }

    export default CurrentCourseSubtitlesPageTrainee