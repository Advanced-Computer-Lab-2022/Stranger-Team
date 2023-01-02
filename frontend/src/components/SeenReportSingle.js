import { useEffect } from "react"
import SingleSeenReport from "./SingleSeenReport"

import AdminNavbar from "./AdminNavbar"

import {useSeenReportsContext} from '../hooks/useSeenReportsContext'


const SeenReportSingle = () => {

 const {irep, dispatch}  = useSeenReportsContext()
    //const [irep, setirep] = useState(null)


useEffect(() => {
    const fetchSReport = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const repId = queryParams.get('RID');
      //  console.log(repId)
     
       const response = await fetch(`/viewReport/?RID=${repId}`)
       
       const json = await response.json()
      // const response0 = await fetch(`/updatePending/?RID=${repId}`)
      // const json0 = await response.json()

      if (response.ok) {

        dispatch({type: 'SET_REPORTS', payload: json})
       // setirep(json)
    //     const response0 = await fetch(`/updatePending/?RID=${repId}`, {
    //       method: 'PUT'
    //   })
        //console.log("hereeee")
        
        //const json0 = await response0.json()
       // console.log(json0)
        
      }
    }

    fetchSReport()
  }, [dispatch])


return ( 
  <div>
    <AdminNavbar/>
    <div className="home">
        <div className="admins">
            {irep && irep.map((irep) => (
                <SingleSeenReport key={irep._id} irep={irep}/>
            ))}
        </div>
        </div>
        </div>
)


            }

export default SeenReportSingle