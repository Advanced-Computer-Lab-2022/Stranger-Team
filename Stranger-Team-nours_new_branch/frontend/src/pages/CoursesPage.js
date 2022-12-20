

    import { useEffect, useState } from "react"

    // components
    import CourseDetails from "../components/CourseDetails"
    //import FilterBySubjectForm from "../components/FilterBySubjectForm"

    const CoursesPage = () => {
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

    return (
        <div className="home">
        <div className="courses">
            <h1>Courses</h1>
            {courses && courses.map(course => (
            <CourseDetails course={course} key={course._id} />
            ))}
        </div>
        </div>
    )
    }

    export default CoursesPage