import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate,useLocation  } from "react-router-dom";
import axios from "axios";
import parse from 'html-react-parser'
import JsPDF from 'jspdf';


const generatePDF = () => {

    const report = new JsPDF('p','pt','a4');
    report.html(document.querySelector('.Mynotes')).then(() => {
    report.save('report.pdf');
        });
    }
const TraineeViewWithNotes = () => {
    const params = new URLSearchParams(window.location.search);  
    const [Notes, setNotes] = useState([])
    const TraineeId = params.get('TraineeId');
    const SubtitleId = params.get('SubtitleId');

    useEffect(() => {
    const fetchNotes = async () => {
    const response = await fetch(`/fetchCorporateTraineeNotes/?TraineeId=${TraineeId}&SubtitleId=${SubtitleId}`)
    const notes = await response.json();
    console.log(notes);
   // console.log(notes[1].Notes);
    if (response.ok) {
       setNotes(notes);
    }
    // await axios.get(`/fetchCorporateTraineeNotes/?CorporateTraineeId=${CorporateTraineeId}&SubtitleId=${SubtitleId}`).then(
    //     (res) => { 
    //         const notes = res.Notes
    //         console.log("Get",parse(notes))
    //         setNotes(notes)  
    //     }
    //     );

    }  
    fetchNotes()
});
    let navigate = useNavigate();
    const routeChange = () =>{ 
    let path = `/fetchCorporateTraineeAddNotes/?TraineeId=${TraineeId}`; 
    navigate(path);
}
return (
    <div className="course-details">
       <h4>Your Notes</h4>
        <div className="blogList">
        {/* <button  onClick={fetchNotes}>{ 'Load Notess' }
      
         </button> */}
            </div>
        <div className="Mynotes">
        <div>
         </div>
         <div>
        {Notes.map((Notes) => (
         <div>
            <div>
            <p>{parse(Notes.Notes)}</p>
            </div>  
            
         </div> 
                 ))
                 }
                 </div>  
            </div>   
        <button onClick={generatePDF}> Save as PDF</button>
    </div>
 
  
   
)
}

export default TraineeViewWithNotes