

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorProfileDetails from "../components/InstructorProfileDetails";
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import TraineeProfileDetails from "../components/TraineeProfileDetails";
    import AdminNavbar from "../components/AdminNavbar";
    import AdminProfileDetails from "../components/AdminProfileDetails";


    const AdminProfilePage = () => {
    const [admin, setAdmin] = useState(null)
    
    useEffect(() => {
        const fetchAdmin = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const adminId = params.get('AdminId');
        console.log(adminId); 
        
        
        const response = await fetch(`/fetchAdminProfileDetails/?AdminId=${adminId}`)
        
        
        
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setAdmin([json])
        }
        }

        fetchAdmin()
    }, [])


    return (
        <Container >
            <AdminNavbar/>
        
        <form className="create"> 
        <div className="container">
        <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
            <div className="card-body">
                {admin && admin.map(admin => (
                <AdminProfileDetails admin={admin} key={admin._id} />
                ))[0]}
                
            </div>
        </div>
        </div>
        </div>
        </div>
        
        </form>
        </Container>
    )
    }

    export default AdminProfilePage