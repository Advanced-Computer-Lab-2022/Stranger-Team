import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect, useState } from "react"
import React from 'react';
var p;

const Progressbar =({progress})=> {
  return(
  <div>
  <div>
  {/* <button onClick={fetchProgress}>
    NEXT
  </button> */}
  <ProgressBar now={progress.Progress} label={`${progress.Progress}%`} variant="success"/>

  </div>
  
  </div>
  )
}

export default Progressbar;