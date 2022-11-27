

    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorProfileDetails from "../components/InstructorProfileDetails";
    import InstructorEditProfile from "../components/InstructorEditProfile";


    const InstructorProfilePage = () => {
    const [instructors, setInstructor] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchPriceQuery, setSearchPriceQuery] = useState("")

    useEffect(() => {
        const fetchInstructor = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 
        
        
        const response = await fetch(`/MyProfile/?id=${instructorId}`)
        // if(searchPriceQuery == null)
        // {
        //     const response = await fetch(`/MyCourses/${instructorId}/?q=${searchQuery}`)
        // }
        // else
        // {
        //     const response = await fetch(`/MyCourses/${instructorId}/?q=${searchQuery}&p=${searchPriceQuery}`)
        // }
        
        
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            setInstructor(json)
        }
        }

        fetchInstructor()
    }, [])



    

        let navigate = useNavigate();
        const routeChange = () =>{ 
        let path = '/EditMyProfile'; 
        navigate(path);
    }

    return (
        <Container >
            <ProfileNavBar/>
        
        
        <div class="container">
        <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                {instructors && instructors.map(instructor => (
                <InstructorProfileDetails instructor={instructor} key={instructor._id} />
                ))[0]}
            </div>
        </div>
        </div>
        </div>
        </div>
        
        <InstructorEditProfile/>

        
        
        </Container>
    )
    }

    export default InstructorProfilePage