import { useEffect, useState } from "react";
import{useStripe,useElements} from "@stripe/react-stripe-js"
import { PaymentElement } from "@stripe/react-stripe-js";
import paymentStyles from "./paymentStyles.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message,setMessage] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if(!stripe || !elements)
    {
      return;
    }

    setisLoading(true);

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
    setisLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement/>
      <button disabled={isLoading} id={paymentStyles.submit}>
        <span id={paymentStyles.paymentbutton}>
          {isLoading ? <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="messsage">{message}</div>}
    </form>
  );
}
