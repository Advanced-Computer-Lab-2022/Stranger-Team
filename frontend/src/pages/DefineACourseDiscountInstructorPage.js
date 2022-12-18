
// //instructor current course page
//     import { useEffect, useState } from "react"
//     import React from 'react';
//     import { useNavigate,useLocation  } from "react-router-dom";
    

//     // components
//     import MyCourses from "../components/MyCourses"
//     import 'bootstrap/dist/css/bootstrap.min.css'

//     import{Button, Alert, Container, Nav} from 'react-bootstrap'
//     import Navbar from "../components/Navbar";

//     import CourseDetails from "../components/CourseDetails";
//     import StarRating from "../components/StarRating";
//     import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
//     import CurrentCourseDiscountPage from "../components/CurrentCourseDiscountPage";
//     import DefineACourseDiscountInstructorForm from "../components/DefineACourseDiscountInctructorForm";



//     const DefineACourseDiscountInstructorPage = () => {
    
    

//     // useEffect(() => {
//     //     const defineCourse = async () => {
//     //     //const response = await fetch('/View_My_Courses/Layla')
//     //     //const response = await fetch(`/View_My_Courses/Layla/?q=${searchQuery}`)
//     //     const params = new URLSearchParams(window.location.search);
//     //     const courseId = params.get('CourseId');
//     //     console.log(courseId); 
        
        
//     //     const response = await fetch(`/addCourseDiscount/?CourseId=${courseId}`)

        
        
//     //     const json = await response.json()
//     //     console.log(response)
//     //     console.log( json)

//     //     if (response.ok) {
//     //         setCourse(json)
//     //     }
//     //     }

//     // }, [])


//     // let navigate = useNavigate();
//     //     const routeChange = () =>{ 
//     //     const params = new URLSearchParams(window.location.search);
//     //     const courseId = params.get('CourseId');
//     //     // console.log(courseId); 
//     //     let path = `/defineCourseDiscount/?CourseId=${courseId}`; 
//     //     console.log("CourseId"+courseId)
//     //     navigate(path);
//     // }


//     return (
//         <div>
//         <Navbar/>
//         <Container >

//         {/* <div class="container"> */}
//         <div class="row gutters">
//         {/* <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"> */}
//         <div class="card h-100">
//             <div class="card-body">
//                 <DefineACourseDiscountInstructorForm/>
//             </div>
            
//         </div>
//         {/* </div> */}
//         </div>
//         {/* </div> */}
        
//         </Container>
//         </div>
//     )
//     }

//     export default DefineACourseDiscountInstructorPage

    // import { useState } from 'react'

    // const DefineACourseDiscountInstructorForm = () => {
    // const[discount,setDiscount]= useState('')


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const params = new URLSearchParams(window.location.search);
    //     const courseId = params.get('CourseId');

    //     const definedDiscount = discount
    //     console.log(definedDiscount)


    //     const response = await fetch(`/addCourseDiscount/?CourseId=${courseId}`, {
    //     method: 'POST',
    //     body: JSON.stringify(definedDiscount),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    //     })


    //     const json = await response.json()
    //     console.log(response)

    //     // if (!response.ok) {
    //     // setError(json.error)
    //     // }
    //     // if (response.ok) {
    //     // //setError(null)
    //     // //setDiscount('')        
    //     // }

    // }

    // return (
    //     <form className="create" onSubmit={handleSubmit}> 
    //     <h3>Please enter the discount amount you would like to define for your course:</h3>

    //     <label>Discount :</label>
    //     <input 
    //         type="Number" 
    //         onChange={(e) => setDiscount(e.target.value)} 
    //         value={discount} 
    //     />

    //     <button>Add Discount</button>
    //     {/* {error && <div className="error">{error}</div>} */}
    //     </form>
    // )
    // }

    // export default DefineACourseDiscountInstructorForm

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'

    const DefineACourseDiscountInstructorPage = () => {

    const [Discount, setDiscount] = useState('')
    const [Discount_Start_Date, setDiscount_Start_Date] = useState('')
    const [Discount_End_Date, setDiscount_End_Date] = useState('')
	const[error,setError]= useState('')

		const defineCourseDiscount = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        console.log("courseId"+courseId)
        const defineddiscount = {Discount,Discount_Start_Date,Discount_End_Date};
        console.log("definedDiscount"+defineddiscount)

        const response = await fetch(`/addCourseDiscount/?CourseId=${courseId}`, {
        method: 'POST',
        body: JSON.stringify(defineddiscount),
        headers: {
            'Content-Type': 'application/json'
        }
        })

        

        const json = await response.json()
        console.log(response)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        setError(null)
        setDiscount('')
        setDiscount_Start_Date('')
        setDiscount_End_Date('')
        
        
        
        console.log('Discount Defined:', json)
        }

    }


    return (

        <form className="create" onSubmit={defineCourseDiscount}> 
        <h3>Please enter the discount amount you would like to define for your course:</h3>

        <label>Discount :</label>
        <input 
            type="Number" 
            onChange={(e) => setDiscount(e.target.value)} 
            value={Discount} 
        />

        <label>Discount Start Date:</label>
        <input 
            className='course'
            type="Date" 
            min="2000-01-01" 
            onChange={(e) => setDiscount_Start_Date(e.target.value)} 
            value={Discount_Start_Date} 
        />

        <label>Discount End Date:</label>
        <input 
            className='course'
            type="Date" 
            min="2000-01-01" 
            onChange={(e) => setDiscount_End_Date(e.target.value)} 
            value={Discount_End_Date} 
        />

        <button>Add Discount</button>
        {error && <div className="error">{error}</div>} 
        </form>

    )
    }

    export default DefineACourseDiscountInstructorPage