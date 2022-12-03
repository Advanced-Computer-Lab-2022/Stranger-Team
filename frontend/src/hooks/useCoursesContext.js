import { CourseContext } from "../context/CourseContext";
import { useContext } from "react";

export const useCourseContext = ()=>{
    const context = useContext(CourseContext);

    if(!context){
        throw Error('useCoursesContext must be used inside a CoursesContextProvider');
    }

    return context
}