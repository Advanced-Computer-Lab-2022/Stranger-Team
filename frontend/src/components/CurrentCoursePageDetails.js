    const CurrentCoursePageDetails = ({ course }) => {

        
        var instructorName = null;
        const fetchCurrentCourseInstructor = async () => {
        
        //getCurrentCourseInstructor
        const instructorId = course.Instructor;
        console.log("instid "+instructorId); 
        
        
        const response = await fetch(`/getCurrentCourseInstructor/?id=${instructorId}`)
        
        
        const json = await response.json()
        const instructorAttributes = Object.entries(json);
        console.log("instructorAttributes "+instructorAttributes[1]);

        if (response.ok) {
            instructorName = json;
            console.log("instructorName"+instructorName);
        }

        

        }
        fetchCurrentCourseInstructor();
        
    return (

        <div className="course-details">
        <h4>{course.Title}</h4>
        <p><strong>Instructor Name: </strong>{course.Instructor}</p> 
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Price: </strong>{course.Price}</p>
        <p><strong>Dicount: </strong>{course.Discount}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        
        </div>
    )
    }

    export default CurrentCoursePageDetails