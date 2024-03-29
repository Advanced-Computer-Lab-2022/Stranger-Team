import React, { useState } from "react";
import axios from "axios";
//import RichTextEditor from "./Components/RichTextEditor";
import AddNotes from "./AddNotes";
import styles from "../components/Guest/styles.module.css"

//import 'bootstrap/dist/css/bootstrap.min.css'

// const config = {
//     readonly: false,
//             autofocus: true,
//             tabIndex: 1,
//             askBeforePasteHTML: false,
//             askBeforePasteFromWord: false,
//             defaultActionOnPaste: 'insert_clear_html',

//             placeholder: 'Write something awesome ...',
//             beautyHTML: true,
//             toolbarButtonSize: "large",
//             buttons: ["bold", "italic", "link", "unlink", "underline", "source" ,'|', 'ul', 'ol',
//                 '|', 'font', 'fontsize', 'brush', 'paragraph',
//                 '|', 'video', 'table', 'link',
//                 '|', 'left', 'center', 'right', 'justify',
//                 '|', 'undo', 'redo',
//                 '|', 'hr', 'eraser', 'fullsize'
//             ],
//             extraButtons: ["uploadImage", "codeBlock"]
//   };
  
const IndTraineeNotes = () => {
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };


  return (
    <div className="row">
      <div className="col-md-12" style={{ margin: "auto", marginTop: "50px" }}>
        <div style={{ textAlign: "center"}}>
          <h4 style={{color:'#00008B'}}><strong>Add Your Notes:</strong></h4>
        </div>
        
        <div>
        <AddNotes initialValue="" getValue={getValue}
        // config={config} 
         />
          <br />
        </div>
       
      </div>

    </div>
  );
};

export default IndTraineeNotes;