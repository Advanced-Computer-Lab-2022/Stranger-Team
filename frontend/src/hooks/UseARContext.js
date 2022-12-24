import {ARefundsContext} from "../context/ARefundsContext"
import { useContext } from "react";

export const useARContext = () => {
    const context = useContext(ARefundsContext)

    if (!context) {
        throw Error('useARContext must be used inside an ARefundsContextProvider.')
    }


    return context
}