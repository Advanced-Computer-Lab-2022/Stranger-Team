//REMOVED IDs'====>>>>>>DONE

import { useState,useEffect } from "react";
import React from 'react';
import { Certificate } from "../components/Certificate";
import "../styles/certificate.css"
var p;
var decimal;
const MyCertificate=() => {
 const [progress,setProgress]=useState(0);

 useEffect(() => {
const fetchProgress = async () => {
        const params = new URLSearchParams(window.location.search);
       // const subtitleId = params.get('SubtitleId');
        const courseId = params.get('CourseId');
       // const corpId=params.get('CorporateTraineeId')
       //console.log(subtitleId); 
       //&CorporateTraineeId=${corpId}
        const response = await fetch(`/getSubtitlesStatus/?CourseId=${courseId}`)
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

  return (
    <div className="Cert">
      <h1>My Certificate</h1>
      {/* <button onClick={() => setProgress(!toggle)}>Change</button> */}
      {p==100 ? <Certificate />: <div><p><strong>You did not finish the course yet</strong></p>
      <div> Your Progress is </div>{decimal}%
      </div>}
      
    </div>
  );
}

export default MyCertificate;