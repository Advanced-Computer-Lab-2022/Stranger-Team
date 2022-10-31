import { useEffect } from "react";
//components
import CorporateTraineeDetails from '../components/CorporateTraineeDetails';
import CorporateTraineeForm from "../components/CorporateTraineeForm";

//hooks
import { useCorporateTraineesContext } from "../hooks/UseCorporateTraineeContext";


const CorporateTPage = () => {

    
       const {corporatetrainees, dispatch} = useCorporateTraineesContext()
    
         useEffect(() => {
             const fetchCT = async () => {
               const response = await fetch('/adminHome/corporateTrainees')
                const json = await response.json() //ct records
                 if (response.ok) {
                    dispatch({type: 'SET_CORPORATE_TRAINEES', payload: json})
                 }
             }
            fetchCT()
            
         }, [])
    
    
        return (
        <div className="home">
        <div className="admins">
            {corporatetrainees && corporatetrainees.map((corporatetrainees) => (
                <CorporateTraineeDetails key={corporatetrainees._id} corporatetrainees={corporatetrainees}/>
            ))}
        </div>
        <CorporateTraineeForm />
        </div>
        )
    
    }
    
    export default CorporateTPage