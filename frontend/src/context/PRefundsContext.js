
    import { createContext, useReducer } from "react";



    export const PRefundsContext = createContext();
    export const PRefundsReducer = (state, action) => {
        switch(action.type) {
            case 'SET_PREFUNDS':
                return {
                    prefunds: action.payload
                }

            case 'CREATE_PREFUNDS':
                return {
                    prefunds: [action.payload, ...state.prefunds]
                }


            case 'DELETE_PREFUNDS':
                return {
                    prefunds: state.prefunds.filter((r) => r._id !== action.payload._id )
                }


                case 'UPDATE_PREFUNDS':
                    return {
                        prefunds: state.prefunds.filter((prefunds) =>  prefunds.Status !== action.payload.Status )
                    }

            default: 
                return state

        
        }
    }
    export const PRefundsContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(PRefundsReducer, {
            prefunds: null
        })


        return (
            <PRefundsContext.Provider value={{...state, dispatch}}>
                { children }
            </PRefundsContext.Provider>
        )
    }