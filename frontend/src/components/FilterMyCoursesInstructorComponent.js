



    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "./CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";
    import { useNavigate } from "react-router-dom";

    const FilterMyCoursesInstructorComponent = () => {

    const {courses,dispatch} = useCourseContext();

    const [Rating, setRate] = useState('')
    const [Subject, setSubject] = useState('')
    const [Price, setPrice] = useState('')
    const [error, setError] = useState(null)
    



    useEffect(() => {
        
    }, [])

    let navigate = useNavigate();

        const routeChange = () =>{ 
        // window.location.href=`/FilteredCoursesInstructorPage?Rating=${Rating}&Subject=${Subject}&Price=${Price}`;
        const params = new URLSearchParams(window.location.search);
        const instructorid = params.get('id');
        let path; 

        if(Rating==null||Rating=="")
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage?id=${instructorid}`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Price=${Price}&id=${instructorid}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage?Subject=${Subject}&id=${instructorid}`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Subject=${Subject}&Price=${Price}&id=${instructorid}`; 
                }
            }
        }
        else
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}&id=${instructorid}`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Price=${Price}&id=${instructorid}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Subject=${Subject}&id=${instructorid}`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Subject=${Subject}&Price=${Price}&id=${instructorid}`; 
                }
            }
        }

        // let path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
        navigate(path);
    }


    return (
        <div className="home">
        <div className="courses">
            <h1>Courses</h1>
        
        </div>
        <form className="create" onSubmit={routeChange}> 
        <h3>Filter Courses: </h3>

        <label> Rate :</label>
        <input 
            type="number" 
            onChange={(e) => setRate(e.target.value)} 
            value={Rating}
        />

        <label> Subject :</label>
        <input 
            type="text" 
            onChange={(e) => setSubject(e.target.value)} 
            value={Subject}
        />

        <label> Price :</label>
        <input 
            type="number" 
            onChange={(e) => setPrice(e.target.value)} 
            value={Price}
        />

        <button>Filter</button>
        

        {error && <div className="error">{error}</div>}
        </form>

        {/* <div className="courses">
            {courses && courses.map(course => (
            <CourseDetails course={course} key={course._id} />

            ))}
        </div> */}

        
        </div>
    )
    }

    export default FilterMyCoursesInstructorComponent