import {PRefundsContext} from "../context/PRefundsContext"
import { useContext } from "react";

export const usePRContext = () => {
    const context = useContext(PRefundsContext)

    if (!context) {
        throw Error('usePRContext must be used inside an PRefundsContextProvider.')
    }


    return context
}