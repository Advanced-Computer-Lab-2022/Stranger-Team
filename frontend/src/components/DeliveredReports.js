import { useEffect, useState } from "react"
import AdminNavbar from "./AdminNavbar"

// components
import DeliveredReportsDetails from './DeliveredReportsDetails'

const DeliveredReportsPage = () => {
  const [deliveredReports, setdeliveredReports] = useState(null)

  useEffect(() => {
    const fetchDReports = async () => {
      const response = await fetch('/unseenReports')
      const json = await response.json()

      if (response.ok) {
        setdeliveredReports(json)
      }
    }

    fetchDReports()
  }, [])

  return (
    <div>
      <AdminNavbar/>
    <div className="home">
      <div className="admins">
      {/* {deliveredReports.length ==0 && <label>No new reports.</label>} */}
        {deliveredReports && deliveredReports.map(deliveredReports => (
          <DeliveredReportsDetails deliveredReports={deliveredReports} key={deliveredReports._id} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default DeliveredReportsPage