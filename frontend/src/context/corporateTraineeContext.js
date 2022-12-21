
    import { createContext, useReducer } from "react";



    export const CorporateTraineesContext = createContext();
    export const CorporateTraineesReducer = (state, action) => {
        switch(action.type) {
            case 'SET_CORPORATE_TRAINEES':
                return {
                    corporatetrainees: action.payload
                }

            case 'CREATE_CORPORATE_TRAINEE':
                return {
                    corporatetrainees: [action.payload, ...state.corporatetrainees]
                }


            case 'DELETE_CORPORATE_TRAINEE':
                return {
                    corporatetrainees: state.corporatetrainees.filter((c) => c._id !== action.payload._id )
                }

            default: 
                return state

        
        }
    }
    export const CorporateTraineesContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(CorporateTraineesReducer, {
            corporatetrainees: null
        })


        return (
            <CorporateTraineesContext.Provider value={{...state, dispatch}}>
                { children }
            </CorporateTraineesContext.Provider>
        )
    }