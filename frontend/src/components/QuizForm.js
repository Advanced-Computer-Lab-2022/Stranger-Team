//sessions done
import { useState } from "react"
import { useNavigate } from "react-router-dom";

//hooks
import { useQuizContext } from "../hooks/UseQuizContext";

const QuizForm = () => {
    const {dispatch} = useQuizContext()
    const [QNumber, setQNumber] = useState('')
    const [Q , setQ] = useState('')
    const [Answer1 , setAnswer1] = useState('')
    const [Answer2 , setAnswer2] = useState('')
    const [Answer3 , setAnswer3] = useState('')
    const [Answer4 , setAnswer4] = useState('')
    const [correctAnswer , setCorrectAnswer] = useState('')
    const [error, setError] = useState(null)
    const [error1, setError1] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])




    let navigate = useNavigate();
    // const routeChange2 = () =>{ 
    //     const params = new URLSearchParams(window.location.search);
    //     const instructorId = params.get('id');
    //     let path = `/InstructorCoursePage/?id=${instructorId}`; 
    //     navigate(path);
    // }




    const handleClick = async (e) =>  {
        e.preventDefault()
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        const response = await fetch(`/quizSize/?CourseId=${courseId}`,  {
            method: 'GET'
        })

        if (!response.ok) {
            setError1("A quiz of any course should have a minimum of 3 questions.")
            console.log(error1)
        }

        if (response.ok) {
            const params = new URLSearchParams(window.location.search);
            //const instructorId = params.get('id');
            // let path = `/InstructorCoursePage/?id=${instructorId}`; 
            let path = `/InstructorCoursePage`; 
            navigate(path);
        }
        
        
    }


    const handleSubmit = async(e) => {
        e.preventDefault()
        const question = {QNumber, Q, Answer1, Answer2, Answer3, Answer4, correctAnswer}

        const queryParams = new URLSearchParams(window.location.search);
                const courseId = queryParams.get('CourseId');
                const response = await fetch(`/addQ/?CourseId=${courseId}`, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        //console.log(json)

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setError(null)
            setError1(null)
            setQNumber('')
            setQ('')
            setAnswer1('')
            setAnswer2('')
            setAnswer3('')
            setAnswer4('')
            setCorrectAnswer('')
            setEmptyFields([])
            console.log("new question has been added.", json)
            dispatch({type: 'CREATE_QUESTION', payload: json})
        }
    }

    return (
        <div> 
            <form className="create" onSubmit={handleSubmit}>
            <h3><strong>Add a new question</strong></h3>

            <label><strong>Question number*</strong></label>
            <br></br>
            <input 
            type="number" 
            onChange={(e) => setQNumber(e.target.value)}
            value={QNumber}
            required
            // className={emptyFields.includes('QNumber') ? 'error':''}
            />
            <p></p>
            <label><strong>Question*</strong></label>
           <br></br>
            <input 
            type="text" 
            onChange={(e) => setQ(e.target.value)}
            value={Q}
            required
            // className={emptyFields.includes('Q') ? 'error':''}
            />
<p></p>
            <label><strong>OPTION 0*</strong></label>
            <br></br>
            <input 
            type="text" 
            onChange={(e) => setAnswer1(e.target.value)}
            value={Answer1}
            required
            // className={emptyFields.includes('A1') ? 'error':''}
            />

<p></p>
            <label><strong>OPTION 1*</strong></label>
            <br></br>
            <input 
            type="text" 
            onChange={(e) => setAnswer2(e.target.value)}
            value={Answer2}
            required
            // className={emptyFields.includes('A2') ? 'error':''}
            />

            <p></p>
            <label><strong>OPTION 2*</strong></label>
        <br></br>
            <input 
            type="text" 
            onChange={(e) => setAnswer3(e.target.value)}
            value={Answer3}
            required
            // className={emptyFields.includes('A3') ? 'error':''}
            />


<p></p>
            <label><strong>OPTION 3*</strong></label>
            <br></br>
            <input 
            type="text" 
            onChange={(e) => setAnswer4(e.target.value)}
            value={Answer4}
            required
            // className={emptyFields.includes('A4') ? 'error':''}
            />





<p></p>
            <label><strong>Correct Option*</strong></label>  
            <br></br>
            <select id="RID" name="correctAnswer" onChange={(e) => setCorrectAnswer(e.target.value)}
            value={correctAnswer} required type="number" class="form-control" style={{width: "200px", height:"40px"}}>
            <option value=""></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select> 
            
            {/* <hr></hr> */}
           <div> <button className="button-40" role="button"><span class="text">Add Question</span></button></div>
            {error && <div className="error1">{error}</div>}

           
        </form>


        <button className="done" role="button" onClick={handleClick}><span class="text" >Done</span></button>
       
        {error1 && <div className="error2">{error1}</div>}
        
        </div>
        
    )
}

export default QuizForm