import {createSlice} from "@reduxjs/toolkit";



export const questionReducer = createSlice({
    name: 'ques',
    initialState: {
        queue: [], //store all questions
        answers: [], //store all answers
        trace: 0  //acts as index to loop
    },

    reducers: {
        startExamAction: (state, action) => {
            let{question,answers}=action.payload
            return {
                ...state,
                queue : question,
                answers 
                
            }
        },

        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
                
            }
        },

        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },


        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})

export const {startExamAction, moveNextAction, movePrevAction, resetAllAction} = questionReducer.actions

export default questionReducer.reducer