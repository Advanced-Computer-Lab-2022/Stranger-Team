    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"


    const RequestHeadings = ({ problem }) => {

        const[currCourse, setCurrCourse]=useState('');
        const[price, setPrice]=useState('');

        const fetchCourse = async () => {
        const params = new URLSearchParams(window.location.search);
        // const traineeId = params.get('TraineeId');
        // console.log(traineeId); 
        // const reportId = params.get('RequestId');
        // console.log(traineeId); 
        const courseId = problem.Course_Id;
        
        
        const response = await fetch(`/getCurrentCourse/?CourseId=${courseId}`)

        
        
        const json = await response.json()
        console.log(response)
        console.log( json)

        if (response.ok) {
            
            setCurrCourse(json.Title);
            setPrice(json.Price);
        }
        }

        fetchCourse()

    return (

        <div className="course-details">
        <hr/>
        <h4><strong>Course: </strong></h4>
        <p><strong>{currCourse}</strong></p>
        <h4><strong>Amount to be refunded: </strong></h4>
        <p><strong>{price}</strong></p>
        <hr/>
        </div>
        
        

    )
    }

    export default RequestHeadings