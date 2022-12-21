import { useInstructorsContext } from "../hooks/UseInstructorContext"


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const InstructorDetails = ({ instructors }) => {

    const {dispatch} = useInstructorsContext()
    
    const handleClick = async () =>  {
        const response = await fetch('/adminHome/delete/instructors/' +instructors._id,  {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_INSTRUCTOR', payload: json}) 
        }
        
    }

    
    return (
        <div className="admin-details">
            <h4>{instructors.Username}</h4>
            <p><strong>PASSWORD: </strong>{instructors.Password}</p>
            <p><strong>FIRST NAME: </strong>{instructors.First_Name}</p>
            <p><strong>LAST NAME: </strong>{instructors.Last_Name}</p>
            <p><strong>EMAIL: </strong>{instructors.Email}</p>
            <p><strong>GENDER: </strong>{instructors.Gender}</p>
            <p>Created {formatDistanceToNow(new Date(instructors.createdAt), {addSuffix: true})}</p>
            <p>Updated {formatDistanceToNow(new Date(instructors.updatedAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default InstructorDetails