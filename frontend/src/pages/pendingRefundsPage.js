import { useEffect } from "react";


//components
import PendingRefundsDetails from "../components/PendingRefundsDetails";
//import AdminForm from "../components/AdminForm";
import AdminNavbar from "../components/AdminNavbar";

//hooks
import { usePRContext } from "../hooks/UsePRContext";


const PendingRefundsPage = () => {

const {prefunds, dispatch} = usePRContext()

    useEffect(() => {
        const fetchPRefunds = async () => {
        const response = await fetch('/pendingRefunds')
            const json = await response.json() 
            if (response.ok) {
                dispatch({type: 'SET_PREFUNDS', payload: json})
            }
        }
        fetchPRefunds()
        
    }, [])


    return (
    <div className="home">
    <div className="admins">
        <AdminNavbar></AdminNavbar>
        {prefunds && prefunds.map((prefunds) => (
            <PendingRefundsDetails key={prefunds._id} prefunds={prefunds}/>
        ))}
    </div>
    {/* <AdminForm /> */}
    </div>
    )

}

export default PendingRefundsPage