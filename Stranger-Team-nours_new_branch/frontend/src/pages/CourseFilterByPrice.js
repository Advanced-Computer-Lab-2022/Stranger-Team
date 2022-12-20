

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "../components/CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";

    const CourseFilterByPrice = () => {

    //const [courses, setCourses] = useState(null)
    const {courses,dispatch} = useCourseContext();

    const [Price, setPrice] = useState('')
    const [error, setError] = useState(null)
    const [filteredCourses,setFilteredCourses] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const price ={Price};
        console.log(price)
        const response = await fetch('/Filter_By_Price', {
        method: 'POST',
        body: JSON.stringify(price),
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
        setPrice('')
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
        <h3>Filter Courses By Price: </h3>

        <label> Price:</label>
        <input 
            type="text" 
            onChange={(e) => setPrice(e.target.value)} 
            value={Price}
        />
        <button>Filter By Price </button>

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

    export default CourseFilterByPrice