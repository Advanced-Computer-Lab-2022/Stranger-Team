    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'

    const InstructorEditProfile = () => {

    const [First_Name, setFirst_Name] = useState('')
    const [Last_Name, setLast_Name] = useState('')
    const [Email, setEmail] = useState('')
    const [Bio, setBio] = useState('')
	const[Error,setError]= useState('')

		const updateInstructorProfile = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const instructorId = queryParams.get('id');

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

        const response = await fetch(`/EditMyProfile/?id=${instructorId}`, {
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
        
        
        console.log('Instructor Updated:', json)
        }

    }


    return (

        <div class="container" >
<div class="row gutters">


<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">Edit Personal Details</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">First Name</label>
					<input type="text" class="form-control" id="fullName" placeholder="Enter the first name you wish to update" onChange={(e) => setFirst_Name(e.target.value)} value={First_Name}/>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Last Name</label>
					<input type="text" class="form-control" id="fullName" placeholder="Enter the last name you wish to update" onChange={(e) => setLast_Name(e.target.value)} value={Last_Name}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Email</label>
					<input type="email" class="form-control" id="eMail" placeholder="Enter the email address you wish to update" onChange={(e) => setEmail(e.target.value)} value={Email}/>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Bio</label>
					<input type="text" class="form-control" id="fullName" placeholder="Enter the bio you wish to update" onChange={(e) => setBio(e.target.value)} value={Bio}/>
				</div>
			</div>
			
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="text-right">
					<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
					<button type="button" id="submit" name="submit" class="btn btn-primary" height="30" onClick={updateInstructorProfile}>Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>

    )
    }

    export default InstructorEditProfile