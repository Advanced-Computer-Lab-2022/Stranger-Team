//sessions done
import { useEffect, useState } from "react";
import{loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";
import TraineeProfileNavBar from "../../components/TraineeProfilNavBar";

function Payment(props) {
    const[stripePromise,setStripePromise]=useState(null);
    const[clientSecret,setClientSecret]=useState("");

    useEffect(()=> {
        fetch("/config").then(async(r)=>{
            const{publishableKey}= await r.json();
            console.log(publishableKey)
            setStripePromise(loadStripe(publishableKey));
        })

        



    },[])

    useEffect(()=> {
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const traineeId = params.get('TraineeId');
        fetch(`/create-payment-intent?CourseId=${courseId}`,{
            method:"POST",
            body:JSON.stringify({}),
        }).then(async(r)=>{
            const{clientSecret}= await r.json();

            setClientSecret(clientSecret);
            
        })

        



    },[])

    return (
        <>
        <TraineeProfileNavBar/>
        <h1>Please Fill In The Following Fields To Pay For The Course</h1>
        {stripePromise && clientSecret &&(

        <Elements stripe={stripePromise} options={{clientSecret}}>
        <CheckoutForm/>
        </Elements>

        )}
        
        
        </>
    );
}

export default Payment;
