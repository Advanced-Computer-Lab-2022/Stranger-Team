
    import { createContext, useReducer } from "react";



    export const PendingInstructorsContext = createContext();
    export const PendingInstructorsReducer = (state, action) => {
        switch(action.type) {
            case 'SET_PENDING_INSTRUCTORS':
                return {
                    pendinginstructors: action.payload
                }

            case 'CREATE_PENDING_INSTRUCTOR':
                return {
                    pendinginstructors: [action.payload, ...state.pendinginstructors]
                }


            case 'DELETE_PENDING_INSTRUCTOR':
                return {
                    pendinginstructors: state.pendinginstructors.filter((p) => p._id !== action.payload._id )
                }

            default: 
                return state

        
        }
    }
    export const PendingInstructorsContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(PendingInstructorsReducer, {
            pendinginstructors: null
        })


        return (
            <PendingInstructorsContext.Provider value={{...state, dispatch}}>
                { children }
            </PendingInstructorsContext.Provider>
        )
    }