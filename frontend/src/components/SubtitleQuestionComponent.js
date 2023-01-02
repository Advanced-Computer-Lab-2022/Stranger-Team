//sessions done
import { useState } from "react"


const SubtitleQuestionComponent = ({ subtitleQuestion }) => {
const [selected, setSelected] = useState(null)
const [red, setRed] = useState(false)
const [correctA, setCorrectA] = useState(false)
const [disable, setDisable] = useState("false")


function onClick(i) {
    setSelected(i)
    
    }

function onSubmit() {
    console.log(selected)
    console.log(subtitleQuestion.correctAnswer)
    console.log(red)
    // if (!(selected == subtitleQuestion.correctAnswer)) {
        console.log("hereeeee")
        setRed(true)
        console.log(red)
    // }

    setCorrectA(true)
}


    return (
        <div className='questions'>
        <h2><strong>{subtitleQuestion.Q}</strong></h2>


        {!red &&  <ul>
            {
                subtitleQuestion.Answers.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onClick(q)}
                            
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className="check"></div>
                    </li>
                ))
            }
        </ul>}



        {red && 

                        <label style={{fontSize: "25px"}}>{subtitleQuestion.correctAnswer}</label>
                        
                    }


<div style={{marginRight:'250px', marginTop:'20px'}}>
        {/* <button onClick={onSubmit}>View answer</button> */}
        <button className="button-48" role="button" onClick={onSubmit}><span class="text">View Answer</span></button></div>

        {/* <div>
        {correctA &&  <label><strong>{subtitleQuestion.correctAnswer}</strong></label>}
       </div> */}
        
    </div>
    )
    }

    export default SubtitleQuestionComponent