import { useState } from "react"

//import UpdateStatus from "./UpdateStatus"


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const SingleSeenReport = ({ irep }) => {


    const [statusChange, setstatusChange] = useState(false)
    const [Status, setStatus] = useState('')
    const [adminReschange, setadminResChange] = useState(false)
    const [Admin_Response, setAdmin_Response] = useState('')
    const [error, setError] = useState(null)
    const [error1, setError1] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [emptyFieldz, setEmptyFieldz] = useState([])
    const [drop, setdrop] = useState(false)
   

 const handleSubmit = async (e) =>  {
    e.preventDefault()
    const stat = {Status}
    const queryParams = new URLSearchParams(window.location.search);
    const repId = queryParams.get('RID');
    const response = await fetch(`/manualStatus/?RID=${repId}`,  {
        method: 'PUT',
        body: JSON.stringify(stat),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
        console.log(json)

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
            
        }

        if (response.ok) {
            setError(null)
            setEmptyFields([])
            setStatus('')
            console.log("Status have been updated!", json)
            
        }

        setstatusChange(false)
        }

       
        const handleOnClick = async(e) => {
            e.preventDefault()
            const a = {Admin_Response}
            console.log(a)
            const queryParams = new URLSearchParams(window.location.search);
            const repId = queryParams.get('RID');
            const response = await fetch(`/adminRes/?RID=${repId}`, {
                method: 'PUT',
                body: JSON.stringify(a),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json1 = await response.json()
        console.log(json1)

        if(!response.ok) {
            setError1(json1.error1)
            setEmptyFieldz(json1.emptyFieldz)
            
        }

        if (response.ok) {
            setError1(null)
            setEmptyFieldz([])
            console.log(emptyFieldz)
            setAdmin_Response('')
            console.log("Response sent!", json1)
            
        }

        setadminResChange(false)
        }


        
    function onSelect(){
         
        setdrop(!drop)
  }

    return (
        
            
        <div className="admin-details">
        <h4><strong>{irep.Report_Title}</strong></h4>
     <h6>{irep.Role} <strong>{irep.Username}</strong></h6>
        <p>{irep.Reported_Problem}</p>
        <div className="spanni">
        {!statusChange && <span className="material-symbols-outlined" onClick={() => setstatusChange(!statusChange)} >edit</span>}
             </div>
             {statusChange && <div className="admin-details">
        <p>
             <label>Status:</label>
             <select id="RID" name="Status" onChange={(e) => setStatus(e.target.value)}
            value={Status}>
             <option value=""></option>
             <option value="Resolved">Resolved</option>
             <option value="Pending">Pending</option>
             className={emptyFields.includes('Status') ? 'error':''}
             </select> 
             </p>
             <p className="drp">
             <input type="submit" onClick={handleSubmit}/>
             </p>
             </div>}
             {error && <div className="error">{error}</div>}
             {/* <label><strong>Follow-ups</strong></label> */}
             <p className="material-symbols-outlined" onClick={onSelect}>expand_more</p>
         {drop &&

irep.Followups.map((q, i) => (
 <p  id={`q${i}-option`} visible="false">FOLLOW-UP {i+1}: <strong>{irep.Followups[i]}</strong></p>
                  ))
                 }
         {/* {!statusChange && <p>STATUS: <strong>{irep.Status}</strong> </p> } */}
        
        <p><strong>{irep.Report_Type}</strong></p>
        <div className="nonspanny">
        <span className="material-symbols-outlined">visibility</span>
        </div>
        <div className="drpp">
        {!adminReschange && <span className="material-symbols-outlined" onClick={() => setadminResChange(!adminReschange)}>question_answer</span>}
        </div>
        {adminReschange && 
        <p>
        <label>Response: </label>
            <input 
            type="text" 
            onChange={(e) => setAdmin_Response(e.target.value)}
            value={Admin_Response}
            className={emptyFieldz.includes('Admin_Response') ? 'error':''}
            />
             <button onClick={handleOnClick}>Send</button>
            </p>}
            {error1 && <div className="error">{error1}</div>} 
            <p>Sent {formatDistanceToNow(new Date(irep.createdAt), {addSuffix: true})}</p>
            <p>Updated {formatDistanceToNow(new Date(irep.updatedAt), {addSuffix: true})}</p> 
      </div>
      
      )
    }


    
    export default SingleSeenReport