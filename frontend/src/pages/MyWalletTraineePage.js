    //sessions done
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import styles from "../components/Guest/styles.module.css"


    const MyWalletTraineePage = ({ course }) => {
        

        let navigate = useNavigate();
        const[wallet,setWallet]=useState('');

    const fetchWalletDetails = async () => {
        
        const params = new URLSearchParams(window.location.search);
        //const traineeId = params.get('TraineeId');
        
        
        // const response = await fetch(`/viewMyWalletBalance/?TraineeId=${traineeId}`)

        const response = await fetch(`/viewMyWalletBalance`)

        
        
        
        const json = await response.json()
        
            setWallet(json);
        
        
        
        }
        fetchWalletDetails();
        
    return (


        // <div>
        //     <TraineeProfileNavBar/>
        // <div className="course-details">
        // <h4>My Wallet Balance:</h4>
        // <p>{wallet}</p> 
        
        // </div>
        // </div>
        //-----------------------------------
        <>
        <TraineeProfileNavBar/>
        
        <form className="create" style={{marginTop:'20px',marginLeft:'10px'}}>
        

        <h4>My Wallet Balance:</h4>

        <div className={styles.proceedToPayment}>
            <p>{wallet}</p> 
        </div>

        {/* {error && <div className="error">{error}</div>} */}
        </form>
        </>
    )
    }

    export default MyWalletTraineePage