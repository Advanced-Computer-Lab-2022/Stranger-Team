    import { useEffect } from "react";


    //components
    import AdminDetails from '../components/AdminDetails';
    import AdminForm from "../components/AdminForm";

    //hooks
    import { useAdminsContext } from "../hooks/UseAdminContext";


    const Home = () => {

    const {admins, dispatch} = useAdminsContext()

        useEffect(() => {
            const fetchAdmins = async () => {
            const response = await fetch('/adminHome/admins')
                const json = await response.json() //admin records
                if (response.ok) {
                    dispatch({type: 'SET_ADMINS', payload: json})
                }
            }
            fetchAdmins()
            
        }, [])


        return (
        <div className="home">
        <div className="admins">
            {admins && admins.map((admins) => (
                <AdminDetails key={admins._id} admins={admins}/>
            ))}
        </div>
        <AdminForm />
        </div>
        )

    }

    export default Home