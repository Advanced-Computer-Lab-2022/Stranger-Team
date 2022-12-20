
    import { createContext, useReducer } from "react";



    export const InstructorsContext = createContext();
    export const InstructorsReducer = (state, action) => {
        switch(action.type) {
            case 'SET_INSTRUCTORS':
                return {
                    instructors: action.payload
                }

            case 'CREATE_INSTRUCTOR':
                return {
                    instructors: [action.payload, ...state.instructors]
                }


            case 'DELETE_INSTRUCTOR':
                return {
                    instructors: state.instructors.filter((i) => i._id !== action.payload._id )
                }

            default: 
                return state

        
        }
    }
    export const InstructorsContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(InstructorsReducer, {
            instructors: null
        })


        return (
            <InstructorsContext.Provider value={{...state, dispatch}}>
                { children }
            </InstructorsContext.Provider>
        )
    }