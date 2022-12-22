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
        {/* <label className="radio-inline">
        <input type="radio"  className="rate" onChange={(e) => setRate(e.target.value)} 
            /> 1
        </label>
        <label className="radio-inline">
        <input type="radio"  value="2" className="rate" onChange={(e) => setRate(e.target.value)} 
            /> 2
        </label>
        <label className="radio-inline">
        <input type="radio"  value="3" className="rate" onChange={(e) => setRate(e.target.value)} 
            /> 3
        </label>
        <label className="radio-inline">
        <input type="radio"  value="4" className="rate" onChange={(e) => setRate(e.target.value)} 
            /> 4
        </label>
        <label className="radio-inline">
        <input type="radio"  value="5" className="rate" onChange={(e) => setRate(e.target.value)} 
            /> 5
        </label> */}


        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1" onChange={(e) => setRate(e.target.value)}/>
        <label className="form-check-label" >
            1
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="2" onChange={(e) => setRate(e.target.value)}  />
        <label className="form-check-label" >
            2
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="3" onChange={(e) => setRate(e.target.value)}/>
        <label className="form-check-label" >
            3
        </label>
        </div>

        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="4" onChange={(e) => setRate(e.target.value)}/>
        <label className="form-check-label" >
            4
        </label>
        </div>

        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="5" onChange={(e) => setRate(e.target.value)}/>
        <label className="form-check-label" >
            5
        </label>
        </div>


        <button >Submit Rating</button>
        {error && <div className="error">{error}</div>}
        </form>
    );
    }

    export default RadioButtonsRateACourse;