    import { useState } from 'react'
    import { useCourseContext } from "../hooks/useCoursesContext";

    const CourseForm = () => {
    const {dispatch} =useCourseContext();
    const [Title, setTitle] = useState('')
    const [Subject, setSubject] = useState('')
    const [Subtitles, setSubtitles] = useState('')
    const [Subtitles_Total_Hours, setSubtitles_Total_Hours] = useState('')
    const [Exercises, setExercises] = useState('')
    const [Course_Total_Hours, setCourse_Total_Hours] = useState('')
    const [Price, setPrice] = useState('')
    const [Rating, setRating] = useState('')
    const [Instructor_Name, setInstructor_Name] = useState('')
    const [discount,setDiscount] = useState('')
    const [Discount_Start_Date,setDiscount_Start_Date] = useState('')
    const [Discount_End_Date,setDiscount_End_Date] = useState('')
    const[Course_Description,setCourse_Description]= useState('')
    const [error, setError] = useState(null)
    //const [instructorId, setInstructorId] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const instructorId = queryParams.get('id');

        //const instructorId=req.query.id;

        const course = {Title, Subject, Subtitles,Subtitles_Total_Hours,Exercises,Course_Total_Hours,Price,Rating,Instructor_Name,discount,Discount_Start_Date,Discount_End_Date,Course_Description,instructorId}
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
        setSubtitles('')
        setSubtitles_Total_Hours('')
        setExercises('')
        setCourse_Total_Hours('')
        setPrice('')
        setRating('')
        setInstructor_Name('')
        setDiscount('')
        setDiscount_End_Date('')
        setDiscount_Start_Date('')
        setCourse_Description('')
        dispatch({type:'CREATE_COURSE',payload:json})
        
        console.log('new course added:', json)
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New Course</h3>

        <label> Title:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={Title}
        />

        <label> Subject:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setSubject(e.target.value)} 
            value={Subject}
        />


        <label>Subtitles:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setSubtitles(e.target.value)} 
            value={Subtitles}
        />

        <label>Subtitles Total Hours:</label>
        <input 
            className='course'
            type="number" 
            onChange={(e) => setSubtitles_Total_Hours(e.target.value)} 
            value={Subtitles_Total_Hours} 
        />

        <label>Exercises:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setExercises(e.target.value)} 
            value={Exercises} 
        />

        <label>Course Total Hours:</label>
        <input 
            className='course'
            type="number" 
            onChange={(e) => setCourse_Total_Hours(e.target.value)} 
            value={Course_Total_Hours} 
        />

        <label>Price:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setPrice(e.target.value)} 
            value={Price} 
        />

        <label>Rating:</label>
        <input 
            className='course'
            type="number" 
            onChange={(e) => setRating(e.target.value)} 
            value={Rating} 
        />

        <label>Instructor Name:</label>
        <input 
            className='course'
            type="String" 
            onChange={(e) => setInstructor_Name(e.target.value)} 
            value={Instructor_Name} 
        />

        <label>Optional Details:</label>
        <p> </p>

        <label>Discount :</label>
        <input 
            className='course'
            type="String" 
            onChange={(e) => setDiscount(e.target.value)} 
            value={discount} 
        />

        <label>Discount Start Date:</label>
        <input 
            className='course'
            type="Date" 
            onChange={(e) => setDiscount_Start_Date(e.target.value)} 
            value={Discount_Start_Date} 
        />

        <label>Discount End Date:</label>
        <input 
            className='course'
            type="Date" 
            onChange={(e) => setDiscount_End_Date(e.target.value)} 
            value={Discount_End_Date} 
        />

        <label>Course Description:</label>
        <input 
            className='course'
            type="String" 
            onChange={(e) => setCourse_Description(e.target.value)} 
            value={Course_Description} 
        />

        <button>Add Course</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
    }

    export default CourseForm