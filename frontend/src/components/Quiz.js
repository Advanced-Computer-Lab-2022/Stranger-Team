import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion } from '../hooks/FetchQuestions';
import { MovePrevQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/SetResult';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { moveNextAction } from '../redux/question_reducer';
import StyleForQuiz from '../components/../styles/StyleForQuiz.css'
import MainForQuiz from '../components/../styles/MainForQuiz.css'

export default function Quiz() {
    

    const [check, setChecked] = useState(undefined)

   const result = useSelector(state => state.result.result);
   const state = useSelector(state => state);
    const {queue, trace} = useSelector(state => state.ques);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(result)
     })

    /** next button event handler */
    function onNext(){
        console.log("Next")
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());
           // console.log(trace)
            //console.log("onnext")
            /** insert a new result in the array.  */
            if(result.length <= trace){
               dispatch(PushAnswer(check))
               // console.log("result")
            }
        }
     
        /** reset the value of the checked variable */
       // setChecked(undefined)
    }

    /** Prev button event handler */
    function onPrev(){
        console.log("prev")
        if(trace > 0){
            /** decrease the trace value by one using MovePrevQuestion */
           dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check){
       // console.log(check)
        setChecked(check)
    }

    /** finished exam after the last question */
    if(result.length && result.length >= queue.length){
    
         const params = new URLSearchParams(window.location.search);
         const courseId = params.get('CourseId');
        // const traineeId = params.get('TraineeId');
        // const ctrainee = params.get('CorporateTraineeId');
         console.log(courseId); 
      
        // return <Navigate to={`/results/?CourseId=${courseId}&TraineeId=${traineeId}&CorporateTraineeId=${ctrainee}`} replace={true}></Navigate>



        return <Navigate to={`/results/?CourseId=${courseId}`} replace={true}></Navigate>
    }

  return (
    <div className={StyleForQuiz.container}>

        {/* display questions */}
        <Questions onChecked={onChecked} />

        <div className={StyleForQuiz.grid}>
            { trace > 0 ? <button className='reject1' onClick={onPrev}>Prev</button> : <div></div>}
            <button className='accept1' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}