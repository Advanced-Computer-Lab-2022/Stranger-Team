    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    import { useEffect, useState } from "react"
    import styles from "../components/Guest/styles.module.css"


    const ReportHeadings = ({ problem }) => {


    return (

        // <div className="course-details">
        // <h4><strong>Report Title: </strong></h4>
        // <p><strong>{problem.Report_Title}</strong></p>
        // <hr/>
        // </div>

        <>
        
        <form className="create" style={{marginTop:'20px',marginLeft:'10px'}}>
        

        <div className={styles.proceedToPayment}>
            <h4 ><strong>Report Title: </strong></h4> 
            <p>{problem.Report_Title}</p> 
        </div>

        {/* {error && <div className="error">{error}</div>} */}
        </form>
        </>
        
        

    )
    }

    export default ReportHeadings