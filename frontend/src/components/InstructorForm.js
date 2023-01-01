import { useState } from "react"

//hooks
import { useInstructorsContext } from "../hooks/UseInstructorContext";
import Container from "react-bootstrap/esm/Container";


const InstructorForm = () => {
    const {dispatch} = useInstructorsContext()
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [First_Name, setFN] = useState('')
    const [Last_Name, setLN] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async(e) => {
        e.preventDefault()
        const instructor = {Username, Password,confirmPassword, First_Name, Last_Name, Email, Gender}
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
            setconfirmPassword('')
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
        <form className="create" onSubmit={handleSubmit} style={{position:'absolute',paddingLeft:'1500px',paddingTop:'30px'}}>
          <h3><strong>Add a new Instructor</strong></h3>

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

<br></br>
            <label><strong>First Name</strong></label>
            <input 
            type="text" 
            onChange={(e) => setFN(e.target.value)}
            value={First_Name}
            required
            />
<br></br>
            <label><strong>Last Name</strong></label>
            <input 
            type="text" 
            onChange={(e) => setLN(e.target.value)}
            value={Last_Name}
            required
            />
<br></br>
            <label><strong>Email</strong></label>
            <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            required
            />
<br></br>

<label><strong>Gender</strong></label>
            <select onChange={(e) => setGender(e.target.value)} value={Gender} required class="form-control" style={{width: "200px", height:"40px"}}>
                <option></option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                </select>

<div>
        <button className="button-40" role="button"><span class="text">Add Instructor</span></button></div>
            {error && <div className="error1">{error}</div>}

        </form>
    )
}

export default InstructorForm