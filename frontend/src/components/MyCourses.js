    const MyCourses = ({ course }) => {

        
    return (
        
        
        <div>
            {/* <h4>My Courses Page</h4> */}
            <div className="course-details">
                <h4><strong>Course Title: </strong>{course.Title}</h4>
                <p><strong>Course Subject: </strong>{course.Subject}</p>
            </div>
        </div>
        
    )
    }

    export default MyCourses