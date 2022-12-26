import {Link, useNavigate} from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

const RefundsPage = () => {
    return (
        <div className='home'>
             <AdminNavbar/>
            <h4>Welcome, Admin</h4>
            <div>
            <Link to="/pendingRefunds">
             <h5>Pending Refunds</h5>
            </Link>
            <Link to="/acceptedRefunds">
             <h5>Accepted Refunds</h5>
            </Link>
            <Link to="/rejectedRefunds">
             <h5>Rejected Refunds</h5>
            </Link>
            </div>
            
        </div>
    )
}

export default RefundsPage