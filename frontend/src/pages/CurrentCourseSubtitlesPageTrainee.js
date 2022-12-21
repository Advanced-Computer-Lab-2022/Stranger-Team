
//instructor current course page

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    // components
    import MyCourses from "../components/MyCourses"
    //import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import Navbar from "../components/Navbar";

    import CourseDetails from "../components/CourseDetails";
    import StarRating from "../components/StarRating";
    import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
    import CurrentCoursePageDiscountDetails from "../components/CurrentCoursePageDiscountDetails";
    import CurrentCourseInstructorPageSubtitleDetails from "../components/CurrentCourseInstructorPageSubtitlesDetails"
    import CurrentCoursePageSubtitleDetails from "../components/CurrentCourseInstructorPageSubtitlesDetails";
    import CurrentCourseSubtitlesPageDetailsTrainee from "../components/CurrentCourseSubtitlesPageDetailsTrainee";

     import Progressbar from "../components/progressBar";
    //import ProgressBar from 'react-bootstrap/ProgressBar';
        var p;
       
    const CurrentCourseSubtitlesPageTrainee = () => {
    
    const [subtitle,setSubtitle] = useState([])
    const [progress,setProgress]=useState([]);

    useEffect(() => {
        const fetchSubtitles = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const subtitleId = params.get('SubtitleId');
        console.log(subtitleId); 
        
        const response = await fetch(`/fetchTheSubtitleBySubtitleId/?SubtitleId=${subtitleId}`)

        const json = await response.json()
        console.log( json)

        if (response.ok) {
            setSubtitle([json])
        }
        }
        const fetchProgress = async () => {
        const params = new URLSearchParams(window.location.search);
        const subtitleId = params.get('SubtitleId');
        const courseId = params.get('CourseId');
        const Corporate_Trainee_Id = params.get('CorporateTraineeId');
        console.log(subtitleId); 
        const response = await fetch(`/getSubtitlesStatus/?CourseId=${courseId}&CorporateTraineeId=${Corporate_Trainee_Id}&SubtitleId=${subtitleId}`)
        const json = await response.json()
        console.log( json)
        if (response.ok) {
            p=json.Progress;
            setProgress([json])                  
        }}
        console.log(p)     
        fetchSubtitles()
        fetchProgress()
    })

    const updateProgress = async () => {
        const params = new URLSearchParams(window.location.search);
        const subtitleId = params.get('SubtitleId');
        const courseId = params.get('CourseId');
        const Corporate_Trainee_Id = params.get('CorporateTraineeId');

        console.log(subtitleId); 
        const response = await fetch(`/updatetSubtitlesStatus/?CourseId=${courseId}&CorporateTraineeId=${Corporate_Trainee_Id}&SubtitleId=${subtitleId}`)
        const json = await response.json()
        console.log( json)
        if (response.ok) {
            p=json.Progress;
            setProgress([json])
                    
        }}
        console.log(p)
    return (
            <div>   
        <Container  >

        <div className="row gutters">
        <div className="card h-100">
            <div className="card-body">
                <div>
                {progress && progress.map(progress => (
                <Progressbar progress={progress} key={progress._id} />
                ))[0]
                }
                </div>
                
                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                {subtitle && subtitle.map(subtitle => (
                <CurrentCourseSubtitlesPageDetailsTrainee subtitle={subtitle} key={subtitle._id} />
                ))[0]}
                
            </div>
        <button onClick={updateProgress}  id="NextSub" style={{margin:"20px 640px",padding:"10px 20px",width:"100px"}}>
            {"NEXT"}
        </button>

        </div>



        {/* {
        <ProgressBar now={p} label={`${p}%`} variant="success"></ProgressBar>
        } */}

        
      
         
        </div>
        </Container>
        <div>
            
        </div>
        </div>

    )
    }

    export default CurrentCourseSubtitlesPageTrainee