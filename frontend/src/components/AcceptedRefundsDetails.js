//import { usePendingRefundsContext } from '../hooks/UsePendingRefunds'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AcceptedRefundsDetails = ({ arefunds }) => {

   // const {dispatch} = usePendingRefundsContext()
    
    // const handleClick = async () =>  {
    //     const response = await fetch('/acceptRefund/' +refunds._id,  {
    //         method: 'PUT'
    //     })

    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({type:'DELETE_COURSE_REQUEST', payload: json}) 
    //     }
        
    // }


//     const handleClickAccept = async () => {
//             const response = await fetch('/acceptRefund/' +refunds._id, {
//                 method:'PUT'
//             })

//         }

// const handleClickReject = async () => {
//     const response = await fetch('/rejectRefund/' +refunds._id,  {
//         method: 'PUT'
//     })
// }

           

            
        

    
    return (
        <div className="admin-details">
            <h4>FROM <strong>{arefunds.Username}</strong></h4>
            <p>Requesting refund of amount <strong>{arefunds.Amount}</strong> from course <strong>{arefunds.Title}</strong></p>
            <p><strong>Note:</strong>{arefunds.Problem}</p>
            <p><strong>{arefunds.Status}</strong></p>
            <p><strong>{arefunds.Role}</strong></p>
            <p>Sent {formatDistanceToNow(new Date(arefunds.createdAt), {addSuffix: true})}</p>
            {/* <p>Updated {formatDistanceToNow(new Date(pendinginstructors.updatedAt), {addSuffix: true})}</p> */}
        </div>
        
    )
}

export default AcceptedRefundsDetails