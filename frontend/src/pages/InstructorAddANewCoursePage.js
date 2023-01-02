    //sessions done
    import { useState } from 'react'
    import { useCourseContext } from "../hooks/useCoursesContext";
    import InstructorAddNewSubtitlePage from './InstructorAddANewSubtitlePage';
    import DefineACourseDiscountInstructorPage from './DefineACourseDiscountInstructorPage';
    import ProfileNavBar from "../components/ProfileNavBar"
    import InstructorNavbar from '../components/InstructorNavbar';
import { Container } from 'react-bootstrap';

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
        //const instructorId = queryParams.get('id');


        const course = {Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Discount,Discount_Start_Date,Discount_End_Date,Course_Description,PreviewLink,Subtitle_Title,Link,Description,Q, Answer1, Answer2, Answer3, Answer4, correctAnswer}
        console.log(course)


        // const response = await fetch(`/createCourse/?id=${instructorId}`, {
        // method: 'POST',
        // body: JSON.stringify(course),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
        // })

        const response = await fetch(`/createCourse`, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'Content-Type': 'application/json'
        }
        })


        const json = await response.json()

        console.log(response)
        console.log("courseid"+json)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        console.log("here")
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
        // window.location=`http://localhost:3000/InstructorAddMoreSubtitles/?id=${instructorId}&CourseId=${json._id}`
        window.location=`http://localhost:3000/InstructorAddMoreSubtitles/?CourseId=${json._id}`
        }

    }

    return (
        <div>
            <InstructorNavbar/>
           <Container><form className="create" onSubmit={handleSubmit} > 
        <h3><strong>Add a New Course</strong></h3>

        <label><strong>Title*</strong></label>
        <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={Title}
            required
        />
<br></br>
        <label><strong>Subject*</strong></label>
        <input 
            type="text" 
            onChange={(e) => setSubject(e.target.value)} 
            value={Subject}
            required
        />

<br></br>
        <label><strong>Subtitles Total Hours*</strong></label>
        <input 
            type="number" 
            onChange={(e) => setSubtitles_Total_Hours(e.target.value)} 
            value={Subtitles_Total_Hours} 
            required
        />

<br></br>
        <label><strong>Course Total Hours*</strong></label>
        <input 
            type="number" 
            onChange={(e) => setCourse_Total_Hours(e.target.value)} 
            value={Course_Total_Hours}
            required 
        />
<br></br>
        <label><strong>Price*</strong></label>
        <input 
            type="text" 
            onChange={(e) => setPrice(e.target.value)} 
            value={Price}
            required 
        />
<br></br>
        <label><strong>Preview Link for Course*</strong></label>
        <input 
            type="text" 
            onChange={(e) => setPreviewLink(e.target.value)} 
            value={PreviewLink} 
            required
        />

        <hr></hr>
        <h3><strong>Subtitles</strong></h3>
        <label>One or more subtitles can be added to your course.</label>
        <p></p>
        <label><strong>Subtitle Title*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setSubtitle_Title(e.target.value)} 
            value={Subtitle_Title}
            required 
        />
<br></br>
        <label><strong>Link*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setLink(e.target.value)} 
            value={Link} 
            required
        />
<br></br>
        <label><strong>Description*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setDescription(e.target.value)} 
            value={Description}  
            required
        />

        <hr></hr>


{/* SUBTITLE QUESTIONS */}
     
        <h3><strong>Subtitle Question</strong></h3>
        <label>Each Subtitle must have one question relevant to its given content.</label>
        <p></p>
        <label><strong>Question*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setQ(e.target.value)} 
            value={Q} 
            required
        />
<br></br>
        <label><strong>Option 1*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer1(e.target.value)} 
            value={Answer1} 
            required
        />
<br></br>
        <label><strong>Option 2*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer2(e.target.value)} 
            value={Answer2} 
            required
        />
<br></br>

        <label><strong>Option 3*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer3(e.target.value)} 
            value={Answer3} 
            required
        />
<br></br>

        <label><strong>Option 4*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setAnswer4(e.target.value)} 
            value={Answer4} 
            required
        />
<br></br>
        <label><strong>Correct Answer*</strong></label>
        <input 
            type="String" 
            onChange={(e) => setcorrectAnswer(e.target.value)} 
            value={correctAnswer} 
            required
        />

        <hr></hr>


        <h3><strong>Discount</strong></h3>
        <label>Course discounts can be added now or later.</label>
        <p> </p>
        <label><strong>Discount</strong></label>
        <input 
            type="number" 
            onChange={(e) => setDiscount(e.target.value)} 
            value={Discount} 
        />
<br></br>
        <label><strong>Discount Start Date</strong></label>
        <input 
            className='course'
            type="Date" 
            min="2000-01-01" 
            onChange={(e) => setDiscount_Start_Date(e.target.value)} 
            value={Discount_Start_Date} 
        />
<br></br>
        <label>Discount End Date:</label>
        <input 
            className='course'
            type="Date" 
            min="2000-01-01" 
            onChange={(e) => setDiscount_End_Date(e.target.value)} 
            value={Discount_End_Date} 
        />
<br></br>
        <label><strong>Course Description</strong></label>
        <input 
            type="String" 
            onChange={(e) => setCourse_Description(e.target.value)} 
            value={Course_Description} 
        />
<p></p>
<button className="button-2" role="button"><span>Add Course</span></button>
        {error && <div className="error">{error}</div>}
        </form></Container>
        
        
        </div>
    )
    }

    export default InstructorAddANewCoursePage