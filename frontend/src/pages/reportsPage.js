import {Link, useNavigate} from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

const ReportsPage = () => {
    return (
        <div className='home'>
             <AdminNavbar/>
             <h4>Welcome, Admin</h4>
            <div>
            <Link to="/deliveredReports">
             <h5>Unopened Reports</h5>
            </Link>
            <Link to="/seenReports">
             <h5>Opened Reports</h5>
            </Link>
            </div>
            
        </div>
    )
}

export default ReportsPage