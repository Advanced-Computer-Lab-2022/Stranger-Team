    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"


    const ReportHeadings = ({ problem }) => {


    return (

        <div className="course-details">
        <h4><strong>Reported Problem: </strong></h4>
        <p>{problem.Reported_Problem}</p>
        <hr/>
        </div>
        
        

    )
    }

    export default ReportHeadings