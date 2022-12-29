
//sessions done
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorProfileDetails from "../components/InstructorProfileDetails";
    import ViewMoney from "../components/InstructorMoneyOwed";


    const InstructorProfilePage = () => {
    const [instructors, setInstructor] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchPriceQuery, setSearchPriceQuery] = useState("")

    useEffect(() => {
        const fetchInstructor = async () => {
        //const response = await fetch('/View_My_Courses/Layla')
        //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
        const params = new URLSearchParams(window.location.search);
        // const instructorId = params.get('id');
        // console.log(instructorId); 
        
        
        // const response = await fetch(`/MyProfile/?id=${instructorId}`)
        const response = await fetch(`/MyProfile`)
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
    //     const routeChange = () =>{ 
    //     const params = new URLSearchParams(window.location.search);
    //     const instructorId = params.get('id');
    //     console.log(instructorId); 
    //     let path = `/InstructorEditMyProfilePage/?id=${instructorId}`; 
    //     navigate(path);
    // }

    return (
        <Container >
            <ProfileNavBar/>
        
        <form className="create"> 
        <div className="container">
        <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
            <div className="card-body">
            <div >
         {/* <ViewMoney ></ViewMoney> */}
            </div>
                {instructors && instructors.map(instructor => (
                <InstructorProfileDetails instructor={instructor} key={instructor._id} />
                ))[0]}
                {/* {instructors && instructors.map(instructor => (
                <InstructorRatingsDetails instructor={instructor.Instructor_Ratings} key={instructor._id} />
                ))[0]} */}
            </div>
        </div>
        </div>
        </div>
        </div>
        {/* <button className="create" onClick={routeChange}>Edit Profile</button> */}
        
        {/* <InstructorEditProfile/> */}

        
        </form>
        </Container>
    )
    }

    export default InstructorProfilePage