import { SeenReportsContext } from "../context/SeenReportContext";
import { useContext } from "react";

export const useSeenReportsContext = () => {
    const context = useContext(SeenReportsContext)

    if (!context) {
        throw Error('useSeenReportsContext must be used inside an SeenReportsContextProvider')
    }


    return context
}