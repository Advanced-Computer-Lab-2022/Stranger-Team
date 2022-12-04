    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'

    const InstructorAddNewSubtitleForm = () => {

    const [Link,setLink] = useState('')
    const [Title, setTitle]= useState('')
	const[Error,setError]= useState('')

		const defineCourseSubtitle = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        console.log("courseId"+courseId)
        const subtitleLink = {Title,Link};
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

        <button>Add Subtitle</button>
        {/* {error && <div className="error">{error}</div>} */}
        </form>
        </div>
        

    )
    }

    export default InstructorAddNewSubtitleForm