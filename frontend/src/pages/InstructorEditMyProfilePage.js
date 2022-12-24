    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'
	import ProfileNavBar from '../components/ProfileNavBar'

    const InstructorEditMyProfilePage = () => {

    const [First_Name, setFirst_Name] = useState('')
    const [Last_Name, setLast_Name] = useState('')
    const [Email, setEmail] = useState('')
    const [Bio, setBio] = useState('')
	const[error,setError]= useState('')

		const updateInstructorProfile = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const instrcutorId = queryParams.get('id');
        console.log("instrcutorId"+instrcutorId)

        var updatedInstructor = null;
		if(First_Name==null||First_Name=="")
		{
			if(Last_Name==null||Last_Name=="")
			{
				if(Email==null||Email=="")
				{
					if(Bio==null||Bio=="")
					{

					}
					else
					{
						updatedInstructor = {Bio};
						console.log(updatedInstructor)

					}
				}
				else
				{
					if(Bio==null||Bio=="")
					{
						updatedInstructor = {Email};
						console.log(updatedInstructor)
					}
					else
					{
						updatedInstructor = {Email,Bio};
						console.log(updatedInstructor)
					}
				}
			}
			else
			{
				if(Email==null||Email=="")
				{
					if(Bio==null||Bio=="")
					{
						updatedInstructor = {Last_Name};
						console.log(updatedInstructor)
					}
					else
					{
						updatedInstructor = {Last_Name,Bio};
						console.log(updatedInstructor)
					}
				}
				else
				{
					if(Bio==null||Bio=="")
					{
						updatedInstructor = {Last_Name,Email};
						console.log(updatedInstructor)
					}
					else
					{
						updatedInstructor = {Last_Name,Email,Bio};
						console.log(updatedInstructor)
					}
				}
			}
		}
		else
		{
			if(Last_Name==null||Last_Name=="")
			{
				if(Email==null||Email=="")
				{
					if(Bio==null||Bio=="")
					{
						updatedInstructor = {First_Name};
						console.log(updatedInstructor)
					}
					else
					{
						updatedInstructor = {First_Name,Bio};
						console.log(updatedInstructor)
					}
				}
				else
				{
					if(Bio==null||Bio=="")
					{
						updatedInstructor = {First_Name,Email};
						console.log(updatedInstructor)
					}
					else
					{
						updatedInstructor = {First_Name,Email,Bio};
						console.log(updatedInstructor)
					}
				}
			}
			else
			{
				if(Email==null||Email=="")
				{
					if(Bio==null||Bio=="")
					{
						updatedInstructor = {First_Name,Last_Name};
						console.log(updatedInstructor)
					}
					else
					{
						updatedInstructor = {First_Name,Last_Name,Bio};
						console.log(updatedInstructor)
					}
				}
				else
				{
					if(Bio==null||Bio=="")
					{
						updatedInstructor = {First_Name,Last_Name,Email};
						console.log(updatedInstructor)
					}
					else
					{
						updatedInstructor = {First_Name,Last_Name,Email,Bio};
						console.log(updatedInstructor)
					}
				}
			}
		}
        
        const response = await fetch(`/EditMyProfile/?id=${instrcutorId}`, {
        method: 'POST',
        body: JSON.stringify(updatedInstructor),
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
		setFirst_Name('')
        setLast_Name('')
        setEmail('')
        setBio('')
        
		//http://localhost:3000/MyProfile/?id=635ff82db9f20282ed560dae
        window.location=`http://localhost:3000/MyProfile/?id=${instrcutorId}`

        console.log('Instructor Updated:', json)



        }

    }


    return (

        
        <div className="course-details">
			<ProfileNavBar/>
        <form className="create" onSubmit={updateInstructorProfile}> 
        <h3>Edit Profile Details:</h3>

        <label> First Name:</label>
        <input 
            type="text" 
            onChange={(e) => setFirst_Name(e.target.value)} value={First_Name}
        />

        <label> Last Name:</label>
        <input 
            type="text" 
            onChange={(e) => setLast_Name(e.target.value)} value={Last_Name}
        />


        <label>Email:</label>
        <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)} value={Email}
        />

        <label>Bio:</label>
        <input 
            type="text" 
            onChange={(e) => setBio(e.target.value)} value={Bio}
        />

        <button>Update</button>
        {error && <div className="error">{error}</div>}
        </form>
        </div>
        

    )
    }

    export default InstructorEditMyProfilePage