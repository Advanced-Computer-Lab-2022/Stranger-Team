import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";


/** redux actions */
import * as Action from '../redux/question_reducer'

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {

                const queryParams = new URLSearchParams(window.location.search);
                 const courseId = queryParams.get('CourseId');
                const response = await fetch(`/fetchQ/?CourseId=${courseId}`)
                const question = await response.json()
                console.log(question)
                const ans =  await fetch(`/viewAnswers/?CourseId=${courseId}`)
                const answers = await ans.json()
                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : question}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({question,answers}))
                } else{
                    throw new Error("No Questions Available");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
       // console.log("here")
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}