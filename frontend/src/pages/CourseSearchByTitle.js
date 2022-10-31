

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "../components/CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";

    const CourseSearchByTitle = () => {

    //const [courses, setCourses] = useState(null)
    const {courses,dispatch} = useCourseContext();

    const [Title, setTitle] = useState('')
    const [error, setError] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const title ={Title};
        console.log(title)
        const response = await fetch('/Search_By_Title', {
        method: 'POST',
        body: JSON.stringify(title),
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
        setTitle('')
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
        <h3>Search Courses By Title: </h3>

        <label> Title :</label>
        <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={Title}
        />
        <button>Search By Title </button>

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

    export default CourseSearchByTitle