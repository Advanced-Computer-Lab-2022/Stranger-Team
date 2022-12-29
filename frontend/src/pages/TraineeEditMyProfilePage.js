    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'
    import TraineeProfileNavBar from '../components/TraineeProfilNavBar';

    const TraineeEditMyProfilePage = () => {

    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
	const[error,setError]= useState('')

		const updateTraineeProfile = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        // const traineeId = queryParams.get('TraineeId');
        // console.log("TraineeId"+traineeId)

        var updatedTrainee = null;
		
        if(Username==null||Username=="")
        {
            if(Email==null||Email=="")
            {
                updatedTrainee={Username,Email};
            }
            else
            {
                updatedTrainee={Email};
            }
        }
        else
        {
            if(Email==null||Email=="")
            {
                updatedTrainee={Username};
            }
            else
            {
                updatedTrainee={Username,Email};
            }
        }
        
        // const response = await fetch(`/editProfileDetails/?TraineeId=${traineeId}`, {
        // method: 'POST',
        // body: JSON.stringify(updatedTrainee),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
        // })
        const response = await fetch(`/editProfileDetails`, {
        method: 'POST',
        body: JSON.stringify(updatedTrainee),
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
        setEmail('')
        
        
		//http://localhost:3000/MyProfile/?id=635ff82db9f20282ed560dae
        // window.location=`http://localhost:3000/TraineeProfilePage/?TraineeId=${traineeId}`
        window.location=`http://localhost:3000/TraineeProfilePage`

        console.log('trainee Updated:', json)



        }

    }


    return (

        <div>
        <TraineeProfileNavBar/>
        <div className="course-details">
        <form className="create" onSubmit={updateTraineeProfile}> 
        <h3>Edit Profile Details:</h3>

        <label>Username:</label>
        <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)} value={Username}
        />


        <label>Email:</label>
        <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)} value={Email}
        />

        

        <button>Update</button>
        
        {error && <div className="error">{error}</div>} 
        </form>
        </div>

        </div>
        

    )
    }

    export default TraineeEditMyProfilePage