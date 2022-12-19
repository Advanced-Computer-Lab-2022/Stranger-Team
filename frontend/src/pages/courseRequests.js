import { useEffect } from "react";


//components
import CourseRequestsDetails from '../components/CourseRequestsDetails';
//import AdminNavbar from 


//hooks
import { useCourseRequestsContext } from '../hooks/UseCourseRequests'

const CourseRequestsPage = () => {

    
    const {courserequests, dispatch} = useCourseRequestsContext()
    
        useEffect(() => {
            const fetchcourseRequests = async () => {
            const response = await fetch('/viewRequests')
                const json = await response.json() //course req records
                if (response.ok) {
                    dispatch({type: 'SET_COURSE_REQUESTS', payload: json})
                }
            }
            fetchcourseRequests()
            
        }, [])
    
    
        return (
        <div className="home">
        <div className="admins">
            {courserequests && courserequests.map((courserequests) => (
                <CourseRequestsDetails key={courserequests._id} courserequests={courserequests}/>
            ))}
        </div>
        </div>
        )
    
    }


export default CourseRequestsPage