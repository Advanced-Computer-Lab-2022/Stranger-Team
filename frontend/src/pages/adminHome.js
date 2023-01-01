    import { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";


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
                <AdminNavbar></AdminNavbar>
                <AdminForm />
        <div className="home">
        <div className="admins">
            {admins && admins.map((admins) => (
                <AdminDetails key={admins._id} admins={admins}/>
            ))}
        </div>
       
        </div>
        {/* <Container style={{top:'-1800px',  right:'-800px'}}>
        <AdminForm />
        </Container> */}
        </div>
        )

    }

    export default Home