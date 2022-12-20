    const CorporateCourseDetails = ({ course }) => {

        
    return (
        <div className="course-details">
        <h4>{course.Title}</h4>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles: </strong>{course.Subtitles}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Exercises: </strong>{course.Exercises}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Rating: </strong>{course.Rating}</p>
        <p><strong>Instructor Name: </strong>{course.Instructor_Name}</p>
        <p><strong>Discount: </strong>{course.discount}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p>
        <p>{course.createdAt}</p>
        
        </div>
    )
    }

    export default CorporateCourseDetails