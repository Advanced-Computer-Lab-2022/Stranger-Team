//sessions done



    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "./CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";
    import { useNavigate } from "react-router-dom";
    import styles from "../components/Guest/styles.module.css"

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
        // const instructorid = params.get('id');
        let path; 

        if(Rating==null||Rating=="")
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage?Subject=${Subject}`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Subject=${Subject}&Price=${Price}`; 
                }
            }
        }
        else
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Subject=${Subject}`; 
                }
                else
                {
                    path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
                }
            }
        }

        // let path = `/FilteredCoursesInstructorPage?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
        navigate(path);
    }


    return (
        // <div className="home">
        // <div className="courses">
         
        
        // </div>
        // <form className="create" onSubmit={routeChange}> 
        // <h3>Filter Courses: </h3>

        // <label> Rate :</label>
        // <input 
        //     type="number" 
        //     onChange={(e) => setRate(e.target.value)} 
        //     value={Rating}
        // />

        // <label> Subject :</label>
        // <input 
        //     type="text" 
        //     onChange={(e) => setSubject(e.target.value)} 
        //     value={Subject}
        // />

        // <label> Price :</label>
        // <input 
        //     type="number" 
        //     onChange={(e) => setPrice(e.target.value)} 
        //     value={Price}
        // />

        // <button>Filter</button>
        

        // {error && <div className="error">{error}</div>}
        // </form>

        // {/* <div className="courses">
        //     {courses && courses.map(course => (
        //     <CourseDetails course={course} key={course._id} />

        //     ))}
        // </div> */}

        
        // </div>
        //---------------------------------
        <>
        {/* // <div className="home" style={{marginLeft:'1200px',marginTop:'100px'}}> */}
        <form className="create" onSubmit={routeChange} style={{marginLeft:'1000px',marginTop:'100px',position:'absolute'}}> 
        <h3>Filter Courses: </h3>

        {/* <label> Rate :</label>
        <input 
            type="number" 
            onChange={(e) => setRate(e.target.value)} 
            value={Rating}
        /> */}
        <label>Rating: </label>
            <select onChange={(e) => setRate(e.target.value)} value={Rating} required class="form-control" style={{width: "200px", height:"40px"}}>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>

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

    export default FilterMyCoursesInstructorComponent