    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorNavbar from '../components/InstructorNavbar';

    const InstructorAddNewSubtitlePage = () => {

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
    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const instructorId = params.get('id'); 
        const courseId = params.get('CourseId'); 
        // let path = `/CurrentCourse/?id=${instructorId}&CourseId=${courseId}`; 
        let path = `/CurrentCourse/?CourseId=${courseId}`; 
        navigate(path);
    }


    return (

        <>
        <InstructorNavbar/>
        <Container>
        <form className="create" onSubmit={defineCourseSubtitle}> 
        <h3>If you wish to add more subtitles to your course now, please enter the link to the new subtitle you would like to define for your course:</h3>

        <label><strong>Subtitle Title</strong></label>
        <input 
            type="String" 
            onChange={(e) => setSubtitle_Title(e.target.value)} 
            value={Subtitle_Title} 
        />
        <br></br>
        <label><strong>Video Link</strong></label>
        <input 
            type="String" 
            onChange={(e) => setLink(e.target.value)} 
            value={Link} 
        />
 <br></br>
        <label><strong>Short Video Description</strong></label>
        <input 
            type="String" 
            onChange={(e) => setDescription(e.target.value)} 
            value={Description} 
        />

<hr></hr>


{/* SUBTITLE QUESTIONS */}

        <h3><strong>Subtitle Question</strong></h3>
        <label><strong>Question</strong></label>
        <input 
            type="String" 
            onChange={(e) => setQ(e.target.value)} 
            value={Q} 
        />
 <br></br>
        <label><strong>Option 1</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer1(e.target.value)} 
            value={Answer1} 
        />
 <br></br>
        <label><strong>Option 2</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer2(e.target.value)} 
            value={Answer2} 
        />
 <br></br>

        <label><strong>Option 3</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer3(e.target.value)} 
            value={Answer3} 
        />

<br></br>
        <label><strong>Option 4</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer4(e.target.value)} 
            value={Answer4} 
        />
 <br></br>
        <label><strong>Correct Answer</strong></label>
        <input 
            type="String" 
            onChange={(e) => setcorrectAnswer(e.target.value)} 
            value={correctAnswer} 
        />

<p></p>
<button className="button-2" role="button"><span>Add Subtitle</span></button>
        {/* {error && <div className="error">{error}</div>} */}

        </form>
        <hr/>
        <button className="accept" role="button" onClick={routeChange2}><span class="text" >Done</span></button>
        </Container>



        </>

    )

    
    }

    export default InstructorAddNewSubtitlePage