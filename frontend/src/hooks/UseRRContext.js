import { RRefundsContext } from "../context/RRefundsContext";
import { useContext } from "react";

export const useRRContext = () => {
    const context = useContext(RRefundsContext)

    if (!context) {
        throw Error('useRRContext must be used inside an RRefundsContextProvider.')
    }


    return context
}