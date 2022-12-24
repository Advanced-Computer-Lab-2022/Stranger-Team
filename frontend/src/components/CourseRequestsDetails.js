import { useCourseRequestsContext } from '../hooks/UseCourseRequests'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseRequestsDetails = ({ courserequests }) => {

    const {dispatch} = useCourseRequestsContext()
    
    const handleClick = async () =>  {
        const response = await fetch('/deleteReq/' +courserequests._id,  {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_COURSE_REQUEST', payload: json}) 
        }
        
    }


    const handleClickAccept = async () => {
            const response1 = await fetch('/grantAccess/'+courserequests._id, {
                method:'PUT'
            })

            const response = await fetch('/deleteReq/' +courserequests._id,  {
                method: 'DELETE'
            })

        // const json1 = await response1.json()
            const json = await response.json()

            if(response1.ok) {
                

            if (response.ok) {
                    dispatch({type:'DELETE_COURSE_REQUEST', payload: json}) 
            }

            }

            
        }

    
    return (
        <div className="admin-details">
            <h4>FROM <strong>{courserequests.TUsername}</strong></h4>
        
            <p>Requesting access to <strong>{courserequests.CourseTitle}</strong></p>
            <p><strong>{courserequests.Role}</strong></p>
            <p>Sent {formatDistanceToNow(new Date(courserequests.createdAt), {addSuffix: true})}</p>
            {/* <p>Updated {formatDistanceToNow(new Date(pendinginstructors.updatedAt), {addSuffix: true})}</p> */}
            <span className="material-symbols-outlined" onClick={handleClickAccept}>how_to_reg</span>
            <div className="spannyyyy">
            <span className="material-symbols-outlined" onClick={handleClick}>block</span>
            </div>
        </div>
        
    )
}

export default CourseRequestsDetails