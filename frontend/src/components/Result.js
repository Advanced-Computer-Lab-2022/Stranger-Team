import React, { useEffect } from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom';
import { earnPoints_Number,flagResult } from '../helper/helper';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';

import { resetResultAction } from '../redux/result_reducer';
import { resetAllAction } from '../redux/question_reducer';

export default function Result() {


   const dispatch = useDispatch();
    const {ques: { queue,answers}, result: { result,userId}}=useSelector(state =>state)
    useEffect (() =>{
        console.log("a8esonaaa"+result);
    })
const totalPoints = queue.length *10;
const earnPoints = earnPoints_Number(result,answers,10);
const flag = flagResult(totalPoints, earnPoints)
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
        
    }

  return (
    <div className='container'>
        <h1 className='title'>RESULTS</h1>

        <div className='result flex-center'>
           
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{queue.length || 0}</span>
            </div>
            {/* <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>03</span>
            </div> */}
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints||0}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span className='bold'>{flag?"Passed":"Failed"}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn' to='/mainForQuiz' onClick={onRestart}>Restart</Link>
        </div>

        <div className="container">
            {/* result table */}
            <ResultTable></ResultTable>
        </div>
    </div>
  )
}