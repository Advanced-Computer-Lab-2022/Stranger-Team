import { useState } from "react"

//hooks
import { useAdminsContext } from "../hooks/UseAdminContext";

const AdminForm = () => {
    const {dispatch} = useAdminsContext()
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async(e) => {
        e.preventDefault()
        const admin = {Username, Password}
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
            className={emptyFields.includes('Username') ? 'error':''}
            />

            <label>Password: </label>
            <input 
            type="text" 
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            className={emptyFields.includes('Password') ? 'error':''}
            />

            <button>Add admin</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default AdminForm