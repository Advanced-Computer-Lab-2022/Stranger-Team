//sessions done
import { useEffect } from "react";


//components
import QuizDetails from '../components/QuizDetails';
import QuizForm from "../components/QuizForm";

//hooks
import { useQuizContext } from "../hooks/UseQuizContext";


const CreateQuizPage = () => {

const {quiz, dispatch} = useQuizContext()

    useEffect(() => {
        const fetchQuiz = async () => {
            const queryParams = new URLSearchParams(window.location.search);
            const courseId = queryParams.get('CourseId');
            const response = await fetch(`/fetchQ/?CourseId=${courseId}`)
            const json = await response.json() 
            if (response.ok) {
                dispatch({type: 'SET_QUESTIONS', payload: json})
            }
        }
        fetchQuiz()
        
    }, [])


    return (
    <div className="home">
    <div className="admins">
        <h2>Edit your course exam</h2>
        {quiz && quiz.map((quiz) => (
            <QuizDetails key={quiz._id} quiz={quiz}/>
        ))}
    </div>
    <QuizForm />
    </div>
    )

}

export default CreateQuizPage