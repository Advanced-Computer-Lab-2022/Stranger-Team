import React, { useRef,useState,useMemo } from "react";
import JoditEditor from "jodit-react";
import { Jodit } from "jodit-react";
import axios from "axios";
import parse from 'html-react-parser'
import TraineeViewWithNotes from "./FetchTraineeNotes";
//let adjustedText = conversion('<p>Your string of HTML code here</p>');
 var Notes;

const AddNotes = ({ placeholder}) => {
  const[notes,setNotes]=useState("");
  const[list,setlist]=useState([]);
  const editor = useRef(null);
  const config = useMemo(() => ({
        readonly: false, 
        buttons: ["print","bold", "italic", "link", "unlink", "underline", "source" ,
        '|', 
        '|', 'ul', 'ol',
        '|', 'font', 'fontsize', 'brush', 'paragraph',
        '|', 'left', 'center', 'right', 'justify',
        '|', 'undo', 'redo',
        '|', 'hr', 'eraser', 'fullsize'],
        showXPathInStatusbar: true,
        showCharsCounter: true,
        showWordsCounter: false,
        toolbarAdaptive: false,
        spellcheck: true,
        enter: "P",
        defaultMode: Jodit.MODE_WYSIWYG,
        useSplitMode: false,
        cleanHTML: {
        fillEmptyParagraph: false,
        tabIndex: 1,
        askBeforePasteHTML: true,
        askBeforePasteFromWord: true,
        defaultActionOnPaste: 'insert_clear_html',
        placeholder: 'Write something awesome ...',
        beautyHTML: true,
        toolbarButtonSize: 'middle',
        theme: 'default',
        saveModeInCookie: false,
        editorCssClass: false,
        // buttons: ["bold", "italic", "link", "unlink", "underline", "source" ,'|', 'ul', 'ol',
        // '|', 'font', 'fontsize', 'brush', 'paragraph',
        // '|', 'video', 'table', 'link',
        // '|', 'left', 'center', 'right', 'justify',
        //  '|', 'undo', 'redo',
        // '|', 'hr', 'eraser', 'fullsize'
        // ],
        extraButtons: ["uploadImage", "codeBlock"]
          }
    }),
    []
  );
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("on submit",Notes)
    const params = new URLSearchParams(window.location.search);
    const TraineeId = params.get('TraineeId');
    const SubtitleId = params.get('SubtitleId');
    console.log(TraineeId);
     var data={Notes}
     const response = await fetch(`/fetchCorporateTraineeAddNotes?TraineeId=${TraineeId}&SubtitleId=${SubtitleId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //  await axios.post(`/fetchCorporateTraineeAddNotes/?TraineeId=${TraineeId}&SubtitleId=${SubtitleId}`,data).then(
    //   console.log("Axios:",Notes) )
    //   if(Notes){
    //   setlist((ls)=>[...ls,data])
    //   }

}
 const handleTextAreaChange = async(newTextAreaValue) => {
     Notes=await newTextAreaValue;
     const d=parse(Notes);
     console.log(d)
     setNotes(Notes);
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
    <button onClick={handleSubmit} style={{ margin: "auto", marginTop: "50px" ,width:"100px",padding:"10px",borderRadius:"10px"}}>Add</button>
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