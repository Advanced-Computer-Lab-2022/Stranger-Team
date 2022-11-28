import React from "react";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useFetchQestion } from "../hooks/FetchQuestions";
import { MoveNextQuestion } from "../hooks/FetchQuestions";
import { MovePrevQuestion } from "../hooks/FetchQuestions";
import { PushAnswer } from "../hooks/SetResult";
import { Navigate } from "react-router-dom";
//import { updateResultAction } from "../redux/result_reducer";
import { updateResult } from "../hooks/SetResult";





export default function Quiz() {
    
    const [{ isLoading, apiData, serverError}] = useFetchQestion()
   const ques = useSelector(state => state.ques.queue[state.ques.trace])
  // const state = useSelector(state => state)
   const result = useSelector(state => state.result.result)
   const {queue, trace} = useSelector(state => state.ques)
   const dispatch = useDispatch()
   const [check, setChecked] = useState(undefined)

 

   useEffect(() => {
    //console.log(result)
    dispatch(updateResult({trace, check}))
          // console.log(isLoading)
       // console.log(apiData)
      // console.log(queue.length)
     //console.log(trace)
    // console.log(serverError)
   }, [check])


   

   function onNext() {
    //update trace value by one
    // console.log("Next button was clicked.")
    // console.log(result)
   
    if (trace < queue.length) {
        //console.log(trace)
        //console.log(queue.length)
        dispatch(MoveNextQuestion())

        if (trace >= result.length) {
            // console.log(trace)
            // console.log(result)
            dispatch(PushAnswer(check))
        }
        
        
    }
   
   }

   function onPrev() {
    //downgrade trace value by 1
    // console.log("Prev button was clicked.")
    // console.log(result)
    if (trace > 0) {
        dispatch(MovePrevQuestion());
    }
    //console.log("Previous button was clicked.")
    
   }


   function onChecked(check) {
   // console.log(check)
    setChecked(check)
   }

   function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({trace, check}))
   
}




   if(isLoading) return <h3 className="text-light">Loading..</h3>
   if(serverError) return <h3 className="text-light">{serverError || "Unknown Error"}</h3>


   if(result.length && result.length >= queue.length) {
    return <Navigate to={'/results'} replace="true"></Navigate>
   }


   return (
    <div className='container'>
    <div className='questions'>
        <h2>{ques?.Q}</h2>

        <ul key={ques?.QNumber}>
            {
                ques?.Answers.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace]==i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
        <div className='grid'>
           { trace > 0 ?  <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
    </div>
  )
}