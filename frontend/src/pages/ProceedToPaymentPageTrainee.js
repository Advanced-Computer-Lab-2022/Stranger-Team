    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import styles from '../components/Guest/styles.module.css';

//HANA
    const ProceedToPaymentPageTrainee = ({}) => {

    const[wallet,setWallet]=useState('');
    const[error,setError]= useState('');

    const fetchWalletDetails = async () => {
        
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        
        //?TraineeId=${traineeId}
        const response = await fetch(`/viewMyWalletBalance/`)
        const json = await response.json()
        setWallet(json);
        
        }
        fetchWalletDetails();

        const payForCourse = async () => {
        
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        const courseId = params.get('CourseId');
        
        //?TraineeId=${traineeId}&CourseId=${courseId}
        const response = await fetch(`/payByWalletBalance/`)
        const json = await response.json()
        if(response.ok)
        {
            setWallet(json);
            //&TraineeId=${traineeId}
            window.location.href=`/CurrentCoursePageTrainee/?CourseId=${courseId}`;
        }
        else
        {
            setError(json.error)
        }
        }
        let navigate = useNavigate();

        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        const courseId = params.get('CourseId');

        //TraineeId=${traineeId}&
        let path = `/Payment/?CourseId=${courseId}`; 
        navigate(path);
    }
        
        
    return (

        
        <>
        <TraineeProfileNavBar/>
        
        <form className="create" style={{marginTop:'20px',marginLeft:'10px'}}>
        

        <h4>Choose Payment Method </h4>

        <div className={styles.proceedToPayment} onClick={payForCourse}>
            <h4 ><strong>By Wallet Balance </strong></h4> 
            <p>Available Balance: {wallet}</p> 
        </div>

        <div className={styles.proceedToPayment} onClick={routeChange}>
            <h4><strong>Credit Card</strong></h4> 
        </div>

        {error && <div className="error">{error}</div>}
        </form>
        </>
    )
    }

    export default ProceedToPaymentPageTrainee