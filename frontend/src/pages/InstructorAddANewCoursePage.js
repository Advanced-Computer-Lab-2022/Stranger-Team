    import { useState } from 'react'
    import { useCourseContext } from "../hooks/useCoursesContext";
    import InstructorAddNewSubtitlePage from './InstructorAddANewSubtitlePage';
    import DefineACourseDiscountInstructorPage from './DefineACourseDiscountInstructorPage';

    const InstructorAddANewCoursePage = () => {
    const [Title, setTitle] = useState('')
    const [Subject, setSubject] = useState('')
    const [Subtitles_Total_Hours, setSubtitles_Total_Hours] = useState('')
    const [Discount,setDiscount]= useState('');
    const [Course_Total_Hours, setCourse_Total_Hours] = useState('')
    const [Price, setPrice] = useState('')
    const [Course_Description,setCourse_Description]= useState('')
    const [PreviewLink,setPreviewLink] = useState('')
    const [error, setError] = useState(null)
    //const [instructorId, setInstructorId] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const instructorId = queryParams.get('id');

        //const instructorId=req.query.id;

        const course = {Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Discount,Course_Description,PreviewLink,instructorId}
        console.log(course)

        //`/View_All_Courses/?q=${searchQuery}`
        
        // const response = await fetch('/createCourse', {
        // method: 'POST',
        // body: JSON.stringify(course),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
        // })

        const response = await fetch(`/createCourse/?id=${instructorId}`, {
        method: 'POST',
        body: JSON.stringify(course),
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
        setTitle('')
        setSubject('')
        setSubtitles_Total_Hours('')
        setCourse_Total_Hours('')
        setPrice('')
        setDiscount('')
        setCourse_Description('')
        setPreviewLink('')
        //dispatch({type:'CREATE_COURSE',payload:json})
        
        console.log('new course added:', json)
        }

    }

    return (
        <div>
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New Course</h3>

        <label> Title:</label>
        <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={Title}
        />

        <label> Subject:</label>
        <input 
            type="text" 
            onChange={(e) => setSubject(e.target.value)} 
            value={Subject}
        />


        <label>Subtitles Total Hours:</label>
        <input 
            type="number" 
            onChange={(e) => setSubtitles_Total_Hours(e.target.value)} 
            value={Subtitles_Total_Hours} 
        />


        <label>Course Total Hours:</label>
        <input 
            type="number" 
            onChange={(e) => setCourse_Total_Hours(e.target.value)} 
            value={Course_Total_Hours} 
        />

        <label>Price:</label>
        <input 
            type="text" 
            onChange={(e) => setPrice(e.target.value)} 
            value={Price} 
        />

        <label>Preview Link For Course:</label>
        <input 
            type="text" 
            onChange={(e) => setPreviewLink(e.target.value)} 
            value={PreviewLink} 
        />

        
        <label>Optional Details:</label>
        <p> </p>
        <label>Discount:</label>
        <input 
            type="number" 
            onChange={(e) => setDiscount(e.target.value)} 
            value={Discount} 
        />

        <label>Course Description:</label>
        <input 
            type="String" 
            onChange={(e) => setCourse_Description(e.target.value)} 
            value={Course_Description} 
        />

        <button>Add Course</button>
        {error && <div className="error">{error}</div>}
        </form>
        {/* <DefineACourseDiscountInstructorPage/> */}
        {/* <InstructorAddNewSubtitlePage/> */}
        </div>
    )
    }

    export default InstructorAddANewCoursePage