    //sessions done
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"


    const CurrentReportPageDetails = ({ problem }) => {


    return (

        <div className="course-details">
        <h4><strong>Report Title: </strong></h4>
        <p>{problem.Report_Title}</p>
        <hr/>
        <h4><strong>Reported Problem: </strong></h4>
        <p>{problem.Reported_Problem}</p>
        <hr/>
        <h4><strong>Report Type: </strong></h4>
        <p>{problem.Report_Type}</p>
        <hr/>
        <h4><strong>Report Status: </strong></h4>
        <p>{problem.Status}</p>
        <h4><strong>Followups Sent:</strong></h4>
        {
        problem.Followups.map((q, i) => (
        <p  id={`q${i}-option`} visible="false">FOLLOW-UP {i+1}: <strong>{problem.Followups[i]}</strong></p>
                        ))
        }
        
        </div>
        
        

    )
    }

    export default CurrentReportPageDetails