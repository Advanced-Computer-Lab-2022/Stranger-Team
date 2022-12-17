
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from 'react'


const SingleReport = ({ irep }) => {

  const [drop, setdrop] = useState(false)

  function onSelect(){
       
       setdrop(!drop)
 }
  
return (
   
    <div className="admin-details">
     <h4><strong>{irep.Report_Title}</strong></h4>
     <h6>{irep.Role} <strong>{irep.Username}</strong></h6>
    <p>{irep.Reported_Problem}</p>
    <p className="material-symbols-outlined" onClick={onSelect}>expand_more</p>
         {drop &&

irep.Followups.map((q, i) => (
 <p  id={`q${i}-option`} visible="false">FOLLOW-UP {i+1}: <strong>{irep.Followups[i]}</strong></p>
                  ))
                 }
    <p>STATUS: <strong>{irep.Status}</strong></p>
   
    {/* <p>FOLLOWUP: <strong>{irep.Followups}</strong></p> */}
    <p>Sent {formatDistanceToNow(new Date(irep.createdAt), {addSuffix: true})}</p>
    <p>Updated {formatDistanceToNow(new Date(irep.updatedAt), {addSuffix: true})}</p> 
    <span className="material-icons-outlined">edit</span>
    {/* <p><strong>{irep.Report_Type}</strong></p> */}
    <span className="material-symbols-outlined">visibility</span>
  </div>
  
  )
}

export default SingleReport