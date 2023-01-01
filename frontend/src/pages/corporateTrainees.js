import { useEffect } from "react";
//components
import CorporateTraineeDetails from '../components/CorporateTraineeDetails';
import CorporateTraineeForm from "../components/CorporateTraineeForm";
import AdminNavbar from "../components/AdminNavbar";
import Container from "react-bootstrap/esm/Container";
import '../styles/admin.css'

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
                <AdminNavbar></AdminNavbar>
                <CorporateTraineeForm />
        <div className="home">
        <div className="admins">
            {corporatetrainees && corporatetrainees.map((corporatetrainees) => (
                <CorporateTraineeDetails key={corporatetrainees._id} corporatetrainees={corporatetrainees}/>
            ))}
        </div>
        </div>
        {/* <div> <Container style={{top:'-3200px',  right:'-750px'}}>
        
                 </Container></div> */}
        </div>
        )
    
    }
    
    export default CorporateTPage