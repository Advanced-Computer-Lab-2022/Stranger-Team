import { Link } from 'react-router-dom'

const AdminNavbar = () => {

return (
    <header>
    <div className="container">
        <Link to="/">
        <h1>LearnEd</h1>
        </Link>

        <Link to= "/reports">
        <h5>Reports</h5>
        </Link>

        <Link to= "/adminHome">
        <h5>Home</h5>
        </Link>
    </div>
    </header>
    
)
}

export default AdminNavbar