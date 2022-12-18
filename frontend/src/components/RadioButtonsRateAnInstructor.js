    import React, { useState } from "react";
    import 'bootstrap/dist/css/bootstrap.min.css'
    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import { useNavigate,useLocation  } from "react-router-dom";



    const RadioButtonsRateAnInstructor = () => {
    const [rate, setRate] = useState(null);
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 
        console.log("rate"+rate);
        const response = await fetch(`/ratingAnInstructor/?id=${instructorId}&rating=${rate}`)
        // const response = await fetch(`/ratingAnInstructor/?id=${instructorId}&rating=${rate}`, {
        //     method: 'POST',
        //     body: JSON.stringify(rate),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

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

    // let navigate = useNavigate();

    //     const routeChange = () =>{ 
    //     const params = new URLSearchParams(window.location.search);
    //     const instructorId = params.get('id');
    //     let path = `/CurrentCourseInstructorPage/?id=${instructorId}`; 
    //     navigate(path);
    // }

    return (
        <form onSubmit={handleSubmit}>
        {/* <input type="radio" value="1" name="rate"/> 1
        <input type="radio" value="2" name="rate"/> 2
        <input type="radio" value="3" name="rate"/> 3
        <input type="radio" value="4" name="rate"/> 4
        <input type="radio" value="5" name="rate"/> 5 */}
        {/* <label className="radio-inline">
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
        {error && <div classNameName="error">{error}</div>}
        </form>
    );
    }

    export default RadioButtonsRateAnInstructor;