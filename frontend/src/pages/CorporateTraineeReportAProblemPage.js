    import { useState } from 'react'

    const CorporateTraineeReportAProblemPage = () => {
    const [Reported_Problem,setReported_Problem] = useState('')
    const[Report_Type,setReport_Type]= useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const corporateTraineeId = queryParams.get('CorporateTraineeId');
        console.log(corporateTraineeId);
        const courseId = queryParams.get('CourseId');


        const report = {Reported_Problem,Report_Type};
        console.log(report)

        const response = await fetch(`/corporateTraineeSendReport/?CorporateTraineeId=${corporateTraineeId}`, {
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
        setReport_Type(null)
        
        console.log('report sent:', json)
        window.location=`http://localhost:3000/CurrentCoursePageTrainee?CorporateTraineeId=${corporateTraineeId}&CourseId=${courseId}`
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Fill In The Following Fields To Send Your Report:</h3>

        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Technical" onChange={(e) => setReport_Type(e.target.value)}/>
        <label className="form-check-label" >
            Technical
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Financial" onChange={(e) => setReport_Type(e.target.value)}  />
        <label className="form-check-label" >
            Financial
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Other" onChange={(e) => setReport_Type(e.target.value)}/>
        <label className="form-check-label" >
            Other
        </label>
        </div>

        <label> Please write a brief description of the issue so we could help you to the best of our abilities:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setReported_Problem(e.target.value)} 
            value={Reported_Problem}
        />

        <button>Submit Report</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
    }

    export default CorporateTraineeReportAProblemPage