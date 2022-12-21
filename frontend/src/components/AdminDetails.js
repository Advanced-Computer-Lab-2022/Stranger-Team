import { useAdminsContext } from "../hooks/UseAdminContext"


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AdminDetails = ({ admins }) => {

    const {dispatch} = useAdminsContext()
    
    const handleClick = async () =>  {
        const response = await fetch('/adminHome/delete/admins/' +admins._id,  {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_ADMIN', payload: json}) 
        }
        
    }

    
    return (
        <div className="admin-details">
            <h4>{admins.Username}</h4>
            {/* <p><strong>USERNAME:</strong>{admins.Username}</p> */}
            <p><strong>PASSWORD: </strong>{admins.Password}</p>
            <p>Created {formatDistanceToNow(new Date(admins.createdAt), {addSuffix: true})}</p>
            <p>Updated {formatDistanceToNow(new Date(admins.updatedAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default AdminDetails