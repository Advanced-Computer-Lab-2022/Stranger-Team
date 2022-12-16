import { createContext,useReducer } from "react";

export const InstructorProfileContext = createContext();

export const InstructorReducer =(state,action) =>{
    switch(action.type){
        case 'SET_PROFILE':
            return{
                instructorProfile:action.payload
            }
        case 'INSTRUCTOR_PROFILE':
            return{
                instructorProfile: [action.payload,...state.instructorProfile]
            }
        case 'FILTER_INSTRUCTOR_PROFILE':
            return{
                instructorProfile: [action.payload,...state.instructorProfile]
            }
        default:
            return state 
    }
}

export const InstructorProfileContextProvider = ({children })=>{

    const [state,dispatch]= useReducer(InstructorReducer,{
        instructorProfile:null
    });

    return(
        <InstructorProfileContextProvider.Provider value={{...state,dispatch}}>
            {children}
        </InstructorProfileContextProvider.Provider>
    )
}