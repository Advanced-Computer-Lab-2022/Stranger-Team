import {Link, useNavigate} from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

const ReportsPage = () => {
    return (
        <div className='home'>
             <AdminNavbar/>
            <h4>Welcome, Admin</h4>
            <div className="btn">
            <Link to="/deliveredReports">
             <button className='btn'>Unopened Reports</button>
            </Link>
            <Link to="/seenReports">
             <button className='btn'>Opened Reports</button>
            </Link>
            </div>
            
        </div>
    )
}

export default ReportsPage