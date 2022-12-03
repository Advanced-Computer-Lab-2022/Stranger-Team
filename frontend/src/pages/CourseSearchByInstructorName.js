

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "../components/CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";

    const CourseSearchByInstructorName = () => {

    //const [courses, setCourses] = useState(null)
    const {courses,dispatch} = useCourseContext();

    const [Instructor_Name, setInstructor_Name] = useState('')
    const [error, setError] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name ={Instructor_Name};
        console.log(name)
        const response = await fetch('/Search_By_Instructor_Name', {
        method: 'POST',
        body: JSON.stringify(name),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        console.log(response)

        const json = await response.json()


        console.log(json)

        if (!response.ok) {
        setError(json.error)
        
        }
        if (response.ok) {
        
        setError(null)
        setInstructor_Name('')
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
        <h3>Search Courses By Instructor Name: </h3>

        <label> Instructor Name :</label>
        <input 
            type="text" 
            onChange={(e) => setInstructor_Name(e.target.value)} 
            value={Instructor_Name}
        />
        <button>Search By Instructor_Name </button>

        {error && <div className="error">{error}</div>}
        </form>

        <div className="courses">
            {courses && courses.map(course => (
            <CourseDetails course={course} key={course._id} />

            ))}
        </div>

        
        </div>
    )
    }

    export default CourseSearchByInstructorName