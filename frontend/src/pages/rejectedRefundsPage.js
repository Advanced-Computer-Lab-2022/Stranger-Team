import { useEffect } from "react";


//components
import RejectedRefundsDetails from "../components/RejectedRefundsDetails";
//import AdminForm from "../components/AdminForm";
import AdminNavbar from "../components/AdminNavbar";

//hooks
import {useRRContext} from '../hooks/UseRRContext';


const RejectedRefundsPage = () => {

const {rrefunds, dispatch} = useRRContext()

    useEffect(() => {
        const fetchRRefunds = async () => {
        const response = await fetch('/rejectedRefunds')
            const json = await response.json() 
            if (response.ok) {
                dispatch({type: 'SET_RREFUNDS', payload: json})
            }
        }
        fetchRRefunds()
        
    }, [])


    return (
    <div className="home">
    <div className="admins">
    <AdminNavbar></AdminNavbar>
        {rrefunds && rrefunds.map((rrefunds) => (
            <RejectedRefundsDetails key={rrefunds._id} rrefunds={rrefunds}/>
        ))}
    </div>
    {/* <AdminForm /> */}
    </div>
    )

}

export default RejectedRefundsPage