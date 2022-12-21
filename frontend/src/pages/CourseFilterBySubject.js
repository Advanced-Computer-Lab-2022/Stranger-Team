

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "../components/CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";

    const CourseFilterBySubject = () => {

    //const [courses, setCourses] = useState(null)
    const {courses,dispatch} = useCourseContext();

    const [Subject, setSubject] = useState('')
    const [error, setError] = useState(null)
    const [filteredCourses,setFilteredCourses] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const subject ={Subject};
        console.log(subject)
        const response = await fetch('/Filter_By_Subject', {
        method: 'POST',
        body: JSON.stringify(subject),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        console.log(response)

        const json = await response.json()
        //courses =json


        console.log(json)

        if (!response.ok) {
        setError(json.error)
        
        }
        if (response.ok) {
        
        setError(null)
        setSubject('')
        dispatch({type:'SET_COURSE' ,payload:json})  
        }

    }

    useEffect(() => {
        
    }, [])


    return (
        <div className="home">
        <div className="courses">
            <h1>Courses</h1>
        
        </div>
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Filter Courses By Subject: </h3>

        <label> Subject:</label>
        <input 
            type="text" 
            onChange={(e) => setSubject(e.target.value)} 
            value={Subject}
        />
        <button>Filter By Subject </button>

        {error && <div className="error">{error}</div>}
        </form>

        <div className="courses">
            {courses && courses.map(course => (
            <CourseDetails course={course} key={course._id} />
                
            )) }
        </div>

        
        </div>
    )
    }

    export default CourseFilterBySubject