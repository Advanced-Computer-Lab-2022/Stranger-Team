//     import 'bootstrap/dist/css/bootstrap.min.css'

//     import{Button, Alert, Container, Nav} from 'react-bootstrap'
//     import React from 'react';
//     import { useNavigate } from "react-router-dom";


//     const EditMyProfile = ({ instructor }) => {

    
//     return (

//         <div class="container">
// <div class="row gutters">
// <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
// <div class="card h-100">
// 	<div class="card-body">
// 		<div class="account-settings">
// 			<div class="user-profile">
// 				<div class="user-avatar">
// 					<img src="https://i.imgur.com/wvxPV9S.png"  height="100" width="100" alt="Maxwell Admin"/>
// 				</div>
// 				<h5 class="user-name">Yuki Hayashi</h5>
// 				<h6 class="user-email">yuki@Maxwell.com</h6>
// 			</div>
// 			<div class="about">
// 			</div>
// 		</div>
// 	</div>
// </div>
// </div>
// <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
// <div class="card h-100">
// 	<div class="card-body">
// 		<div class="row gutters">
// 			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
// 				<h6 class="mb-2 text-primary">Personal Details</h6>
// 			</div>
// 			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 				<div class="form-group">
// 					<label for="fullName">First Name</label>
// 					<input type="text" class="form-control" id="fullName" placeholder="Enter full name"/>
// 				</div>
// 			</div>
//             <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 				<div class="form-group">
// 					<label for="fullName">Last Name</label>
// 					<input type="text" class="form-control" id="fullName" placeholder="Enter full name"/>
// 				</div>
// 			</div>
// 			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 				<div class="form-group">
// 					<label for="eMail">Email</label>
// 					<input type="email" class="form-control" id="eMail" placeholder="Enter email ID"/>
// 				</div>
// 			</div>
//             <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 				<div class="form-group">
// 					<label for="fullName">Bio</label>
// 					<input type="text" class="form-control" id="fullName" placeholder="Enter full name"/>
// 				</div>
// 			</div>
			
// 		</div>
// 		<div class="row gutters">
// 			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
// 				<div class="text-right">
// 					<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
// 					<button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// </div>
// </div>
// </div>

//     )
//     }

//     export default EditMyProfile




    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container} from 'react-bootstrap'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorEditProfile from "../components/InstructorProfileDetails";
	import InstructorProfileDetails from "../components/InstructorProfileDetails";


    const EditMyProfilePage = () => {
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
        
        <div >
        {/* <h1>My Courses</h1> {signalList.filter(obj => obj.id == yourId)[0].text}*/}
            {instructors && instructors.map(instructor => (
            <InstructorProfileDetails instructor={instructor} key={instructor._id} />
            ))[0]}
        </div>
        
		{instructors && instructors.map(instructor => (
            <InstructorEditProfile instructor={instructor} key={instructor._id} />
            ))[0]}
        {/* <InstructorEditProfile/> */}

			
        
        </Container>
    )
    }

    export default EditMyProfilePage