import { Link } from 'react-router-dom'
import { useNavigate,useLocation  } from "react-router-dom";

const AdminNavbar = () => {
    let navigate = useNavigate();

    const routeChange = () =>{  
        const params = new URLSearchParams(window.location.search);
        const adminId = params.get('AdminId');
        let path = `/AdminEditMyProfilePage/?AdminId=${adminId}`; 
        navigate(path);
    }

    

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


        
        <h5 onClick={routeChange}>My Profile</h5>
        
    </div>
    </header>
    
)
}

export default AdminNavbar