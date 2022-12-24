    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    

    const ProceedToPaymentPageTrainee = ({}) => {

    const[wallet,setWallet]=useState('');
    const[error,setError]= useState('');

    const fetchWalletDetails = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        
        
        const response = await fetch(`/viewMyWalletBalance/?TraineeId=${traineeId}`)

        
        
        
        const json = await response.json()
        setWallet(json);
        
        }
        fetchWalletDetails();

        const payForCourse = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        const courseId = params.get('CourseId');
        
        const response = await fetch(`/payByWalletBalance/?TraineeId=${traineeId}&CourseId=${courseId}`)

        
        
        
        const json = await response.json()
        if(response.ok)
        {
            setWallet(json);
            window.location.href=`/CurrentCoursePageTrainee/?CourseId=${courseId}&TraineeId=${traineeId}`;
        }
        else
        {
            setError(json.error)
        }
        
        
        }

        let navigate = useNavigate();

        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        const courseId = params.get('CourseId');
        let path = `/Payment/?TraineeId=${traineeId}&CourseId=${courseId}`; 
        navigate(path);
    }
        
        
    return (

        
        <div className="course-details">
        <TraineeProfileNavBar/>

        <h4>Please Choose How You Would Like To Proceed For Your Payement: </h4>

        <div className="course-details" onClick={payForCourse}>
            <p><strong>By Wallet Balance</strong></p> 
            <p><strong>Balance: </strong>{wallet}</p> 
        </div>

        <div className="course-details" onClick={routeChange}>
            <p><strong>By Visa </strong></p> 
        </div>

        {error && <div className="error">{error}</div>}
        </div>
    )
    }

    export default ProceedToPaymentPageTrainee