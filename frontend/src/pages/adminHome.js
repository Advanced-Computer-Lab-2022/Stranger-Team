    import { useEffect } from "react";
   

    //components
    import AdminDetails from '../components/AdminDetails';
    import AdminForm from "../components/AdminForm";
    import AdminNavbar from "../components/AdminNavbar";

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
            <div>
                 <AdminNavbar/>
        <div className="home">
        <div className="admins">
            {admins && admins.map((admins) => (
                <AdminDetails key={admins._id} admins={admins}/>
            ))}
        </div>
        <AdminForm />
       
      
        </div>
        </div>
        )

    }

    export default Home