import { CorporateTraineesContext } from "../context/corporateTraineeContext";
import { useContext } from "react";

export const useCorporateTraineesContext = () => {
    const context = useContext(CorporateTraineesContext)

    if (!context) {
        throw Error('useCorporateTraineesContext must be used inside an CorporateTraineesContextProvider.')
    }


    return context
}