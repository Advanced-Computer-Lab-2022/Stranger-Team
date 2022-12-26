import { useEffect, useState } from "react";
import{useStripe,useElements} from "@stripe/react-stripe-js"
import { PaymentElement } from "@stripe/react-stripe-js";
import paymentStyles from "./paymentStyles.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if(!stripe || !elements)
    {
      return;
    }

    setIsProcessing(true);

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('CourseId');
    const traineeId = params.get('TraineeId');

    const response = await fetch(`/indiviualTraineeRegisterCourse/?TraineeId=${traineeId}&CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log(json)

    const{error} = await stripe.confirmPayment({
      elements,
      confirmParams:{
        return_url: `${window.location.origin}/CurrentCoursePageTrainee/?CourseId=${courseId}&TraineeId=${traineeId}`
      }
    })

    if(error)
    {
      setMessage(error.message);
    }

    setIsProcessing(false);

  };

  return (
    //id="payment-form"
    //id="submit"
    //id="button-text"
    <form id={paymentStyles.paymentform} onSubmit={handleSubmit}>
      <PaymentElement/>
      <button disabled={isProcessing} id={paymentStyles.submit}>
        <span id={paymentStyles.paymentbutton}>
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>

      {/* Show any error or success messages */}
      {message && <div id={paymentStyles.messsages}>{message}</div>}
    </form>
  );
}
