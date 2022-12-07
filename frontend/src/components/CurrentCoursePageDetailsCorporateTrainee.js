    const CurrentCoursePageDetailsCorporateTrainee = ({ course }) => {

        


        
    return (

        <div className="course-details">
        <h4>{course.Title}</h4>
        {/* <p><strong>Instructor Name: </strong>{course.Instructor.First_Name}</p> */}
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        </div>
    )
    }

    export default CurrentCoursePageDetailsCorporateTrainee