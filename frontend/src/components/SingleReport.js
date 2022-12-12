
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const SingleReport = ({ irep }) => {
return (
   
    <div className="admin-details">
    <h4>FROM <strong>{irep.Username}</strong></h4>
    <p>{irep.Reported_Problem}</p>
    <p>STATUS: <strong>{irep.Status}</strong></p>
    <p>Sent {formatDistanceToNow(new Date(irep.createdAt), {addSuffix: true})}</p>
    <p>Updated {formatDistanceToNow(new Date(irep.updatedAt), {addSuffix: true})}</p> 
    <span class="material-icons-outlined">edit</span>
    {/* <p><strong>{irep.Report_Type}</strong></p> */}
    <span className="material-symbols-outlined">visibility</span>
  </div>
  
  )
}

export default SingleReport