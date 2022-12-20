import { useState } from "react"

//hooks
import { useInstructorsContext } from "../hooks/UseInstructorContext";

const InstructorForm = () => {
    const {dispatch} = useInstructorsContext()
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [First_Name, setFN] = useState('')
    const [Last_Name, setLN] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async(e) => {
        e.preventDefault()
        const instructor = {Username, Password, First_Name, Last_Name, Email, Gender}
        const response = await fetch('/adminHome/addInstructor', {
            method: 'POST',
            body: JSON.stringify(instructor),
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
            setFN('')
            setLN('')
            setEmail('')
            setGender('')
            setEmptyFields([])
            console.log("new instructor has been added.", json)
            dispatch({type: 'CREATE_INSTRUCTOR', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new instructor</h3>

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



            <label>First Name: </label>
            <input 
            type="text" 
            onChange={(e) => setFN(e.target.value)}
            value={First_Name}
            className={emptyFields.includes('First_Name') ? 'error':''}
            />

            <label>Last Name: </label>
            <input 
            type="text" 
            onChange={(e) => setLN(e.target.value)}
            value={Last_Name}
            className={emptyFields.includes('Last_Name') ? 'error':''}
            />

            <label>Email: </label>
            <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            className={emptyFields.includes('Email') ? 'error':''}
            />

            <label>Gender: </label>
            <input 
            type="text" 
            onChange={(e) => setGender(e.target.value)}
            value={Gender}
            className={emptyFields.includes('Gender') ? 'error':''}
            />

            <button>Add instructor</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default InstructorForm