//sessions done

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "./CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";
    import { useNavigate } from "react-router-dom";
    import styles from "../components/Guest/styles.module.css"

    const FilterCoursesByRateComponent = () => {

    const {courses,dispatch} = useCourseContext();

    const [Rating, setRate] = useState('')
    const [Subject, setSubject] = useState('')
    const [Price, setPrice] = useState('')
    const [error, setError] = useState(null)
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const response = await fetch(`/FilteredCourses/?Rating=${Rating}&Subject=${Subject}&Price=${Price}`)
    //     console.log(response)

    //     const json = await response.json()


    //     console.log(json)

    //     if (!response.ok) {
    //     setError(json.error)
        
    //     }
    //     if (response.ok) {
        
    //     setError(null)
    //     setRate('')
    //     setSubject('')
    //     setPrice('')
        
        
    //     }

    // }

    useEffect(() => {
        
    }, [])

    let navigate = useNavigate();

        const routeChange = () =>{ 
        // window.location.href=`/FilteredCoursesPageTrainee?Rating=${Rating}&Subject=${Subject}&Price=${Price}`;
        let path; 

        if(Rating==null||Rating=="")
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageTrainee`; 
                }
                else
                {
                    path = `/FilteredCoursesPageTrainee?Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageTrainee?Subject=${Subject}`; 
                }
                else
                {
                    path = `/FilteredCoursesPageTrainee?Subject=${Subject}&Price=${Price}`; 
                }
            }
        }
        else
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageTrainee?Rating=${Rating}`; 
                }
                else
                {
                    path = `/FilteredCoursesPageTrainee?Rating=${Rating}&Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageTrainee?Rating=${Rating}&Subject=${Subject}`; 
                }
                else
                {
                    path = `/FilteredCoursesPageTrainee?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
                }
            }
        }

        // let path = `/FilteredCoursesPageTrainee?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
        navigate(path);
    }


    return (
        <>
        {/* // <div className="home" style={{marginLeft:'1200px',marginTop:'100px'}}> */}
        <form className="create" onSubmit={routeChange} style={{marginLeft:'1000px',marginTop:'100px',position:'absolute'}}> 
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

        <button className={styles.blueButton}>Filter</button>
        

        {error && <div className="error">{error}</div>}
        </form>

        {/* <div className="courses">
            {courses && courses.map(course => (
            <CourseDetails course={course} key={course._id} />

            ))}
        </div> */}

        
        </>
    )
    }

    export default FilterCoursesByRateComponent