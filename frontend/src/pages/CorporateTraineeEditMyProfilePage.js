    //REMOVED IDs' ===>>>>>DONE
    
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'
    import TraineeProfileNavBar from '../components/TraineeProfilNavBar';
    import CorporateTraineeProfileNavBar from '../components/CorporateTraineeProfileNavBar';
    import styles from "../components/Guest/styles.module.css"

    const CorporateTraineeEditMyProfilePage = () => {

    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
	const[error,setError]= useState('')

		const updateInstructorProfile = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        //const corporateTraineeId = queryParams.get('CorporateTraineeId');
        //console.log("corporateTraineeId"+corporateTraineeId)

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
        //?CorporateTraineeId=${corporateTraineeId}
        const response = await fetch('/editProfileDetails', {
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

        //?CorporateTraineeId=${corporateTraineeId}
        window.location='http://localhost:3000/CorporateTraineeProfilePage'

        console.log('trainee Updated:', json)



        }

    }


    return (

        // <div>
        // <CorporateTraineeProfileNavBar/>
        // <div className="course-details">
        // <form className="create" onSubmit={updateInstructorProfile}> 
        // <h3>Edit Profile Details:</h3>

        // <label>Username:</label>
        // <input 
        //     type="text" 
        //     onChange={(e) => setUsername(e.target.value)} value={Username}
        // />


        // <label>Email:</label>
        // <input 
        //     type="text" 
        //     onChange={(e) => setEmail(e.target.value)} value={Email}
        // />

        

        // <button>Update</button>
        
        // {error && <div className="error">{error}</div>} 
        // </form>
        // </div>

        // </div>

        //--------------------------------------------------------------------------------

        <div>
        <CorporateTraineeProfileNavBar/>
        <div className="course-details">
        <form className="create" onSubmit={updateInstructorProfile}> 
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

        

        <button className={styles.blueButton}>Update</button>
        
        {error && <div className="error">{error}</div>} 
        </form>
        </div>

        </div>
        

    )
    }

    export default CorporateTraineeEditMyProfilePage