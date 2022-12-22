import { CourseRequestsContext } from '../context/courseRequestsContext'
import { useContext } from "react";

export const useCourseRequestsContext = () => {
    const context = useContext(CourseRequestsContext)

    if (!context) {
        throw Error('useCourseRequestsContext must be used inside an useCourseRequestsContextProvider.')
    }


    return context
}