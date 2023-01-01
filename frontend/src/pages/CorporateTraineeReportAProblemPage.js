    //REMOVED IDs' ===>>>>>>DONE

    import { useState } from 'react'
    import styles from '../components/Guest/styles.module.css';
    import CorporateTraineeProfileNavBar from '../components/CorporateTraineeProfileNavBar'

    const CorporateTraineeReportAProblemPage = () => {
    const [Reported_Problem,setReported_Problem] = useState('')
    const [Report_Title,setReport_Title] = useState('')
    const[Report_Type,setReport_Type]= useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        //const corporateTraineeId = queryParams.get('CorporateTraineeId');
        //console.log(corporateTraineeId);
        const courseId = queryParams.get('CourseId');


        const report = {Report_Title,Reported_Problem,Report_Type};
        console.log(report)

        //?CorporateTraineeId=${corporateTraineeId}
        const response = await fetch('/corporateTraineeSendReport', {
        method: 'POST',
        body: JSON.stringify(report),
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
        setReported_Problem('')
        setReport_Title('')
        setReport_Type(null)
        
        console.log('report sent:', json)
        //CorporateTraineeId=${corporateTraineeId}
        window.location=`http://localhost:3000/CurrentCoursePageCorporateTrainee?CourseId=${courseId}`
        }

    }

    return (
        
        // <form className="create" onSubmit={handleSubmit}> 
        // <CorporateTraineeProfileNavBar/>
        // <h3>Fill In The Following Fields To Send Your Report:</h3>

        // <div className="form-check">
        // <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Technical" onChange={(e) => setReport_Type(e.target.value)}/>
        // <label className="form-check-label" >
        //     Technical
        // </label>
        // </div>
        // <div className="form-check">
        // <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Financial" onChange={(e) => setReport_Type(e.target.value)}  />
        // <label className="form-check-label" >
        //     Financial
        // </label>
        // </div>
        // <div className="form-check">
        // <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Other" onChange={(e) => setReport_Type(e.target.value)}/>
        // <label className="form-check-label" >
        //     Other
        // </label>
        // </div>

        // <label>Report Title:</label>
        // <input 
        //     className='course'
        //     type="text" 
        //     onChange={(e) => setReport_Title(e.target.value)} 
        //     value={Report_Title}
        // />

        // <label> Please write a brief description of the issue so we could help you to the best of our abilities:</label>
        // <input 
        //     className='course'
        //     type="text" 
        //     onChange={(e) => setReported_Problem(e.target.value)} 
        //     value={Reported_Problem}
        // />

        // <button>Submit Report</button>
        // {error && <div className="error">{error}</div>}
        // </form>
        //-------------------------------------------------------------------------
        <>
        <CorporateTraineeProfileNavBar/>
        <form className="create" onSubmit={handleSubmit} style={{marginTop:'20px',marginLeft:'10px'}}> 
        <h3>Fill In The Following Fields To Send Your Report:</h3>

        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Technical" onChange={(e) => setReport_Type(e.target.value)}/>
        <label className="form-check-label" >
            Technical
        </label>
        </div>
        {/* <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Financial" onChange={(e) => setReport_Type(e.target.value)}  />
        <label className="form-check-label" >
            Financial
        </label>
        </div> */}
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Other" onChange={(e) => setReport_Type(e.target.value)}/>
        <label className="form-check-label" >
            Other
        </label>
        </div>
        

        <label> Report Title:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setReport_Title(e.target.value)} 
            value={Report_Title}
        />

        <label> Please write a brief description of the issue so we could help you to the best of our abilities:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setReported_Problem(e.target.value)} 
            value={Reported_Problem}
        />

        <button className={styles.blueButton}>Submit Report</button>
        {error && <div className="error">{error}</div>}
        </form>
        </>
    )
    }

    export default CorporateTraineeReportAProblemPage