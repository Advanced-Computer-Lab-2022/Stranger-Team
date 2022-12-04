    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'

    const InstructorAddNewSubtitlePage = () => {

    const [Link,setLink] = useState('')
    const [Title, setTitle]= useState('')
    const [Description,setDescription]=useState('')
	const[Error,setError]= useState('')

		const defineCourseSubtitle = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        console.log("courseId"+courseId)
        const subtitleLink = {Title,Link,Description};
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
        setTitle('')
        setDescription('')
        
        
        console.log('Subtitle Defined:', json)
        }

    }


    return (

        
        <div className="course-details">
        <form className="create" onSubmit={defineCourseSubtitle}> 
        <h3>Please enter the link to the new subtitle you would like to define for your course:</h3>

        <label>Subtitle Title:</label>
        <input 
            type="String" 
            onChange={(e) => setTitle(e.target.value)} 
            value={Title} 
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
        </div>
        

    )
    }

    export default InstructorAddNewSubtitlePage