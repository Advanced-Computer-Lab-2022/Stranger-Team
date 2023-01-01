

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "./CourseDetails"

    import { useCourseContext } from "../hooks/useCoursesContext";
    import { useNavigate } from "react-router-dom";

    const FilterCoursesAdminComponent = () => {

    const [Rating, setRate] = useState('')
    const [Subject, setSubject] = useState('')
    const [Price, setPrice] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        
    }, [])

    let navigate = useNavigate();

        const routeChange = () =>{ 
        // window.location.href=`/FilteredCoursesPageAdmin?Rating=${Rating}&Subject=${Subject}&Price=${Price}`;
        let path; 

        if(Rating==null||Rating=="")
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageAdmin`; 
                }
                else
                {
                    path = `/FilteredCoursesPageAdmin?Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageAdmin?Subject=${Subject}`; 
                }
                else
                {
                    path = `/FilteredCoursesPageAdmin?Subject=${Subject}&Price=${Price}`; 
                }
            }
        }
        else
        {
            if(Subject==null||Subject=="")
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageAdmin?Rating=${Rating}`; 
                }
                else
                {
                    path = `/FilteredCoursesPageAdmin?Rating=${Rating}&Price=${Price}`; 
                }
            }
            else
            {
                if(Price==null||Price=="")
                {
                    path = `/FilteredCoursesPageAdmin?Rating=${Rating}&Subject=${Subject}`; 
                }
                else
                {
                    path = `/FilteredCoursesPageAdmin?Rating=${Rating}&Subject=${Subject}&Price=${Price}`; 
                }
            }
        }
        navigate(path);
    }


    return (
        <div className="home">
        {/* <div className="courses">
            <h1>Courses</h1>
        
        </div> */}
        <form className="create" onSubmit={routeChange}> 
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

<button className="button-20" role="button" ><span class="text">Filter</span></button>
        

        {error && <div className="error">{error}</div>}
        </form>

        
        </div>
    )
    }

    export default FilterCoursesAdminComponent