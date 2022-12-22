import { useQuizContext } from "../hooks/UseQuizContext"
import { useState } from "react"


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const QuizDetails = ({ quiz }) => {

    const {dispatch} = useQuizContext()



    const [drop, setdrop] = useState(false)

  function onSelect(){
       
       setdrop(!drop)
 }
    
    const handleClick = async () =>  {
        const response = await fetch('/deleteQ/' +quiz._id,  {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_QUESTION', payload: json}) 
        }
        
    }

    
    return (
        <div className="admin-details">
            <h4>{quiz.QNumber}. {quiz.Q}</h4>
            <p className="material-symbols-outlined" onClick={onSelect}>expand_more</p>
            <label>OPTIONS</label>
         {drop &&
quiz.Answers.map((q, i) => (
 <p  id={`q${i}-option`} visible="false">OPTION {i}: <strong>{quiz.Answers[i]}</strong></p>
                  ))
                 }
                 
                 
            <p><strong>Correct Answer:  </strong> {quiz.Answers[quiz.correctAnswer]}</p>
            <p>Created {formatDistanceToNow(new Date(quiz.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default QuizDetails