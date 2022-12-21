import { useCorporateTraineesContext } from "../hooks/UseCorporateTraineeContext"


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CorporateTraineeDetails = ({ corporatetrainees }) => {

    const {dispatch} = useCorporateTraineesContext()
    
    const handleClick = async () =>  {
        const response = await fetch('/adminHome/delete/corporateTrainees/' +corporatetrainees._id,  {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_CORPORATE_TRAINEE', payload: json}) 
        }
        
    }

    
    return (
        <div className="admin-details">
            <h4>{corporatetrainees.Username}</h4>
            <p><strong>PASSWORD: </strong>{corporatetrainees.Password}</p>
            <p><strong>FIRST NAME: </strong>{corporatetrainees.First_Name}</p>
            <p><strong>LAST NAME: </strong>{corporatetrainees.Last_Name}</p>
            <p><strong>EMAIL: </strong>{corporatetrainees.Email}</p>
            <p><strong>GENDER: </strong>{corporatetrainees.Gender}</p>
            <p><strong>CORPORATE: </strong>{corporatetrainees.Corporate}</p>

            <p>Created {formatDistanceToNow(new Date(corporatetrainees.createdAt), {addSuffix: true})}</p>
            <p>Updated {formatDistanceToNow(new Date(corporatetrainees.updatedAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default CorporateTraineeDetails