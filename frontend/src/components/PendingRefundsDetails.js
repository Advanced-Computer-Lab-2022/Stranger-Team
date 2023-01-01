//import { usePendingRefundsContext } from '../hooks/UsePendingRefunds'

//import { usePRContext } from '../hooks/UsePRContext'
//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useNavigate } from 'react-router-dom';

//import { useNavigate } from 'react-router-dom'

const PendingRefundsDetails = ({ prefunds }) => {
    let navigate = useNavigate();
        const routeChange = () =>{ 
       // const params = new URLSearchParams(window.location.search);
       const refID = prefunds._id
        //console.log(RID); 
        let path = `/refund/?refId=${refID}`; 
        navigate(path);
    }
 //   const {dispatch} = usePRContext()
    
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
//             const response = await fetch('/acceptRefund/' +prefunds._id, {
//                 method:'PUT'
//             })

//             window.location = "/pendingRefunds"
//             // const json = await response.json()

//             // if (response.ok) {
//             //     dispatch({type:'CREATE_PREFUNDS', payload: json}) 
//             // }
           
//         }

// const handleClickReject = async () => {
//     const response = await fetch('/rejectRefund/' +prefunds._id,  {
//         method: 'PUT'
//     })
    
//     window.location = "/pendingRefunds"
//    // navigate("/rejectedRefunds")
// }

           

            
        

    
    return (
        // <div className="admin-details">
        //     <h4>FROM <strong>{prefunds.Username}</strong></h4>
        //     <p>Requesting refund of amount <strong>{prefunds.Amount}</strong> from course <strong>{prefunds.Title}</strong></p>
        //     <p><strong>Note:</strong>{prefunds.Problem}</p>
        //     <p><strong>{prefunds.Status}</strong></p>
        //     <p><strong>{prefunds.Role}</strong></p>
        //     <p>Sent {formatDistanceToNow(new Date(prefunds.createdAt), {addSuffix: true})}</p>
        //     {/* <p>Updated {formatDistanceToNow(new Date(pendinginstructors.updatedAt), {addSuffix: true})}</p> */}
        //     <span className="material-symbols-outlined" onClick={handleClickAccept}>how_to_reg</span>
        //     <div className="spannyyyy">
        //     <span className="material-symbols-outlined" onClick={handleClickReject}>block</span>
        //     </div>
        // </div>


        <div className="admin-details" onClick={routeChange}>
        <h4>From <strong>{prefunds.Username}</strong></h4>
        <p>Requesting refund from course <strong>{prefunds.Title}</strong></p>
        <p><strong>{prefunds.Status}</strong></p>
        <p><strong>{prefunds.Role}</strong></p>
        <p>Sent {formatDistanceToNow(new Date(prefunds.createdAt), {addSuffix: true})}</p>
      
    </div>
        
    )
}

export default PendingRefundsDetails