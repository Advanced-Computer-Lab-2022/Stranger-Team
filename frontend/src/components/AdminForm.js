import { useState } from "react"
import Container from "react-bootstrap/esm/Container";

//hooks
import { useAdminsContext } from "../hooks/UseAdminContext";
import '../styles/admin.css'
import AdminNavbar from "./AdminNavbar"

const AdminForm = () => {
    const {dispatch} = useAdminsContext()
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async(e) => {
        e.preventDefault()
        const admin = {Username, Password,confirmPassword}
        const response = await fetch('/adminHome/addAdmin', {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        //console.log(json)

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setError(null)
            setUsername('')
            setPassword('')
            setconfirmPassword('')
            setEmptyFields([])
            console.log("new admin has been added.", json)
            dispatch({type: 'CREATE_ADMIN', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit} style={{position:'absolute',paddingLeft:'1500px'}}>
            <Container style={{right:"40px", bottom:"-60px"}}><h3><strong>Add a new admin</strong></h3></Container>

            <label><strong>Username</strong></label>
            <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
            required
            />
<br></br>
            <label><strong>Password</strong></label>
            <input 
            type="text" 
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            required
            />

<br></br>
            <label><strong>Confirm Password</strong></label>
            <input 
            type="text" 
            onChange={(e) => setconfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            />   
           
<div>
        <button className="button-40" role="button"><span class="text">Add Admin</span></button></div>
            {error && <div className="error1">{error}</div>}
            
        </form>
        
    )
}

export default AdminForm