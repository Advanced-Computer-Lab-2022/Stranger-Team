import { useEffect } from "react";


//components
import AcceptedRefundsDetails from "../components/AcceptedRefundsDetails";
//import AdminForm from "../components/AdminForm";

//hooks
import { useARContext } from "../hooks/UseARContext";


const AcceptedRefundsPage = () => {

const {arefunds, dispatch} = useARContext()

    useEffect(() => {
        const fetchARefunds = async () => {
        const response = await fetch('/acceptedRefunds')
            const json = await response.json() 
            if (response.ok) {
                dispatch({type: 'SET_AREFUNDS', payload: json})
            }
        }
        fetchARefunds()
        
    }, [])


    return (
    <div className="home">
    <div className="admins">
        {arefunds && arefunds.map((arefunds) => (
            <AcceptedRefundsDetails key={arefunds._id} arefunds={arefunds}/>
        ))}
    </div>
    {/* <AdminForm /> */}
    </div>
    )

}

export default AcceptedRefundsPage