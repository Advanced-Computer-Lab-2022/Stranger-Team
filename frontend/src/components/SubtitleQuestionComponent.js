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
    if (!(selected == subtitleQuestion.correctAnswer)) {
        console.log("hereeeee")
        setRed(true)
        console.log(red)
    }

    setCorrectA(true)
}


    return (
        <div className='questions'>
        <h2>{subtitleQuestion.Q}</h2>


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



        {red &&  <ul>
            
                
                    <li>
                        <input 
                            type="radio"
                            value={true}
                            name="options"
                        //    disabled={true}
                            
                        />

                        <label className='text-primaryy'><strong>{subtitleQuestion.correctAnswer}</strong></label>
                        <div className="check"></div>
                    </li>
                
            
        </ul>}

        <button onClick={onSubmit}>View answer</button>

        {/* <div>
        {correctA &&  <label><strong>{subtitleQuestion.correctAnswer}</strong></label>}
       </div> */}
        
    </div>
    )
    }

    export default SubtitleQuestionComponent