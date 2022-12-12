import { useEffect } from "react";
//components
import CorporateTraineeDetails from '../components/CorporateTraineeDetails';
import CorporateTraineeForm from "../components/CorporateTraineeForm";
import AdminNavbar from "../components/AdminNavbar";

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
            <div>
                <AdminNavbar/>
        <div className="home">
        <div className="admins">
            {corporatetrainees && corporatetrainees.map((corporatetrainees) => (
                <CorporateTraineeDetails key={corporatetrainees._id} corporatetrainees={corporatetrainees}/>
            ))}
        </div>
        <CorporateTraineeForm />
        </div>
        </div>
        )
    
    }
    
    export default CorporateTPage