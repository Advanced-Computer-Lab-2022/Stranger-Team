import { useState } from "react"

//hooks
import { useCorporateTraineesContext } from "../hooks/UseCorporateTraineeContext";


const CorporateTraineeForm = () => {
    const {dispatch} = useCorporateTraineesContext()
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [First_Name, setFN] = useState('')
    const [Last_Name, setLN] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [Corporate, setCorporate] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async(e) => {
        e.preventDefault()
        const ct = {Username, Password, First_Name, Last_Name, Email, Gender, Corporate}
        const response = await fetch('/adminHome/addCorporateTrainee', {
            method: 'POST',
            body: JSON.stringify(ct),
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
            setCorporate('')
            setEmptyFields([])
            console.log("new CT has been added.", json)
            dispatch({type: 'CREATE_CORPORATE_TRAINEE', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Corporate Trainee</h3>

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


            <label>Corporate name: </label>
            <input 
            type="text" 
            onChange={(e) => setCorporate(e.target.value)}
            value={Corporate}
            className={emptyFields.includes('Corporate') ? 'error':''}
            />

            <button>Add Corporate Trainee</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default CorporateTraineeForm