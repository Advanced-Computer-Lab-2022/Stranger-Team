

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "./CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";
    import { useNavigate } from "react-router-dom";

    const FilterMyRegisteredCoursesCorporateTraineeComponent = () => {

    const {courses,dispatch} = useCourseContext();

    const [Rating, setRate] = useState('')
    const [Subject, setSubject] = useState('')
    const [Price, setPrice] = useState('')
    const [error, setError] = useState(null)
    



    useEffect(() => {
        
    }, [])

    let navigate = useNavigate();

        const routeChange = () =>{ 
        // window.location.href=`/MyRegisteredCoursesFilteredPageCorporateTrainee?Rating=${Rating}&Subject=${Subject}&Price=${Price}`;
        let path; 

        if(Rating==null||Rating=="")
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee`; 
                }
                else
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Subject=${Subject}`; 
                }
                else
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Subject=${Subject}&Price=${Price}`; 
                }
            }
        }
        else
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Rating=${Rating}`; 
                }
                else
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Rating=${Rating}&Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Rating=${Rating}&Subject=${Subject}`; 
                }
                else
                {
                    path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
                }
            }
        }

        // let path = `/MyRegisteredCoursesFilteredPageCorporateTrainee?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
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

    export default FilterMyRegisteredCoursesCorporateTraineeComponent