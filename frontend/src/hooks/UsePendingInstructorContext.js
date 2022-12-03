import { PendingInstructorsContext } from "../context/pendingInstructorContext";
import { useContext } from "react";

export const usePendingInstructorsContext = () => {
    const context = useContext(PendingInstructorsContext)

    if (!context) {
        throw Error('usePendingInstructorsContext must be used inside an usePendingInstructorsContextProvider.')
    }


    return context
}