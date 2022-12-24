    import { useState } from 'react'
    import { useCourseContext } from "../hooks/useCoursesContext";
    import InstructorAddNewSubtitlePage from './InstructorAddANewSubtitlePage';
    import DefineACourseDiscountInstructorPage from './DefineACourseDiscountInstructorPage';
    import ProfileNavBar from "../components/ProfileNavBar"

    const InstructorAddANewCoursePage = () => {
    const [Title, setTitle] = useState('')
    const [Subject, setSubject] = useState('')
    const [Subtitles_Total_Hours, setSubtitles_Total_Hours] = useState('')
    const [Discount,setDiscount]= useState('');
    const [Discount_Start_Date,setDiscount_Start_Date] = useState('')
    const [Discount_End_Date,setDiscount_End_Date] = useState('')
    const [Course_Total_Hours, setCourse_Total_Hours] = useState('')
    const [Price, setPrice] = useState('')
    const [Course_Description,setCourse_Description]= useState('')
    const [PreviewLink,setPreviewLink] = useState('')
    const [Subtitle_Title,setSubtitle_Title] = useState('')
    const [Link,setLink] = useState('')
    const [Description,setDescription] = useState('')
    const [error, setError] = useState(null)
    const [Q, setQ] = useState('')
    const [Answer1, setAnswer1] = useState('')
    const [Answer2, setAnswer2] = useState('')
    const [Answer3, setAnswer3] = useState('')
    const [Answer4, setAnswer4] = useState('')
    const [correctAnswer, setcorrectAnswer] = useState('')
    //const [instructorId, setInstructorId] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const instructorId = queryParams.get('id');


        const course = {Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Discount,Discount_Start_Date,Discount_End_Date,Course_Description,PreviewLink,Subtitle_Title,Link,Description,Q, Answer1, Answer2, Answer3, Answer4, correctAnswer,instructorId}
        console.log(course)


        const response = await fetch(`/createCourse/?id=${instructorId}`, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'Content-Type': 'application/json'
        }
        })


        const json = await response.json()

        console.log(response)
        console.log("courseid"+json._id)

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
        setDiscount_End_Date('')
        setDiscount_Start_Date('')
        setCourse_Description('')
        setPreviewLink('')
        setSubtitle_Title('')
        setLink('')
        setDescription('')
        setQ('')
        setAnswer1('')
        setAnswer2('')
        setAnswer3('')
        setAnswer4('')
        setcorrectAnswer('')
        //dispatch({type:'CREATE_COURSE',payload:json})
        
        console.log('new course added:', json)
        window.location=`http://localhost:3000/InstructorAddMoreSubtitles/?id=${instructorId}&CourseId=${json._id}`
        }

    }

    return (
        <div>
            <ProfileNavBar/>
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

        <hr></hr>
        <h3>Course Subtitles:</h3>

        <label>Subtitle Title:</label>
        <input 
            type="String" 
            onChange={(e) => setSubtitle_Title(e.target.value)} 
            value={Subtitle_Title} 
        />

        <label>Subtitle Link:</label>
        <input 
            type="String" 
            onChange={(e) => setLink(e.target.value)} 
            value={Link} 
        />

        <label>Subtitle Description:</label>
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

        <hr></hr>


        <h3>Optional Details:</h3>
        <p> </p>
        <label>Discount:</label>
        <input 
            type="number" 
            onChange={(e) => setDiscount(e.target.value)} 
            value={Discount} 
        />

        <label>Discount Start Date:</label>
        <input 
            className='course'
            type="Date" 
            min="2000-01-01" 
            onChange={(e) => setDiscount_Start_Date(e.target.value)} 
            value={Discount_Start_Date} 
        />

        <label>Discount End Date:</label>
        <input 
            className='course'
            type="Date" 
            min="2000-01-01" 
            onChange={(e) => setDiscount_End_Date(e.target.value)} 
            value={Discount_End_Date} 
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
        
        </div>
    )
    }

    export default InstructorAddANewCoursePage