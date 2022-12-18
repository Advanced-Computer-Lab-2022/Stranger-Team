    const CourseDetailsCorporateTrainee = ({ course }) => {

        
    return (
        <div className="course-details">
        <h4>{course.Title}</h4>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        </div>
    )
    }

    export default CourseDetailsCorporateTrainee