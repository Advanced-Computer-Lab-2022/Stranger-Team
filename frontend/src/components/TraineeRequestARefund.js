import { useState,useEffect } from "react";
import React from 'react';
//import { Certificate } from "../components/Certificate";
//import "../styles/certificate.css"
var p;
var decimal;
const TraineeRefund=() => {
 const [progress,setProgress]=useState(0);

 useEffect(() => {
const fetchProgress = async () => {
        const params = new URLSearchParams(window.location.search);
       // const subtitleId = params.get('SubtitleId');
        const courseId = params.get('CourseId');
        const corpId=params.get('CorporateTraineeId')
       //console.log(subtitleId); 
        const response = await fetch(`/getSubtitlesStatus/?CourseId=${courseId}&TraineeId=${corpId}`)
        const json = await response.json()
        if (response.ok) {
        setProgress(json)    
         console.log("MyCert",progress)
         p=progress.Progress ;
        }
        decimal = Math.trunc(p);
    }
        fetchProgress()
    });
    const requestrefund=async()=>{
        const params = new URLSearchParams(window.location.search);
        // const subtitleId = params.get('SubtitleId');
         const courseId = params.get('CourseId');
         const traineeId=params.get('TraineeId')
         const response = await fetch(`/adminViewRefunds/?CourseId=${courseId}&CorporateTraineeId=${traineeId}`)
         const json = await response.json()
         if (response.ok) {
        console.log("Refund done")
         }
    }

  return (
    <div className="Cert">
      <h1>Request A Refund</h1>
      {/* <button onClick={() => setProgress(!toggle)}>Change</button> */}
      {p<=50 ? <button onClick={requestrefund}>Request A refund</button>: <div><p><strong>You cannot Request a Refund</strong></p>
      <div> Your Progress is </div>{decimal}%
      </div>}
      
    </div>
  );
}

export default TraineeRefund;