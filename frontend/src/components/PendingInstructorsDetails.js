    import { usePendingInstructorsContext } from "../hooks/UsePendingInstructorContext"


    //date fns
    import formatDistanceToNow from 'date-fns/formatDistanceToNow'

    const PendingInstructorsDetails = ({ pendinginstructors }) => {

        const {dispatch} = usePendingInstructorsContext()
        
        const handleClick = async () =>  {
            const response = await fetch('/adminHome/pendingInstructors/' +pendinginstructors._id,  {
                method: 'DELETE'
            })

            const json = await response.json()

            if (response.ok) {
                dispatch({type:'DELETE_PENDING_INSTRUCTOR', payload: json}) 
            }
            
        }


        const handleClickAccept = async () => {
                const response1 = await fetch('/acceptPendingInstructor/'+pendinginstructors._id, {
                    method:'POST'
                })

                const response = await fetch('/adminHome/pendingInstructors/' +pendinginstructors._id,  {
                    method: 'DELETE'
                })

            // const json1 = await response1.json()
                const json = await response.json()

                if(response1.ok) {
                    

                if (response.ok) {
                        dispatch({type:'DELETE_PENDING_INSTRUCTOR', payload: json}) 
                }

                }

                
            }

        
        return (
            <div className="admin-details">
                <h4>{pendinginstructors.Username}</h4>
            
                <p><strong>PASSWORD: </strong>{pendinginstructors.Password}</p>
                <p><strong>FIRST NAME: </strong>{pendinginstructors.First_Name}</p>
                <p><strong>LAST NAME: </strong>{pendinginstructors.Last_Name}</p>
                <p><strong>EMAIL: </strong>{pendinginstructors.Email}</p>
                <p><strong>GENDER: </strong>{pendinginstructors.Gender}</p>
                <p>Sent {formatDistanceToNow(new Date(pendinginstructors.createdAt), {addSuffix: true})}</p>
                {/* <p>Updated {formatDistanceToNow(new Date(pendinginstructors.updatedAt), {addSuffix: true})}</p> */}
                <span className="material-symbols-outlined" onClick={handleClickAccept}>add</span>
                <div className="spanny">
                <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
                </div>
            </div>
            
        )
    }

    export default PendingInstructorsDetails