
    import { createContext, useReducer } from "react";



    export const ARefundsContext = createContext();
    export const ARefundsReducer = (state, action) => {
        switch(action.type) {
            case 'SET_AREFUNDS':
                return {
                    arefunds: action.payload
                }

            case 'CREATE_AREFUNDS':
                return {
                    arefunds: [action.payload, ...state.arefunds]
                }


            case 'DELETE_AREFUNDS':
                return {
                    arefunds: state.arefunds.filter((r) => r._id !== action.payload._id )
                }

            default: 
                return state

        
        }
    }
    export const ARefundsContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(ARefundsReducer, {
            arefunds: null
        })


        return (
            <ARefundsContext.Provider value={{...state, dispatch}}>
                { children }
            </ARefundsContext.Provider>
        )
    }