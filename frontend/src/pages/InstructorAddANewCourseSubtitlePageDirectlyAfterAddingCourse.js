    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'
    import ProfileNavBar from '../components/ProfileNavBar'

    const InstructorAddANewCourseSubtitlePageDirectlyAfterAddingCourse = () => {

    const [Link,setLink] = useState('')
    const [Subtitle_Title, setSubtitle_Title]= useState('')
    const [Description,setDescription]=useState('')
	const[Error,setError]= useState('')
    const [Q, setQ] = useState('')
    const [Answer1, setAnswer1] = useState('')
    const [Answer2, setAnswer2] = useState('')
    const [Answer3, setAnswer3] = useState('')
    const [Answer4, setAnswer4] = useState('')
    const [correctAnswer, setcorrectAnswer] = useState('')

		const defineCourseSubtitle = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        console.log("courseId"+courseId)
        const subtitleLink = {Subtitle_Title,Link,Description,Q, Answer1, Answer2, Answer3, Answer4, correctAnswer};
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
        setQ('')
        setAnswer1('')
        setAnswer2('')
        setAnswer3('')
        setAnswer4('')
        setcorrectAnswer('')
        
        
        console.log('Subtitle Defined:', json)
        }

    }

    let navigate = useNavigate();
    // const routeChange2 = () =>{ 
    //     const params = new URLSearchParams(window.location.search);
    //     const instructorId = params.get('id');
    //     let path = `/InstructorCoursePage/?id=${instructorId}`; 
    //     navigate(path);
    // }


    const routeChange2 = () =>{ 
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        const params = new URLSearchParams(window.location.search);
        //const instructorId = params.get('id');
        // let path = `/createQuiz/?CourseId=${courseId}&id=${instructorId}`; 
        let path = `/createQuiz/?CourseId=${courseId}`; 
        navigate(path);
    }

    return (

        <>
        <ProfileNavBar/>
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

<hr></hr>


{/* SUBTITLE QUESTIONS */}

        <h3>Subtitle Question</h3>
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
        />

        <button>Add Subtitle</button>
        {/* {error && <div className="error">{error}</div>} */}

        </form>
        <button className="create" onClick={routeChange2}>Done</button>
        </div>



        </>

    )
    }

    export default InstructorAddANewCourseSubtitlePageDirectlyAfterAddingCourse