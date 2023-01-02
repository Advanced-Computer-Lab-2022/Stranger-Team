
//sessions done
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


    const TraineeProfilePage = () => {
    const [trainee, setTrainee] = useState(null)
    
    useEffect(() => {
        const fetchTrainee = async () => {
        
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 
        
        
        // const response = await fetch(`/fetchTraineeProfileDetails/?TraineeId=${traineeId}`)
        const response = await fetch(`/fetchTraineeProfileDetails`)
        
        
        
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
    //     const routeChange = () =>{ 
    //     const params = new URLSearchParams(window.location.search);
    //     const instructorId = params.get('id');
    //     console.log(instructorId); 
    //     let path = `/InstructorEditMyProfilePage/?id=${instructorId}`; 
    //     navigate(path);
    // }

    return (

        <>
        <TraineeProfileNavBar/>
        <Container style={{marginRight:'450px'}}>
            
        
        <form className="create"> 
        <div className="container" >
        <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100" style={{width:'800px',marginRight:'50px'}}>
            <div className="card-body"  >
                {trainee && trainee.map(trainee => (
                <TraineeProfileDetails trainee={trainee} key={trainee._id} />
                ))[0]}
                
            </div>
        </div>
        </div>
        </div>
        </div>
        {/* <button className="create" onClick={routeChange}>Edit Profile</button> */}

        
        </form>
        </Container>
        </>
    )
    }

    export default TraineeProfilePage