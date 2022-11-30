import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


/** Custom Hook */
import { useFetchQestion } from '../hooks/FetchQuestions'
import { updateResult } from '../hooks/SetResult'
import { updateResultAction } from '../redux/result_reducer'


export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.ques);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError}] = useFetchQestion() 
  
    const ques = useSelector(state => state.ques.queue[state.ques.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        console.log({trace, checked})
        dispatch(updateResult({trace, checked}))
    }, [checked])
    
    function onSelect(i){
       
       // dispatch(updateResult({trace, checked}))
       onChecked(i)
       setChecked(i)
    }


    if(isLoading) return <h3>Loading..</h3>
    if(serverError) return <h3>{serverError || "Unknown Error"}</h3>

  return (
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
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}