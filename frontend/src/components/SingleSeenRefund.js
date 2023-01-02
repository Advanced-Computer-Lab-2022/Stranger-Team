import { useState } from "react"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useNavigate } from "react-router-dom"


const SingleSeenRefund = ({ prefunds }) => {
    //   const {dispatch} = usePRContext()

    const [done, setDone] = useState(false)


    const handleClickAccept = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const repId = queryParams.get('refId');
        const response = await fetch(`/acceptRefund/?refId=${repId}`, {
            method: 'PUT'
        })

           setDone(true)
           
        }

const handleClickReject = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const repId = queryParams.get('refId');
    const response = await fetch(`/rejectRefund/?refId=${repId}`, {
        method: 'PUT'
    })

       setDone(true)
       
}

           
let navigate = useNavigate();
const routeChange = () =>{ 
navigate('/pendingRefunds');
}
            
        

    
return (
    <div className="admin-details">
        <h4>FROM <strong>{prefunds.Username}</strong></h4>
        <p>Requesting refund of amount <strong>{prefunds.Amount}</strong> from course <strong>{prefunds.Title}</strong></p>
        <p><strong>Note:</strong>{prefunds.Problem}</p>
        {/* <p><strong>{prefunds.Status}</strong></p> */}
        <p><strong>{prefunds.Role}</strong></p>
        <p>Sent {formatDistanceToNow(new Date(prefunds.createdAt), {addSuffix: true})}</p>
        {/* <p>Updated {formatDistanceToNow(new Date(pendinginstructors.updatedAt), {addSuffix: true})}</p> */}
    {!done &&  <span className="material-symbols-outlined" onClick={handleClickAccept}>done</span> }
    {!done && <div className="spannyyyy">
        <span className="material-symbols-outlined" onClick={handleClickReject}>block</span>
        </div>  }

        {done && <button onClick={routeChange}>Done</button>}
    </div>
)
}

export default SingleSeenRefund