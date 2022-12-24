    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'
    import TraineeProfileNavBar from '../components/TraineeProfilNavBar';
import AdminNavbar from '../components/AdminNavbar';

    const AdminEditMyProfilePage = () => {

    const [Username, setUsername] = useState('')
	const[error,setError]= useState('')

		const updateAdminProfile = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const adminId = queryParams.get('AdminId');
        console.log("adminId"+adminId)

        var updatedAdmin = {Username};
        
        const response = await fetch(`/editProfileDetails/?AdminId=${adminId}`, {
        method: 'POST',
        body: JSON.stringify(updatedAdmin),
        headers: {
            'Content-Type': 'application/json'
        }
        })

        const json = await response.json()
        console.log(response)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        setError(null)
		setUsername('')
        
        
		//http://localhost:3000/MyProfile/?id=635ff82db9f20282ed560dae
        window.location=`http://localhost:3000/AdminProfilePage/?AdminId=${adminId}`

        console.log('admin Updated:', json)



        }

    }


    return (

        <div>
        <AdminNavbar/>
        <div className="course-details">
        <form className="create" onSubmit={updateAdminProfile}> 
        <h3>Edit Profile Details:</h3>

        <label>Username:</label>
        <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)} value={Username}
        />
        

        <button>Update</button>
        
        {error && <div className="error">{error}</div>} 
        </form>
        </div>

        </div>
        

    )
    }

    export default AdminEditMyProfilePage