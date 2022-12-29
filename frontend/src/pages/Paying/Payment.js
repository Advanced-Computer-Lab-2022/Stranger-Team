import { useEffect, useState } from "react";
import{loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";
import TraineeProfileNavBar from "../../components/TraineeProfilNavBar";

function Payment(props) {
    //const{stripePromise}=props;
    const stripePublicKey = '<my test public key>';
    const[stripePromise,setStripePromise]=useState(null);
    const[clientSecret,setClientSecret]=useState("");

    useEffect(()=> {
        fetch("/config").then(async(r)=>{
            const{publishableKey}= await r.json();
            console.log(publishableKey)
            setStripePromise(loadStripe(publishableKey));
            
        })  

    },[])

    if (!stripePublicKey) {
        return null;
      }

    useEffect(()=> {
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const traineeId = params.get('TraineeId');
        fetch(`/create-payment?CourseId=${courseId}&TraineeId=${traineeId}`,{
            method:"POST",
            body:JSON.stringify({}),
        }).then(async(error)=>{
            const{clientSecret}= await error.json();

            setClientSecret(clientSecret);
            
        })

    },[])

    return (
        <>
        <TraineeProfileNavBar/>
        <h4>Enter credit card details</h4>
        {stripePromise && clientSecret &&(

        <Elements stripe={stripePromise} options={{clientSecret}}>
        <CheckoutForm/>
        </Elements>

        )}
        
        
        </>
    );
}

export default Payment;
