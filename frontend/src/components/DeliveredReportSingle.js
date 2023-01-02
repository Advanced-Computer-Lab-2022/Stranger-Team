import { useEffect, useState } from "react"
import SingleReport from "./SingleReport"
import AdminNavbar from "./AdminNavbar"


const DeliveredReportSingle = () => {


    const [irep, setirep] = useState(null)


useEffect(() => {
    const fetchDReport = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const repId = queryParams.get('RID');
      //  console.log(repId)
     
       const response = await fetch(`/viewReport/?RID=${repId}`)
       
       const json = await response.json()
      // const response0 = await fetch(`/updatePending/?RID=${repId}`)
      // const json0 = await response.json()

      if (response.ok) {
        setirep(json)
        console.log(irep)
        const response0 = await fetch(`/updatePending/?RID=${repId}`, {
          method: 'PUT'
      })
        //console.log("hereeee")
        
        //const json0 = await response0.json()
       // console.log(json0)
        
      }
    }

    fetchDReport()
  }, [])


return ( 
  <div>
    <AdminNavbar/>
    <div className="home">
        <div className="admins">
            {irep && irep.map((irep) => (
                <SingleReport key={irep._id} irep={irep}/>
            ))}
        </div>
        </div>
        </div>
)


            }

export default DeliveredReportSingle