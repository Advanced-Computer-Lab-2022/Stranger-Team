    import { useEffect } from "react";


        //components
        import InstructorsDetails from '../components/InstructorDetails';
        import InstructorForm from '../components/InstructorForm';
        
        //hooks
        import { useInstructorsContext } from "../hooks/UseInstructorContext";

    const InstructorsPage = () => {
        
            
            const {instructors, dispatch} = useInstructorsContext()
            
                useEffect(() => {
                    const fetchInstructors = async () => {
                    const response = await fetch('/adminHome/instructors')
                        const json = await response.json() //pending instructors records
                        if (response.ok) {
                            dispatch({type: 'SET_INSTRUCTORS', payload: json})
                        }
                    }
                    fetchInstructors()
                    
                }, [])
            
            
                return (
                <div className="home">
                <div className="admins">
                    {instructors && instructors.map((instructors) => (
                        <InstructorsDetails key={instructors._id} instructors={instructors}/>
                    ))}
                </div>
                <InstructorForm />
                </div>
                )
            
            }

    export default InstructorsPage