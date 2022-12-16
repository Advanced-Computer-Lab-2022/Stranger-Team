
    import { createContext, useReducer } from "react";



    export const CourseRequestsContext = createContext();
    export const CourseRequestsReducer = (state, action) => {
        switch(action.type) {
            case 'SET_COURSE_REQUESTS':
                return {
                    courserequests: action.payload
                }

            case 'CREATE_COURSE_REQUEST':
                return {
                    courserequests: [action.payload, ...state.courserequests]
                }


            case 'DELETE_COURSE_REQUEST':
                return {
                    courserequests: state.courserequests.filter((cr) => cr._id !== action.payload._id )
                }

            default: 
                return state

        
        }
    }
    export const CourseRequestsContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(CourseRequestsReducer, {
            courserequests: null
        })


        return (
            <CourseRequestsContext.Provider value={{...state, dispatch}}>
                { children }
            </CourseRequestsContext.Provider>
        )
    }