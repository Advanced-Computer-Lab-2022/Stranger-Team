
    import { createContext, useReducer } from "react";



    export const RRefundsContext = createContext();
    export const RRefundsReducer = (state, action) => {
        switch(action.type) {
            case 'SET_RREFUNDS':
                return {
                    rrefunds: action.payload
                }

            case 'CREATE_RREFUNDS':
                return {
                    rrefunds: [action.payload, ...state.rrefunds]
                }


            case 'DELETE_RREFUNDS':
                return {
                    rrefunds: state.rrefunds.filter((r) => r._id !== action.payload._id )
                }

            default: 
                return state

        
        }
    }
    export const RRefundsContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(RRefundsReducer, {
            rrefunds: null
        })


        return (
            <RRefundsContext.Provider value={{...state, dispatch}}>
                { children }
            </RRefundsContext.Provider>
        )
    }