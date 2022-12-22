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
    const [emptyFields, setEmptyFields] = useState([])




    let navigate = useNavigate();
    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        let path = `/InstructorCoursePage/?id=${instructorId}`; 
        navigate(path);
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
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new question</h3>

            <label>Question number: </label>
            <input 
            type="number" 
            onChange={(e) => setQNumber(e.target.value)}
            value={QNumber}
            className={emptyFields.includes('QNumber') ? 'error':''}
            />

            <label>Question: </label>
            <input 
            type="text" 
            onChange={(e) => setQ(e.target.value)}
            value={Q}
            className={emptyFields.includes('Q') ? 'error':''}
            />

            <label>OPTION 0: </label>
            <input 
            type="text" 
            onChange={(e) => setAnswer1(e.target.value)}
            value={Answer1}
            className={emptyFields.includes('A1') ? 'error':''}
            />


            <label>OPTION 1: </label>
            <input 
            type="text" 
            onChange={(e) => setAnswer2(e.target.value)}
            value={Answer2}
            className={emptyFields.includes('A2') ? 'error':''}
            />

            
            <label>OPTION 2: </label>
            <input 
            type="text" 
            onChange={(e) => setAnswer3(e.target.value)}
            value={Answer3}
            className={emptyFields.includes('A3') ? 'error':''}
            />



            <label>OPTION 3: </label>
            <input 
            type="text" 
            onChange={(e) => setAnswer4(e.target.value)}
            value={Answer4}
            className={emptyFields.includes('A4') ? 'error':''}
            />


            <label>Option which holds the correct answer </label>
            <input 
            type="number" 
            onChange={(e) => setCorrectAnswer(e.target.value)}
            value={correctAnswer}
            className={emptyFields.includes('correctAns') ? 'error':''}
            />

            <button>Add question</button>
            {error && <div className="error">{error}</div>}

            <button onClick={routeChange2}>Done</button>
        </form>
    )
}

export default QuizForm