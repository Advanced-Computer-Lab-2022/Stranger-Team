    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'

    const InstructorAddNewSubtitleForm = () => {

    const [Link,setLink] = useState('')
    const [Title, setTitle]= useState('')
	const[Error,setError]= useState('')
    // const [Q, setQ] = useState('')
    // const [Answer1, setAnswer1] = useState('')
    // const [Answer2, setAnswer2] = useState('')
    // const [Answer3, setAnswer3] = useState('')
    // const [Answer4, setAnswer4] = useState('')
    // const [correctAnswer, setcorrectAnswer] = useState('')

		const defineCourseSubtitle = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        console.log("courseId"+courseId)
        const subtitleLink = {Title,Link};
        // const subtitleLink = {Title,Link, Q, Answer1, Answer2, Answer3, Answer4, correctAnswer};
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
        // setQ('')
        // setAnswer1('')
        // setAnswer2('')
        // setAnswer3('')
        // setAnswer4('')
        // setcorrectAnswer('')
        
        
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
{/* <hr></hr> */}


{/* SUBTITLE QUESTIONS */}
     
        {/* <h3>Subtitle Question</h3>
        <label>Question:</label>
        <input 
            type="String" 
            onChange={(e) => setQ(e.target.value)} 
            value={Q} 
        />

        <label>Option 1:</label>
        <input 
            type="String" 
            onChange={(e) => setAnswer1(e.target.value)} 
            value={Answer1} 
        />

        <label>Option 2:</label>
        <input 
            type="String" 
            onChange={(e) => setAnswer2(e.target.value)} 
            value={Answer2} 
        />


        <label>Option 3:</label>
        <input 
            type="String" 
            onChange={(e) => setAnswer3(e.target.value)} 
            value={Answer3} 
        />


        <label>Option 4:</label>
        <input 
            type="String" 
            onChange={(e) => setAnswer4(e.target.value)} 
            value={Answer4} 
        />

        <label>Correct Answer:</label>
        <input 
            type="String" 
            onChange={(e) => setcorrectAnswer(e.target.value)} 
            value={correctAnswer} 
        /> */}

        <button>Add Subtitle</button>
        {/* {error && <div className="error">{error}</div>} */}
        </form>
        </div>
        

    )
    }

    export default InstructorAddNewSubtitleForm