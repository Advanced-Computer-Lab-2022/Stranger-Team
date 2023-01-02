import { useEffect } from "react"


import AdminNavbar from "./AdminNavbar"
import { useState } from "react"
import SingleSeenRefund from "./SingleSeenRefund"
import { usePRContext } from "../hooks/UsePRContext";


const SingleRefund = () => {

     const [prefunds, setprefunds] = useState(null)
   // const {prefunds, dispatch} = usePRContext()


useEffect(() => {
    const fetchDReport = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const repId = queryParams.get('refId');
     
       const response = await fetch(`/refund?refId=${repId}`)
       
       const json = await response.json()
       console.log(json)
       
      if (response.ok) {
        setprefunds([json])
        // dispatch({type: 'SET_PREFUNDS', payload: json})
        console.log("SET " + prefunds)
        
      }
    }

    fetchDReport()
  }, [])


return ( 
  <div>
    <AdminNavbar/>
    <div className="home">
        <div className="admins">
        {prefunds && prefunds.map(prefunds => (
        <SingleSeenRefund prefunds={prefunds} key={prefunds._id} />
                ))[0]}
        </div>
        </div>
        </div>
)

            }

export default SingleRefund