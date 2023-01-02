        //sessions done
        import React from 'react';
        const MyCourses = ({ course }) => {
        const fetchCourseDicountDetails = async () => {
        const courseId = course._id;
        
        
        const response = await fetch(`/isDiscountViable/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log(json.Discount)
        
        }
        fetchCourseDicountDetails();

        
    return (
        
        
        <div>
            {/* <h4>My Courses Page</h4> */}
            <div className="admin-details">
                <h4><strong>{course.Title}</strong></h4>
                <p><strong>{course.Subject}</strong></p>
            </div>
        </div>
        
    )
    }

    export default MyCourses