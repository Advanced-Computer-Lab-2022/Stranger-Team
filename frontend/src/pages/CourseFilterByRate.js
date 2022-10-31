

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "../components/CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";

    const CourseFilterByRate = () => {

    //const [courses, setCourses] = useState(null)
    const {courses,dispatch} = useCourseContext();

    const [Rating, setRate] = useState('')
    const [error, setError] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const rating ={Rating};
        console.log(rating)
        const response = await fetch('/Filter_By_Rate', {
        method: 'POST',
        body: JSON.stringify(rating),
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
        setRate('')
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

        <label> Rate :</label>
        <input 
            type="number" 
            onChange={(e) => setRate(e.target.value)} 
            value={Rating}
        />
        <button>Filter By Rate </button>

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

    export default CourseFilterByRate