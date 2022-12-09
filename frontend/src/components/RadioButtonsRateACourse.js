    import React, { useState } from "react";
    import 'bootstrap/dist/css/bootstrap.min.css'
    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import { useNavigate,useLocation  } from "react-router-dom";



    const RadioButtonsRateACourse = () => {
    const [rate, setRate] = useState(null);
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        console.log(courseId); 
        console.log("rate"+rate);
        const response = await fetch(`/ratingACourse/?CourseId=${courseId}&rating=${rate}`)
        

        const json = await response.json()
        console.log(json)

        if(!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setRate('');
            setError('');
            console.log(response)
        }
    }



    return (
        
        <form className="course-details" onSubmit={handleSubmit}>
        <h3>Rate The Course: </h3>
        <label className="radio-inline">
        <input type="radio"  classNameName="rate" onChange={(e) => setRate(e.target.value)} 
            /> 1
        </label>
        <label className="radio-inline">
        <input type="radio"  value="2" classNameName="rate" onChange={(e) => setRate(e.target.value)} 
            /> 2
        </label>
        <label className="radio-inline">
        <input type="radio"  value="3" classNameName="rate" onChange={(e) => setRate(e.target.value)} 
            /> 3
        </label>
        <label className="radio-inline">
        <input type="radio"  value="4" classNameName="rate" onChange={(e) => setRate(e.target.value)} 
            /> 4
        </label>
        <label className="radio-inline">
        <input type="radio"  value="5" classNameName="rate" onChange={(e) => setRate(e.target.value)} 
            /> 5
        </label>
        <button >Submit Rating</button>
        {error && <div classNameName="error">{error}</div>}
        </form>
    );
    }

    export default RadioButtonsRateACourse;