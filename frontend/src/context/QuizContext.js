
    import { createContext, useReducer } from "react";



    export const QuizContext = createContext();
    export const QuizReducer = (state, action) => {
        switch(action.type) {
            case 'SET_QUESTIONS':
                return {
                    quiz: action.payload
                }

            case 'CREATE_QUESTION':
                return {
                    quiz: [action.payload, ...state.quiz]
                }


            case 'DELETE_QUESTION':
                return {
                    quiz: state.quiz.filter((q) => q._id !== action.payload._id )
                }

            default: 
                return state

        
        }
    }
    export const QuizContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(QuizReducer, {
            quiz: null
        })


        return (
            <QuizContext.Provider value={{...state, dispatch}}>
                { children }
            </QuizContext.Provider>
        )
    }