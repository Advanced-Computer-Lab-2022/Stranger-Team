    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
	import { useState } from 'react'

    const DefineDiscountForAllCoursesAdminPage = () => {

    const [Discount, setDiscount] = useState('')
    const [Discount_Start_Date, setDiscount_Start_Date] = useState('')
    const [Discount_End_Date, setDiscount_End_Date] = useState('')
	const[error,setError]= useState('')

		const defineCourseDiscount = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        
        const defineddiscount = {Discount,Discount_Start_Date,Discount_End_Date};
        console.log("definedDiscount"+defineddiscount)

        const response = await fetch(`/addCourseDiscountToAllCourses`, {
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
        
        window.location.href=`/AdminAllCourses`;
        }

    }


    return (

        <form className="create" onSubmit={defineCourseDiscount}> 
        <h3>Please enter the discount amount you would like to define for the course:</h3>

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

    export default DefineDiscountForAllCoursesAdminPage