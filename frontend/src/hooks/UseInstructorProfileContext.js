import { InstructorProfileContext } from "../context/InstructorProfileContext";
import { useContext } from "react";

export const useInstructorProfileContext = ()=>{
    const context = useContext(InstructorProfileContext);

    if(!context){
        throw Error('useInstructorProfileContext must be used inside a InstructorProfileContextProvider');
    }

    return context
}