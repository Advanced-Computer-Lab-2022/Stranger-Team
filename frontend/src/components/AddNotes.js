import React, { useRef,useState,useMemo } from "react";
import JoditEditor from "jodit-react";
import { Jodit } from "jodit-react";
import axios from "axios";
import parse from 'html-react-parser'
import TraineeViewWithNotes from "./FetchTraineeNotes";
//let adjustedText = conversion('<p>Your string of HTML code here</p>');

import{Button, Alert, Container, Nav} from 'react-bootstrap'

//import { AddNotes } from "../../../Routes/corporateTraineeController";
 var Notes;
 //const { conversion } = require('html-to-text');

// const onSubmit=async() => {
//   const queryParams = new URLSearchParams(window.location.search);
//  const CorporateTraineeId=queryParams.CorporateTraineeId ;
//  // await axios.post(`/fetchCorporateTraineeAddNotes/?CorporateTraineeId=${CorporateTraineeId}`, getValue)
//  console.log("From Axios: " );
 
// };
const AddNotes = ({ placeholder}) => {

  const[notes,setNotes]=useState("");
  const[list,setlist]=useState([]);
  const editor = useRef(null);
  const config = useMemo(
    () => ({
        readonly: false, 
         buttons: ["print","bold", "italic", "link", "unlink", "underline", "source" ,
        '|', 
        '|', 'ul', 'ol',
        '|', 'font', 'fontsize', 'brush', 'paragraph',
        '|', 'left', 'center', 'right', 'justify',
        '|', 'undo', 'redo',
        '|', 'hr', 'eraser', 'fullsize'],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: false,
        spellcheck: true,
        enter: "P",
        defaultMode: Jodit.MODE_WYSIWYG,
        useSplitMode: false,
        cleanHTML: {
          fillEmptyParagraph: false
          
          }
    }),
    []
  );
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("on submit",Notes)
    const params = new URLSearchParams(window.location.search);
    const CorporateTraineeId = params.get('CorporateTraineeId');
    const SubtitleId = params.get('SubtitleId');
    console.log(CorporateTraineeId);
     var data={Notes}
     
     await axios.post(`/fetchCorporateTraineeAddNotes/?CorporateTraineeId=${CorporateTraineeId}&SubtitleId=${SubtitleId}`,data).then(
      console.log("Axios:",Notes) )
      if(Notes){
      setlist((ls)=>[...ls,data])
      }
}
 const handleTextAreaChange = (newTextAreaValue) => {
    setNotes(newTextAreaValue);
    Notes=newTextAreaValue;
    const d=parse(Notes);
    console.log(d)
   // Notes=notes;
    //console.log(Notes);
  };
  return (
    <div>
    <JoditEditor
    ref={editor}
    config={config}
    tabIndex={1}
    value={notes}
    onChange={handleTextAreaChange}    />
    <button onClick={handleSubmit} style={{ margin: "auto", marginTop: "50px" ,width:"100px",padding:"10px"}}>Add</button>
    <div>
    {/* {
     list.map((note) => <div>
    <li>
      {parse(note.Notes)}
    </li>
    </div>
           ) } */}
           <TraineeViewWithNotes></TraineeViewWithNotes>
    </div>
    </div>
    
  );
};

export default AddNotes;