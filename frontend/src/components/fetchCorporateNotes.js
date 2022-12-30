//REMOVED IDs' ====>>>>>>>>>>DONE
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
const CTraineeViewWithNotes = () => {
    const params = new URLSearchParams(window.location.search);  
    const [Notes, setNotes] = useState([])
    //const TraineeId = params.get('CorporateTraineeId');
    const SubtitleId = params.get('SubtitleId');
   // console.log("Trainee ID :---------------------------------->>>>>>>>>>>>>>>>>>>>>>",TraineeId)

    useEffect(() => {
    const fetchNotes = async () => {

        //?TraineeId=${TraineeId}
    const response = await fetch(`/fetchCorporateTraineeNotes/?SubtitleId=${SubtitleId}`)
    const notes = await response.json();
    //console.log("Trainee ID :---------------------------------->>>>>>>>>>>>>>>>>>>>>>",TraineeId)
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
        //?TraineeId=${TraineeId}
    let path = `/fetchCorporateTraineeAddNotes/`; 
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

export default CTraineeViewWithNotes