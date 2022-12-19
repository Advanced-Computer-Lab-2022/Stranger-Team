    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'

    const InstructorAddANewCourseSubtitlePageDirectlyAfterAddingCourse = () => {

    const [Link,setLink] = useState('')
    const [Subtitle_Title, setSubtitle_Title]= useState('')
    const [Description,setDescription]=useState('')
	const[Error,setError]= useState('')

		const defineCourseSubtitle = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        console.log("courseId"+courseId)
        const subtitleLink = {Subtitle_Title,Link,Description};
        console.log("newSubtitle"+subtitleLink)

        const response = await fetch(`/addSubtitle/?CourseId=${courseId}`, {
        method: 'POST',
        body: JSON.stringify(subtitleLink),
        headers: {
            'Content-Type': 'application/json'
        }
        })

        const json = await response.json()
        console.log(response)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        setError(null)
        setLink('')
        setSubtitle_Title('')
        setDescription('')
        
        
        console.log('Subtitle Defined:', json)
        }

    }

    let navigate = useNavigate();
    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        let path = `/InstructorCoursePage/?id=${instructorId}`; 
        navigate(path);
    }


    return (

        
        <div className="course-details">
        <form className="create" onSubmit={defineCourseSubtitle}> 
        <h3>If you wish to add more subtitles to your course now, please enter the link to the new subtitle you would like to define for your course:</h3>

        <label>Subtitle Title:</label>
        <input 
            type="String" 
            onChange={(e) => setSubtitle_Title(e.target.value)} 
            value={Subtitle_Title} 
        />
        <label>Video Link :</label>
        <input 
            type="String" 
            onChange={(e) => setLink(e.target.value)} 
            value={Link} 
        />

        <label>Short Video Description :</label>
        <input 
            type="String" 
            onChange={(e) => setDescription(e.target.value)} 
            value={Description} 
        />

        <button>Add Subtitle</button>
        {/* {error && <div className="error">{error}</div>} */}
        </form>
        <button className="create" onClick={routeChange2}>Done</button>
        </div>
        

    )
    }

    export default InstructorAddANewCourseSubtitlePageDirectlyAfterAddingCourse