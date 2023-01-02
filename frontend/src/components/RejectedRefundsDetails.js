//import { usePendingRefundsContext } from '../hooks/UsePendingRefunds'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const RejectedRefundsDetails = ({ rrefunds }) => {

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
            <h4>FROM <strong>{rrefunds.Username}</strong></h4>
            <p>Requesting refund of amount <strong>{rrefunds.Amount}</strong> from course <strong>{rrefunds.Title}</strong></p>
            <p><strong>Note:</strong>{rrefunds.Problem}</p>
            <p><strong>{rrefunds.Status}</strong></p>
            <p><strong>{rrefunds.Role}</strong></p>
            <p>Sent {formatDistanceToNow(new Date(rrefunds.createdAt), {addSuffix: true})}</p>
            {/* <p>Updated {formatDistanceToNow(new Date(pendinginstructors.updatedAt), {addSuffix: true})}</p> */}
        </div>
        
    )
}

export default RejectedRefundsDetails