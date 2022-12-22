    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    

    const MyWalletTraineePage = ({ course }) => {
        

        let navigate = useNavigate();
        const[wallet,setWallet]=useState('');

    const fetchWalletDetails = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        
        
        const response = await fetch(`/viewMyWalletBalance/?TraineeId=${traineeId}`)

        
        
        
        const json = await response.json()
        setWallet(json);
        
        }
        fetchWalletDetails();
        
    return (

        <div>
            <TraineeProfileNavBar/>
        <div className="course-details">
        <h4>My Wallet Balance:</h4>
        <p>{wallet}</p> 
        
        </div>
        </div>
    )
    }

    export default MyWalletTraineePage