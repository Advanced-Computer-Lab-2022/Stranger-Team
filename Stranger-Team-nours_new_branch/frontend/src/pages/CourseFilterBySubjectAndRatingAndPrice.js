

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "../components/CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";

    const CourseFilterBySubjectAndRatingAndPrice = () => {

    //const [courses, setCourses] = useState(null)
    const {courses,dispatch} = useCourseContext();

    const [Subject,setSubject]= useState('')
    const [Rating, setRating] = useState('')
    const [Price,setPrice]= useState('')
    const [error, setError] = useState(null)
    const [filteredCourses,setFilteredCourses] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ratingandsubjectandprice ={Subject,Rating,Price};
        //const subject ={Subject}
        console.log(ratingandsubjectandprice)
        const response = await fetch('/Filter_By_Subject_And_Rating_And_Price', {
        method: 'POST',
        body: JSON.stringify(ratingandsubjectandprice),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        console.log(response)

        const json = await response.json()
        //courses =
        
        console.log(json)


        console.log(json)

        if (!response.ok) {
        setError(json.error)
        
        }
        if (response.ok) {
        
        setError(null)
        setRating('')
        setSubject('')
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
        <h3>Filter Courses By Subject And Rating And Price: </h3>

        <label> Subject:</label>
        <input 
            type="text" 
            onChange={(e) => setSubject(e.target.value)} 
            value={Subject}
        />

        <label> Rating:</label>
        <input 
            type="text" 
            onChange={(e) => setRating(e.target.value)} 
            value={Rating}
        />

        <label> Price:</label>
        <input 
            type="text" 
            onChange={(e) => setPrice(e.target.value)} 
            value={Price}
        />

        

        <button>Filter </button>

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

    export default CourseFilterBySubjectAndRatingAndPrice