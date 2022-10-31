
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    // components
    import CourseDetails from "../components/CourseDetails"

    const Home1 = () => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/View_All_Courses')
        const json = await response.json()

        if (response.ok) {
            setCourses(json)
        }
        }

        fetchCourses()
    }, [])

    let navigate = useNavigate();
        const routeChange = () =>{ 
        let path = '/CoursesFilterBySubject'; 
        navigate(path);
    }

        const routeChange1 = () =>{ 
        let path = '/CoursesFilterByPrice'; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        let path = '/CourseFilterByRate'; 
        navigate(path);
    }

    const routeChange3 = () =>{ 
        let path = '/CourseSearchByTitle'; 
        navigate(path);
    }

    const routeChange4 = () =>{ 
        let path = '/CourseSearchByInstructorName'; 
        navigate(path);
    }

    const routeChange5 = () =>{ 
        let path = '/CourseFilterBySubjectAndPrice'; 
        navigate(path);
    }

    const routeChange6 = () =>{ 
        let path = '/CourseFilterBySubjectAndRating'; 
        navigate(path);
    }

    const routeChange7 = () =>{ 
        let path = '/CourseFilterBySubjectAndRatingAndPrice'; 
        navigate(path);
    }

    const routeChange8 = () =>{ 
        let path = '/CourseFilterByPrice'; 
        navigate(path);
    }



    return (
        <div className="home">
        <div className="courses">
            {courses && courses.map(course => (
            <CourseDetails course={course} key={course._id} />
            ))}
        </div>

        <div>
            
            <form className="signin">
        
            <button onClick={routeChange3}> Search By Title </button>
            <button onClick={routeChange4}> Search By Instructor Name </button>
            <button onClick={routeChange}> Filter By Subject </button>
            <button onClick={routeChange2}> Filter By Rate </button>
            <button onClick={routeChange8}> Filter By Price </button>
            <button onClick={routeChange5}> Filter By Price And Subject </button>
            <button onClick={routeChange6}> Filter By Rating And Subject </button>
            <button onClick={routeChange7}> Filter By Subject And Rating And Price </button>
            </form>
        </div>
        </div>
    )
    }

    export default Home1