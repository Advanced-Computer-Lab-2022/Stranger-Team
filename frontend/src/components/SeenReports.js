import { useEffect, useState } from "react"
import AdminNavbar from "./AdminNavbar"

// components
import SeenReportsDetails from './SeenReportsDetails'
import SeenPendingDetails from "./seenPendingDetails"
import SeenResolvedDetails from "./SeenResolvedDetails"
import Container from "react-bootstrap/esm/Container"

const SeenReportsPage = () => {
  const [seenReports, setseenReports] = useState(null)
  const [resolvedReports, setResolvedReports] = useState(null)
  const [pendingReports, setPendingReports] = useState(null)
  const [pending, setPending] = useState(false)
  const [resolved, setResolved] = useState(false)
  const [all, setAll] = useState(true)


  useEffect(() => {
    const fetchSReports = async () => {
      const response = await fetch('/seenReports')
      const json = await response.json()

      if (response.ok) {
        setseenReports(json)
        setPending(false)
        setResolved(false)
      }
    }

    fetchSReports()
  }, [])



  const fetchAll = async () => {
    const response = await fetch('/seenReports')
    const json = await response.json()

    if (response.ok) {
      setseenReports(json)
      setPending(false)
      setResolved(false)
      setAll(true)
    }
  }
  

  const fetchPending = async () => {
    const response = await fetch('/pendingReports')
    const json = await response.json()

    if (response.ok) {
      setPendingReports(json)
      setAll(false)
      setResolved(false)
      setPending(true)
    }
  }


  const fetchResolved = async () => {
    const response = await fetch('/resolvedReports')
    const json = await response.json()

    if (response.ok) {
      setResolvedReports(json)
      setAll(false)
      setPending(false)
      setResolved(true)
    }
  }
  

  return (
    <div>
      <AdminNavbar/>
      <Container style={{top:"0px", right:"365px", display: "flex", gap: "30px"}}>
      <button class="button-48" role="button"onClick={fetchPending}><span class="text">Pending</span></button> 
      <button class="button-48" role="button"onClick={fetchResolved}><span class="text">Resolved</span></button> 
      <button class="button-48" role="button"onClick={fetchAll}><span class="text">All</span></button> 
         </Container>
      
    <div className="home">
      <div className="admins">
        {all && seenReports && seenReports.map(seenReports => (
          <SeenReportsDetails seenReports={seenReports} key={seenReports._id} />
        ))}


{pending && pendingReports && pendingReports.map(pendingReports => (
          <SeenPendingDetails pendingReports={pendingReports} key={pendingReports._id} />
        ))}


{resolved && resolved && resolvedReports.map(resolvedReports => (
          <SeenResolvedDetails resolvedReports={resolvedReports} key={resolvedReports._id} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default SeenReportsPage