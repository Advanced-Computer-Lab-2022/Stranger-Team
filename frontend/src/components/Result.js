import React ,{ useEffect, useState }from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom';
import { earnPoints_Number,flagResult } from '../helper/helper';

import ResultTable from './ResultTable';
import { useNavigate } from 'react-router-dom';


import { useDispatch,useSelector } from 'react-redux';

import { resetResultAction } from '../redux/result_reducer';
import { resetAllAction } from '../redux/question_reducer';
var u;

export default function Result() {
    const [finished,setFinished] = useState(false)


const [corpTrainee, setCorpTrainee] = useState(false)

   const dispatch = useDispatch();
   const {ques: { queue,answers}, result: { result,userId}}=useSelector(state =>state)
   useEffect (() =>{
    //   console.log("a8esonaaa"+result);
    checkTrainee();
   })
const totalPoints = queue.length *10;
const earnPoints = earnPoints_Number(result,answers,10);
const flag = flagResult(totalPoints, earnPoints)
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
        
    }

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('CourseId');
    //const traineeId = params.get('TraineeId');
    //const ctrainee = params.get('CorporateTraineeId');
    console.log(courseId); 

    const checkTrainee = async() => {
    
        // const response = await fetch(`/routeCheck?CourseId=${courseId}&TraineeId=${traineeId}&CorporateTraineeId=${ctrainee}`,  {
        //     method: 'GET'
        // })
         const response = await fetch('/routeCheck?',  {
            method: 'GET'
        })
        const json = await response.json()
        console.log(json)
        if (response.ok) {
            setCorpTrainee(true)
            console.log("OK" + corpTrainee)
        }

        if (!response.ok) {
            console.log("NOT OK" + corpTrainee)
        }

    }
    const update= async()=>{
        var response;
        let params = new URLSearchParams(window.location.search);
        let courseId = params.get('CourseId');
        let TraineeId=params.get('TraineeId');
        let CTraineeId=params.get('CorporateTraineeId');

         if(CTraineeId==null){
          response = await fetch(`/updateFinished/?CourseId=${courseId}`)
        }
        else{   
         response = await fetch(`/updateFinished/?CourseId=${courseId}`)
        }
        const json = await response.json()
        if(response.ok){
        setFinished(json)
    }
        u=("----------------------------->",finished);
        console.log(u);
        console.log(courseId); 
}

    let navigate = useNavigate();
    const routeChangeCT = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
       // const traineeId = params.get('TraineeId');
       // const ctrainee = params.get('CorporateTraineeId');
        console.log(courseId); 
      //  let path =  `/CurrentCoursePageCorporateTrainee/?CourseId=${courseId}&CorporateTraineeId=${ctrainee}`; 
        let path =  `/CurrentCoursePageCorporateTrainee/?CourseId=${courseId}`; 
        navigate(path);
    }


    const routeChangeT = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
       // const traineeId = params.get('TraineeId');
        //const ctrainee = params.get('CorporateTraineeId');
        console.log(courseId); 
       // let path =  `/CurrentCoursePageTrainee/?CourseId=${courseId}&TraineeId=${traineeId}`; 
        let path =  `/CurrentCoursePageTrainee/?CourseId=${courseId}`; 
        navigate(path);
    }
    

    return (
        <div className='container'>
            <h1 style={{marginLeft:'300px'}}><strong>RESULTS</strong></h1>
    
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
    
            <div className="start" style={{marginRight:'350px'}}>
                <Link className='button-48' to={`/mainForQuiz/?CourseId=${courseId}`} onClick={onRestart}>Restart</Link>
            </div>

            <div className="start" style={{marginRight:'350px'}}>
            {!corpTrainee && <Link className='button-48' style={{marginTop:'20px'}} to={`/CurrentCoursePageTrainee/?CourseId=${courseId}`}>Back To Course</Link>}
            {corpTrainee && <Link className='button-48'style={{marginTop:'20px'}} to={`/CurrentCoursePageCorporateTrainee/?CourseId=${courseId}`}>Back To Course</Link>}           
             </div>

            <div className="start" style={{marginRight:'350px'}}>
            {!corpTrainee && <Link className='button-48' style={{marginTop:'20px'}} to={`/Traineeviewqwizanswers/?CourseId=${courseId}`}onClick={update}>Done</Link>}
             {corpTrainee && <Link className='btn' to={`/viewqwizanswers/?CourseId=${courseId}`} style={{marginTop:'20px'}} onClick={update}>Done </Link>}            
             </div>
        
        
        {/* {corpTrainee && <button onClick={update}>Done</button>} */}




     
       
            
    
            <div className="container">
                {/* result table */}
                <ResultTable></ResultTable>
            </div>
        </div>
      )
    }