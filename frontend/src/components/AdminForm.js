import { useState } from "react"

//hooks
import { useAdminsContext } from "../hooks/UseAdminContext";

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
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new admin</h3>

            <label>Username: </label>
            <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
            required
            />

            <label>Password: </label>
            <input 
            type="text" 
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            required
            />
            <label>Confirm Password: </label>
            <input 
            type="text" 
            onChange={(e) => setconfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            />

            <button>Add admin</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default AdminForm