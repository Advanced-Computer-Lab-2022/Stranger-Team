    import { useEffect } from "react";


    //components
    import PendingInstructorsDetails from '../components/PendingInstructorsDetails';


    //hooks
    import { usePendingInstructorsContext } from "../hooks/UsePendingInstructorContext";

    const PendingInstructorsPage = () => {
    
        
        const {pendinginstructors, dispatch} = usePendingInstructorsContext()
        
            useEffect(() => {
                const fetchpendingInstructors = async () => {
                const response = await fetch('/adminHome/pendingInstructors')
                    const json = await response.json() //pending instructors records
                    if (response.ok) {
                        dispatch({type: 'SET_PENDING_INSTRUCTORS', payload: json})
                    }
                }
                fetchpendingInstructors()
                
            }, [])
        
        
            return (
            <div className="home">
            <div className="admins">
                {pendinginstructors && pendinginstructors.map((pendinginstructors) => (
                    <PendingInstructorsDetails key={pendinginstructors._id} pendinginstructors={pendinginstructors}/>
                ))}
            </div>
            {/* <AdminForm /> */}
            </div>
            )
        
        }


    export default PendingInstructorsPage