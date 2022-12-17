    const CourseDetails = ({ course }) => {

        // const [discount, setDiscount] = useState(null)
        // const [discountStart, setDiscountStart] = useState(null)
        // const [discountEnd, setDiscountEnd] = useState(null)
        
        
        // const fetchCourseDicountDetails = async () => {
        // const instructorId = course.Instructor;
        // console.log("instid "+instructorId); 
        
        
        // const response = await fetch(`/getCurrentCourseInstructor/?id=${instructorId}`)
        
        
        // const json = await response.json()
        

        
        // }
        // fetchCourseDicountDetails();
        
    return (
        <div className="course-details">
        <h4>{course.Title}</h4>
        <p><strong>Subject: </strong>{course.Subject}</p>
        {/* <p><strong>Subtitles: </strong>{course.Subtitles}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Exercises: </strong>{course.Exercises}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p> */}
        <p><strong>Price: </strong>{course.Price}</p>
        <p><strong>Discount: </strong>{course.Discount}</p> 
        {/* <p><strong>Rating: </strong>{course.Rating}</p> */}
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        </div>
    )
    }

    export default CourseDetails