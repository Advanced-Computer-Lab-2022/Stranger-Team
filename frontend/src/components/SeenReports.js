import { useEffect, useState } from "react"
import AdminNavbar from "./AdminNavbar"

// components
import SeenReportsDetails from './SeenReportsDetails'

const SeenReportsPage = () => {
  const [seenReports, setseenReports] = useState(null)

  useEffect(() => {
    const fetchSReports = async () => {
      const response = await fetch('/seenReports')
      const json = await response.json()

      if (response.ok) {
        setseenReports(json)
      }
    }

    fetchSReports()
  }, [])

  return (
    <div>
      <AdminNavbar/>
    <div className="home">
      <div className="admins">
        {seenReports && seenReports.map(seenReports => (
          <SeenReportsDetails seenReports={seenReports} key={seenReports._id} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default SeenReportsPage