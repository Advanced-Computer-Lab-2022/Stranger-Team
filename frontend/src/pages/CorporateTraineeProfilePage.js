
//REMOVED IDs' ===>>>>>>DONE

import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate,useLocation  } from "react-router-dom";

// components
import MyCourses from "../components/MyCourses"
import 'bootstrap/dist/css/bootstrap.min.css'

import{Button, Alert, Container} from 'react-bootstrap'
import ProfileNavBar from '../components/ProfileNavBar'
import InstructorProfileDetails from "../components/InstructorProfileDetails";
import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
import TraineeProfileDetails from "../components/TraineeProfileDetails";
import CorporateTraineeProfileNavBar from "../components/CorporateTraineeProfileNavBar";
import CorporateTraineeProfileDetails from "../components/CorporateTraineeProfileDetails";


const CorporateTraineeProfilePage = () => {
const [trainee, setTrainee] = useState(null)

useEffect(() => {
    const fetchTrainee = async () => {
    
    const params = new URLSearchParams(window.location.search);
   // const corporateTraineeId = params.get('CorporateTraineeId');
    //console.log(corporateTraineeId); 
    //?CorporateTraineeId=${corporateTraineeId}
    
    const response = await fetch('/fetchCorporateTraineeProfileDetails')
    
    
    
    const json = await response.json()
    console.log(response)
    console.log( json)

    if (response.ok) {
        setTrainee([json])
    }
    }

    fetchTrainee()
}, [])





    let navigate = useNavigate();
    const routeChange = () =>{ 
    const params = new URLSearchParams(window.location.search);
    //const instructorId = params.get('id');
    //console.log(instructorId); 
    //?id=${instructorId}
    let path = '/InstructorEditMyProfilePage'; 
    navigate(path);
}

return (
    // <Container >
    //     <CorporateTraineeProfileNavBar/>
    
    // <form className="create"> 
    // <div className="container">
    // <div className="row gutters">
    // <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    // <div className="card h-100">
    //     <div className="card-body">
    //         {trainee && trainee.map(trainee => (
    //         <CorporateTraineeProfileDetails trainee={trainee} key={trainee._id} />
    //         ))[0]}
            
    //     </div>
    // </div>
    // </div>
    // </div>
    // </div>
    // {/* <button className="create" onClick={routeChange}>Edit Profile</button> */}

    
    // </form>
    // </Container>
    ///-----------------------------------------------------------------------------------
    <>
        <CorporateTraineeProfileNavBar/>
        <Container style={{marginRight:'450px'}}>
        <form className="create"> 
        <div className="container" >
        <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100" style={{width:'800px',marginRight:'50px',marginLeft:'90px'}}>
            <div className="card-body"  >
                {trainee && trainee.map(trainee => (
                <CorporateTraineeProfileDetails trainee={trainee} key={trainee._id} />
                ))[0]}
                
            </div>
        </div>
        </div>
        </div>
        </div>
        </form>
        </Container>
        </>
)
}

export default CorporateTraineeProfilePage