import { createContext, useReducer } from "react";

export const SeenReportsContext = createContext() 


export const seenReportsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_REPORTS':
            return {
                irep: action.payload
            }

            case 'CREATE_REPORT':
            return { 
               irep: [action.payload, ...state.reports] 
            }

            default:
                return state

    }
}


export const SeenReportsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(seenReportsReducer, {
        reports: null
    })

    return(
        <SeenReportsContext.Provider value={{...state, dispatch}}>
            {children}
        </SeenReportsContext.Provider>
    )
}